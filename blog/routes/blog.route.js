const express=require("express")
const { createBlog, getAllBlogs, getSingleBlogs, updateBlogs, deleteBlogs, getPostByTag } = require("../controller/blog.controller")

const blogRouteHandler=express.Router()


blogRouteHandler.post("/",createBlog)
blogRouteHandler.get("/",getAllBlogs)
blogRouteHandler.get("/:id",getSingleBlogs)
blogRouteHandler.get("/tags/:tag",getPostByTag)
blogRouteHandler.put("/:id",updateBlogs)
blogRouteHandler.delete("/:id",deleteBlogs)

module.exports={blogRouteHandler}
