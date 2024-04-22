const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const student = require('./routes/student')
const connectDb = require('./db/studentConnect');
const url = "mongodb://localhost:27017/Temp"

connectDb(url)
.then(response=>{
    console.log("Connected TO database successfully");
})
.catch()
{
    console.log("Error While connecting to DB")
}

app.use(bodyParser.urlencoded({extended:false})) 
app.use('/student',student)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})