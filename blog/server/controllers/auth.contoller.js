const user = require('../models/auth.model');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()
const userRegistration=async(req,res)=>{
  try {
    const {username,email,password}=req.body
    if(username==''||email==""||password==""){
      return res.status(400).json({
        message:"Please enter all the fields"
      })
    }
    let user1=await user.findOne({email:email})
    if(user1){
      return res.status(400).json({
        message:"User already exists"
      })
    }
    const hashedPassword=await bcrypt.hash(password,10)
    user1=await user.create({
      username,email,password:hashedPassword
    })

    return res.status(200).json({
      message:"User registered successfully",
      user:`welcome ${user1.username}`
      
    })
  } catch (error) {
    return res.status(500).json({
      message:"User not registered",
      error:error
    })
  }
}







const login=async(req,res)=>{
try {
  const {email,password}=req.body;
  if(email=="" || password==""){
    return res.status(400).json({
      message:"Please Enter all the fields"
    })
  }
  let user1=await user.findOne({email:email})
  if(!user1){
    return res.status(400).json({
      message:"User does not exists"
    })
  }
  const isMatch=await bcrypt.compare(password,user1.password)
  if(!isMatch){
    return res.status(400).json({
      message:"Invalid Credentials"
  })
  }
  const token=jwt.sign({userID:user1._id},process.env.SECRETKEY,{expiresIn:"2h"})
  return res.status(200).json({
    message:"User logged in successfully",
    token,
    username:user1.username
    
  })

 }catch (error) {
  return res.status(500).json({
    message:"User not logged in",
    error:error.message
  })
}

}
module.exports={userRegistration,login}