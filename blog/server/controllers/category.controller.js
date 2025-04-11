const Category = require('../models/category.models');

const getAllCategory=async(req,res)=>{
  try {
    const categories=await Category.find({})

    if(!categories){
      return res.status(400).json({
        message:"No categories found"
      })
    }
    return res.status(200).json({
      message:"All categories",
      categories
    })
    
  } catch (error) {
    return res.status(500).json({
      message:"Error in getting all categories",
      error:error
    })
  }

 
}



const addNewCategory=async(req,res)=>{
  try {
    const {title}=req.body;
    if(title==""){
      return res.status(400).json({
        message:"Please enter all the fields"
      })
    }
    let newcat = await Category.findOne({title})
    if(newcat){
      return res.status(400).json({
        message:"Category already exists"
      })
    }
    newcat=await Category.create({title})
     
    return res.status(200).json({
      message:"New category added",
      newcat
    })
  } catch (error) {
    return res.status(500).json({
      message:"Error in creating new categories",
      error:error
    })
  }
 

}


























module.exports={getAllCategory,addNewCategory}