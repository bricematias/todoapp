const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
    {
    task: {
        type: String,
        required: true,
        unique: true,
        maxLenght: 255,
    },
},
)


module.exports = mongoose.model("task", TaskSchema)