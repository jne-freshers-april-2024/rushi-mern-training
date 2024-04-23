const dbConnection = require('./mongodb');


dbConnection()
.then(response=>{
    console.log("Connected to Database");
})
.catch(err)
{
    console.log("Error While Connecting with Database:",err)
}


const getData = async ()=>{
    try{
        const response = await collection.find().toArray();
    }
    catch(err)
    {
        console.log("Error While getting Data:",err)
    }
}


const insertData = async ()=>{
    try{
        let result = await collection.insertOne({name:"Vedant",salary:50000,age:23})
        if(result.acknowledged)
        console.log("Data inserted");
    }
    catch(err)
    {
        console.log("Error while Reading Data :",err)
    }
}



const updateData = async (oldData, newData)=>{
    try{
        let result = await collection.updateOne(oldData,{$set:newData})
        if(result.acknowledged)
            console.log("Data Updated")
    }
    catch(err)
    {
        console.log("Error while Updating Data:",err)
    }
}

const deleteData = async(data)=>{
    try{
        let result = await collection.deleteOne(data)
        if(result.acknowledged)
            console.log("Data Deleted")
    }
    catch(err)
    {
        console.log("Error While Updating Data:",err)
    }
}
// getData()
// insertData()
// updateData({name:"Vedant"},{name:"Vedant Thakare",salary:55000,age:24})
deleteData({name:"Sujay"})




