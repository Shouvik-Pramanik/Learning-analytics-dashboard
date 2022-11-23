//jshint esversion:6
var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

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
        if(user){
            if (password === user.password) {
                res.send({message : "Login Successful",user: user})
            }else{
                res.send({message : "Passwords do not match"})
            }
        }
        else{
            res.send({message : "User not found"})
        }
    })
    console.log(req.body)
})

app.listen(1200, () => {
    console.log("Server connected at port 1200")
})