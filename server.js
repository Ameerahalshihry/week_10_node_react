require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const URL = process.env.URL
const todoRoutes = require('./routes/todoroutes')
const mongoose = require('mongoose')
const cors = require('cors')



app.use(cors())

app.use(express.json()) //recieve json from req.body

mongoose.connect(URL, {useNewUrlParser : true})
.then(()=> console.log("mongdb running"),
 (err) => console.log(err))


// prefix todos to routes
app.use('/todos', todoRoutes)

//listen on port
app.listen(PORT, () => console.log(`active on ${PORT}`))