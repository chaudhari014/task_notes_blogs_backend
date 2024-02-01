const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const {connect} =require("./config/db")
const { noteRouteHandler } = require("./routes/note.route")
const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())

const port=process.env.PORT || 8010

app.get("/",(req,res)=>{
    res.send({"msg":"port 8010 running"})
})
app.use("/api/notes",noteRouteHandler)
app.listen(port,async()=>{
    try {
        await connect
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server start")
})