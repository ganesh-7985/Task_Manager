const express = require("express");
const app = express();
app.use(express.json());
const { Tasks } = require("./database/db")

app.post("/newTask", (req, res) => {
    const title = req.headers.title;
    const description = req.headers.description;
    const deadline = req.headers.deadline;

    Tasks.create({
        title: title,
        description: description,
        deadline: deadline
    })
    res.json({
        msg: "New Task added successfully"
    })


})

app.get("/getTasks", (req, res) => {
    const getTask = Tasks.find({})
    res.json({
        getTask
    })
})

app.put("/updateTask", (req, res) => {
    const title = req.headers.title;
    Tasks.findOneAndUpdate({
        title
    },)


})

app.delete("/deleteTask", (req, res) => {

})


module.exports = {
    JWT_Secret
}
app.listen(3000);