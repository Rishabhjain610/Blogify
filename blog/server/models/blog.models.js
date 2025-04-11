const mongoose = require('mongoose');
const {Schema,model}=mongoose
const BlogSchema=new Schema({
title:{
  type:String,
  required:true
},
category:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"category",
  required:true
},
description:{
  type:String,
  required:true
},
thumbnail:{
  type:String,
  required:true
},
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user",
}

})
module.exports=model("blog",BlogSchema)