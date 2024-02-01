const mongoose=require("mongoose")
require("dotenv").config()
const connect=mongoose.connect(process.env.MONGODB_URL)

module.exports={connect}
