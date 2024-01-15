const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:bunny123@cluster0.949yvjg.mongodb.net/task_manager");

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Tasks = mongoose.model('Tasks',taskSchema)


module.exports={
    Tasks
}
