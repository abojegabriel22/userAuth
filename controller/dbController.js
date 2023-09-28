// const mongo = require('mongodb');
// const {MongoClient} = require('mongodb');
// const mongoUrl = "mongodb+srv://userauthenticate:EbHB1nrm17K6tdg7@cluster0.16ffmn9.mongodb.net/?retryWrites=true&w=majority";
// // const mongoUrl = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(mongoUrl);

// async function dbConnect(){
//     await client.connect()
// }

// let db = client.db("userauth");

// async function getData(colName, query){
//     let output = [];
//     try{
//         const cursor = db.collection(colName).find(query);
//         for await(const data of cursor){
//             output.push(data)
//         }
//         cursor.closed
//     }catch(err){
//         output.push({"error":"error in getData"})
//     }
//     return output
// }

// async function postData(colName,data){
//     let output;
//     try{
//         await db.collection(colName).insert(data)
//         output = {"response":"successful"}
//     }
//     catch(err){
//         output = {"response":"Error in postData"}
//     }
//     return output
// }

// module.exports = {
//     dbConnect,
//     getData,
//     postData
// }