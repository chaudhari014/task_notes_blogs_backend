const { noteModel } = require("../model/note.model")

const createNotes=async(req,res)=>{
    const {title,content}=req.body
    if(!title || !content){
      return  res.status(400).json({"msg":"please provide all detail"})
    }
    try {
        const notes= new noteModel({title,content})
        await notes.save()
       return res.status(200).json({"msg":"note created successfully",data:notes})
    } catch (error) {
      return  res.status(400).json({"error":error.message})
    }
}
const getAllNotes=async(req,res)=>{
    try {
        const notes=await noteModel.find()
         return res.status(200).json({"msg":"get all notes Successfully",data:notes})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const getSingleNotes=async(req,res)=>{
    const {id}=req.params
    try {
        const note=await noteModel.findById({_id:id})
        return res.status(200).json({"msg":"get note Successfully",data:note})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const updateNotes=async(req,res)=>{
     const {id}=req.params
  
    try {
        const note=await noteModel.findByIdAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).json({"msg": "Note updated successfully",data:note})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const deleteNotes=async(req,res)=>{
    const {id}=req.params
     
    try {
        const note=await noteModel.findByIdAndDelete({_id:id})
        return res.status(200).json({"msg": "Note delete successfully"})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}



module.exports={createNotes,getAllNotes,getSingleNotes,updateNotes,deleteNotes}