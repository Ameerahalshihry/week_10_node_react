const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
 name : { type: String, required: true},
 description: { type: String, maxlength: 100},
 status : { type: Boolean, default: false}

}, {timestamps : true})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
