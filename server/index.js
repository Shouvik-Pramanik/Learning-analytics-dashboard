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


app.post("/getd", (req,res) => {
    var {email,password} = req.body
    User.findOne({email:email}, (err,user) => {
        if(err)
        console.log("Error")

        if(!user)
        {
            res.send("")
        }

        if (password === user.password) {
            const token=jwt.sign(
                {
                    name: email,
                },
                "CreatingToken"
            )
        }else{
            res.send("")
        }
    }).catch(error=>{
        console.log(error)
    })
    
    User.findOne({email:email},(err,data)=>{
        if(err)
        console.log("Error")
        global.a=data.T2
        console.log(data);
        res.send(data)
    })
})


app.listen(1202, () => {
    console.log("Server connected at port 1202")
})