const express = require('express')
const router = express.Router()


router.get('/all',(req,res)=>{
    console.log("All Students Data")
    res.send("Students Data")
})

router.post('/insert',(req,res)=>{
    console.log("Student Inserted Successfully")
    res.send("Students Inserted Successfully")
})

router.put('/update',(req,res)=>{
    console.log("Students Record Updated ")
    res.send("Students Record updated")
})

router.delete('/delete',(req,res)=>{
    console.log("Student Deleted")
    res.send("Students Deleted")
})


module.exports = router