let mongoose = require('mongoose');

let Schema = mongoose.Schema;


let Userschema = new Schema({
    name: { type: String, index: true, default: "" },
    email: { type: String, index: true, default: "" },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

const user = mongoose.model('Users', Userschema);
module.exports = user;
