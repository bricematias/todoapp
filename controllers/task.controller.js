const taskModel = require("../models/task.model")

module.exports.allTask= (req,res) =>{
    taskModel
    .find((err,docs) =>{
        if (!err) return res.status(200).send(docs)
        else return res.status(400).send("Erro")
    })
    .sort({createdAt: -1})
}


module.exports.addTask = async(req,res) =>{
    const newTask = new taskModel({
        task: req.body.title,
    })

    try {
        const post = await newTask.save()
        return res.status(201).json
    } catch (err){
        return res.status(400).json({message : err})
    }
}