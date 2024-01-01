const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true, 'Task giriniz']
    },
    status:{
        type:String,
    }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task