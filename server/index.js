//jshint esversion:6
var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
const jwt=require("jsonwebtoken")

mongoose.connect("mongodb+srv://ShouvikP:LmaoDed@mlbd.tmzqfea.mongodb.net/LoginCreds?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("Connected to Database")
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)
app.post("/login", (req,res) => {
    const {email,password} = req.body
    User.findOne({email:email}, (err,user) => {
        if(!user)
        {
            res.send({message : "User not found"})
        }

        if (password === user.password) {
            const token=jwt.sign(
                {
                    name: email,
                },
                "CreatingToken"
            )
            res.send({message : "Login Successful",user: token})
        }else{
            res.send({message : "Error logging in"})
        }
        
    })
})

app.listen(1200, () => {
    console.log("Server connected at port 1200")
})