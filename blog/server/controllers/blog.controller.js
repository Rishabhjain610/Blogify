const Blog = require("../models/blog.models");

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find({ user: req.user });
    if (!blogs) {
      return res.status(400).json({
        message: "No blogs found",
      });
    }
    return res.status(200).json({
      message: "All blogs",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting all blogs",
      error: error.message,
    });
  }
};

const addNewBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    if (title == "" || category == "" || description == "") {
      return res.status(400).json({
        message: "Please enter all the fields",
      });
    }
    let newblog = await Blog.create({
      title,
      category,
      description,
      thumbnail: req.file.filename,
      user: req.user,
    });

    return res.status(200).json({
      message: "New blog added",
      newblog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in adding new ",
      error: error.message,
    });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Please enter all the fields",
      });
    }
    let blog = await Blog.findById({ _id: id, user: req.user });
    if (!blog) {
      return res.status(400).json({
        message: "No blog found",
      });
    }

    return res.status(200).json({
      message: "Single blog",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting single blog",
      error: error.message,
    });
  }
};

const DeletById = async (req, res) => {
  try {
    const { id } = req.params;

    
    let blog = await Blog.findByIdAndDelete({ _id: id, user: req.user });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting blog",
      error: error.message,
    });
  }
};


const UpdatePost=async(req,res)=>{
  try {
    const {id}=req.params;
    const {title,description}=req.body;
    let updated=await Blog.findByIdAndUpdate({ _id: id, user: req.user },{title,description},{new:true})
    if(!updated){
      return res.status(404).json({
        message:"Blog does not exists"
      })
    }
    return res.status(200).json({
      message:"Blog updated successfully",
      data:updated
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error in updating a blog",
      error: error.message,
    });
  }
}







module.exports = { getAllBlogs, addNewBlog, getSingleBlog,DeletById,UpdatePost };
