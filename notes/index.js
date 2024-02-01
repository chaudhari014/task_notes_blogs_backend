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
    res.send({"msg":"home page"})
})
app.use("/api/notes",noteRouteHandler)

app.use((req, res) => {
    res.status(404).json({ "error": "Route is not defined" });
});

//error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something went wrong",
  });
});
app.listen(port,async()=>{
    try {
        await connect
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server start")
})