//jshint esversion:6
var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
const jwt=require("jsonwebtoken")

mongoose.connect("mongodb+srv://ShouvikP:LmaoDed@mlbd.tmzqfea.mongodb.net/users?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("Connected to user database")
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    T1: Number,
    T2: Number,
    T3: Number,
    C431_12_1: Number,
    C431_12_2: Number,
    C431_12_3: Number,
    C431_12_4: Number,
    C431_12_5: Number,
    C431_12_1_1: Number,
    C431_12_2_1: Number,
    C431_12_3_1: Number,
    C431_12_4_1: Number,
    C431_12_5_1: Number
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
            // console.log(T1)
            res.send({message : "Login Successful",user: token})
        }else{
            res.send({message : "Error logging in"})
        }
    })
    User.findOne({email:email},(err,data)=>{
        console.log(data.T1,data.C431_12_3_1)
    })
})

app.listen(1200, () => {
    console.log("Server connected at port 1200")
})