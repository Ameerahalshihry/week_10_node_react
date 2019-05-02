const express = require('express')
const router = express.Router()
//import todo model
const Todo = require('../models/todo')

//find all todos
router.get('/', (req, res)=> {

 Todo.find()
 .then((todos)=> {
  res.json({ todos : todos })
 })
 .catch(err => {
   res.json({ message : "Something went wrong!!!"})
 })

})

//post new todo
router.post('/', (req, res)=> {

 Todo.create(req.body)
 .then(() => {
   res.json({ message : "Todo Created Successfully!"})
 })
 .catch((err) => {
   res.json({ message : "Something went terribly wrong!"})
 })
 // res.status(200).json()
})

// http://localhost:7777/todos/123747588588558
router.get('/:id', (req, res)=> {
 
 Todo.findById(req.params.id)
 .then((todo) => {
  res.json({todo})
 })
 .catch(err => {
  res.json({message : "حدث خطأ ما 404"})
 })
})

router.put('/:id', (req, res)=> {

 Todo.findByIdAndUpdate(req.params.id, req.body)
 .then(()=>{
  res.json({message : "تم التحديث"})
 })
 .catch(err => {
  res.json({message : "حدث خطأ ما "})
 })

})

router.delete('/:id', (req, res)=> {
 rTodo.findByIdAndDelete(req.params.id)
 .then(()=>{
  res.json({message : "تو الحذف"})
 })
 .catch(err => {
  res.json({message : "حدث خطأ ما "})
 })

})
//200 201 400 404 500
module.exports = router