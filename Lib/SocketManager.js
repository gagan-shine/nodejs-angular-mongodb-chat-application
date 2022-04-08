let io,
    // miniSocket,
    // redis,
    Models = require('../models');

exports.connectSocket = (server, redisClient) => {
    try {
        // redis = redisClient;
        io = require('socket.io')(server, {
            cors: {
                origin: '*',
            }
        });
        io.on('connection', async (socket) => {

            console.log("socket connetion done")
            // miniSocket = socket;
            
            /* On new connection, save connection's user id in redis with socket id*/
            if (socket.handshake.query.id)
                await redisClient.set(socket.handshake.query.id, socket.id); //key value in
                
            socket.on('joinRoom', async (roomId, ack) => {
                try {
                    socket.join(roomId);
                    ack(roomId)
                }
                catch (err) {
                    console.log(err);
                }
            })

            socket.on('message', async (data,ack) => {
                try {
                    var chatData = new Models.Chat({
                        senderId: data.senderId,
                        receiverId: data.receiverId ? data.receiverId : null,
                        groupId:data.groupId ? data.groupId : null,
                        conversationId: data.receiverId ? (data.receiverId > data.senderId ? (data.receiverId + data.senderId) : (data.senderId + data.receiverId)) : data.groupId, //conversationId is thread id, which will help in generating chat list and to get list of messages
                        text: data.text, // message
                        chatType: data.chatType //chat type [1-one to one chat, 2 - group chat]
                    });
                    chatData.save(function(err, result){console.log(err,result)})
                    if (data.chatType==2) {
                        socket.to(data.groupId).emit("message", data);
                    }
                    else {
                        let getSocketId = await redisClient.get((data.receiverId));
                        io.to(getSocketId).emit("message", data);
                    }

                    ack(data);
                }
                catch (er) {
                    console.log(er);
                }
            });

            socket.on('disconnect', function () {
            });

        });


    }
    catch (err) {
        console.log(err);
    }
};