require('./env-validation');
var express = require('express');
const cors = require('cors');
var app = express();
const server = require('http').Server(app);
const mongoose = require('mongoose');
var SocketManager = require('./Lib/SocketManager')
var redis = require("async-redis");
var redisClient = redis.createClient();



global.ObjectId = mongoose.Types.ObjectId;

var mongoURI = require('./config/dbConfig').mongo;


// require all routes and de structure the array
const [admin_api] = require('./src').routes;

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', function (err) {
    console.log(err);
    console.log('error in connecting, process is exiting ...');
    process.exit();
});
mongoose.connection.once('open', function () {
    console.log('Successfully connected to database');
});

app.use('/admin', admin_api);
app.options('/*', cors()) // enable pre-flight request for DELETE request

SocketManager.connectSocket(server,redisClient);
server.listen(process.env.PORT, function () {
    console.log('Node app is running on port', process.env.PORT);
});
module.exports = app;
