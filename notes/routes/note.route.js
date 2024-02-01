const express=require("express")
const { createNotes, getAllNotes, getSingleNotes, updateNotes, deleteNotes } = require("../controller/note.controller")

const noteRouteHandler=express.Router()


noteRouteHandler.post("/",createNotes)
noteRouteHandler.get("/",getAllNotes)
noteRouteHandler.get("/:id",getSingleNotes)
noteRouteHandler.put("/:id",updateNotes)
noteRouteHandler.delete("/:id",deleteNotes)

module.exports={noteRouteHandler}