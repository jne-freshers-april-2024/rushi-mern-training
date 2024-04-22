const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "Temp"
const collection = "Employee"


const dbConnection = async ()=>{
     let connection = await client.connect(url);
     let db = connection.db(database);
     return db.collection(collection);
}

module.exports = dbConnection;