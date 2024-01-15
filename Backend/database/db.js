const mongoose = require("mongoose");

mongoose.connect("");

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const Tasks = mongoose.model('Tasks',taskSchema)
const User = mongoose.model('User',userSchema)

module.exports={
    Tasks,User
}
