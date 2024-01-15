const express = require("express");
const app = express();
app.use(express.json());
const { Tasks } = require("./database/db");
const { createTodo, updateTodo } = require("./types");

app.post("/todo",async (req, res) => {
    const createpayload = req.body;
    const parsedpayload = createTodo.safeParse(createpayload);

    if(!parsedpayload.success){
        res.status(411).json({
            msg:"Wrong inputs are sent"
        })
        return;
    }
    await Tasks.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
       
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

app.put("/updateTask", async(req, res) => {
   const updatePayload = req.body;
   const parsedpayload = updateTodo.safeParse(updatePayload);

   if(!parsedpayload.success){
    res.status(411).json({
        msg:'wrong inputs'
    })
   }

   await Tasks.update({
     _id:req.body.id
   },{
    completed:true
   })
   res.json({
    msg:"Task updated successfully"
   })

})

app.listen(3000);