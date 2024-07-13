const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://0.0.0.0:27017/crudApp'

const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})


app.use(express.json())

const alienRoute = require('./routes/aliens')
app.use('/aliens',alienRoute)

app.listen(9001,()=>{
    console.log("sever started")
})