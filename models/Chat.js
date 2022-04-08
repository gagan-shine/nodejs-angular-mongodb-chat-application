'use strict'

const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

let Chat = new Schema({
    receiverId          : {type: Schema.Types.ObjectId,index: true,ref:'Users', default:null},
    senderId            : {type: Schema.Types.ObjectId,index: true,required:true,ref:'Users'},
    groupId             : {type: Schema.Types.ObjectId,index: true,ref:'Group', default:null},
    conversationId      : {type: String,required:true},
    text                : {type: String},
    chatType            : {type: Number, enum: [1,2], default: 1 },//1 - one to one, 2 - group 
    isDeleted           : {type: Boolean, default:false}
});

module.exports = mongoose.model('Chat',Chat);