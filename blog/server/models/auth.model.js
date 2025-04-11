const mongoose = require('mongoose');
const {Schema,model}=mongoose
const UserSchema=new Schema({
  username:{ 
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})
module.exports=model("user",UserSchema)