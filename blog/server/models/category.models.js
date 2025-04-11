const mongoose=require('mongoose')
const {Schema,model}=mongoose
const CategorySchema=new Schema({
  title:{
    type:String,
    required:true
  }
},{timestamps:true})

module.exports=model("category",CategorySchema)