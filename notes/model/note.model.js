const mongoose=require("mongoose")

const noteSchem=mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true}

},{
    versionKey: false,
  timestamps: true
})

const noteModel=mongoose.model("note",noteSchem)

module.exports={noteModel}