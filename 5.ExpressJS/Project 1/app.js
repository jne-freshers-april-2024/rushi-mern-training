const express = require('express');
const app = express();
const student = require('./routes/student');
const teacher = require('./routes/teacher')

const port = process.env.PORT || '3000'

app.use('/student',student)
app.use('/teacher',teacher)



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

