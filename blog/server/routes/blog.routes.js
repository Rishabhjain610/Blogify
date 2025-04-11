const express=require('express');
const router=express.Router();
const {userRegistration,login}=require('../controllers/auth.contoller')
const {getAllBlogs,addNewBlog,getSingleBlog,DeletById,UpdatePost}=require('../controllers/blog.controller')
const {getAllCategory,addNewCategory}=require('../controllers/category.controller')
const multer=require('multer');
const path=require('path');
const check = require('../middlewares/auth.middleware');


const storage=multer.diskStorage({
  destination:'./public/uploads',
  filename:function(req,file,cb){
    const uniqueSuffix=Date.now() + path.extname(file.originalname);
    cb(null,file.fieldname + "-" + uniqueSuffix);
  }
})


const upload=multer({
  storage:storage
})












router.post('/user/register',userRegistration)
router.post('/user/login',login)




//protected routes
router.get("/get/allblogs",check,getAllBlogs)
router.get("/get/singleblog/:id",check,getSingleBlog)
router.post("/add/newblog",upload.single("thumbnail"),check,addNewBlog)
router.delete("/get/singleblog/:id",check,DeletById)
router.put("/get/singleblog/:id",check,UpdatePost)











router.get('/get/categories',check,getAllCategory)
router.post('/add/category',check,addNewCategory)










module.exports=router