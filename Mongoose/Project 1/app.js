const { json } = require('express');
const mongoose = require('mongoose');
const connectDB = require('./DB/connectDB')
const studentModel = require('./models/student')
const url = "mongodb://localhost:27017/Temp";

connectDB(url)
.then(response =>{
    console.log("Connected To DB")
})
.catch()
{
    console.log("Error While connecting with DB");
}


const readData = async ()=>{
   try{
    let data = await studentModel.find()
    console.log(data)
   }
   catch(err)
   {
       console.log("Error:",err);
   }
}


const insertData = async ()=>{
    try{
        const studentDoc = studentModel({
            name:"RK",
            salary:60000.12,
            age:23,
        })

        const data = await studentDoc.save()
        console.log(data)
    }
    catch(err)
    {
        console.log("Error While Inserting Data:",err)
    }
}

const updateData =async (id)=>{
    try{
        const updatedStudent = await studentModel.findByIdAndUpdate(id, { name:"Sujay",salary:30000,age:23 }, { new: true });   // id -> '661936abfd25e2be3cb59f69'
        console.log(updateStudent)
    }
    catch(err)
    {
        console.log("Error While Updating Data:",err)
    }
}


const deleteData = async (name) => {
    try{
        const deletedStudent = await studentModel.findOneAndDelete({ name: name });

        if (deletedStudent) {
            console.log('Deleted student:', deletedStudent);
        } else {
            console.log('Student not found');
        }
    }
    catch(err)
    {
        console.log("Error While Deleting Data:",err)
    }
}


// deleteData();
// readData()
// insertData()
// updateData()



