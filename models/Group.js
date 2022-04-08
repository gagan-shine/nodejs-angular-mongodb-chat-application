
let mongoose = require('mongoose');

let Schema = mongoose.Schema;


let Groupschema = new Schema({
    groupName:      { type:String,default:""},
    isDeleted:      { type:Boolean,default:false }
},{timestamps:true});


module.exports = mongoose.model('Groups',Groupschema);