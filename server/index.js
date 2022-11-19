const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017")

app.post("/api/login",(req,res)=>{
    res.send("hello world")
})

app.listen(1200,()=>{
    console.log("started")
})