const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();
const ConnectDB=async()=>{
try {
    await mongoose.connect(process.env.DB_URI,{dbName:"blogapp"})
    console.log("Db connected")
  }
 catch (error) {
  console.log(error)
}
}
module.exports=ConnectDB