const express = require('express');
const app=express()
const cors=require('cors')
const ConnectDB=require('./db/db')
const userrouter=require('./routes/blog.routes')
ConnectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public/uploads'))
app.use(cors())
app.get('/',(req,res)=>{
  res.send("Hello world")
})

app.use("/api/v1",userrouter)

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})