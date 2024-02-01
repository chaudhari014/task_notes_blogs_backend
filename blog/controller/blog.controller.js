const { blogModel } = require("../model/blog.model")

const createBlog=async(req,res)=>{
    const {title,content,tags}=req.body
    if(!title || !content ){
      return  res.status(400).json({"msg":"please provide all detail"})
    }
    try {
        const blogs= new blogModel({title,content,tags})
        await blogs.save()
       return res.status(201).json({"msg":"note created successfully",data:blogs})
    } catch (error) {
      return  res.status(400).json({"error":error.message})
    }
}
const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await blogModel.find()
         return res.status(201).json({"msg":"get all blogs Successfully",data:blogs})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const getSingleBlogs=async(req,res)=>{
    const {id}=req.params
    try {
        const blog=await blogModel.findById({_id:id})
        return res.status(200).json({"msg":"get blog Successfully",data:blog})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const updateBlogs=async(req,res)=>{
     const {id}=req.params
  
    try {
        const note=await blogModel.findByIdAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).json({"msg": "Note updated successfully",data:note})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const deleteBlogs=async(req,res)=>{
    const {id}=req.params
     
    try {
        const note=await blogModel.findByIdAndDelete({_id:id})
        return res.status(200).json({"msg": "blog delete successfully"})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const getPostByTag=async(req,res)=>{
  const { tag } = req.params;
  try {
    const postsWithTag = await blogModel.find({ tags: tag });
    res.status(200).json({ data: postsWithTag });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports={createBlog,getAllBlogs,getSingleBlogs,updateBlogs,deleteBlogs,getPostByTag}