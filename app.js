const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const port = 1000;
const {MongoClient} = require('mongodb');
// const mongoUrl = "mongodb+srv://userauthenticate:EbHB1nrm17K6tdg7@cluster0.16ffmn9.mongodb.net/?retryWrites=true&w=majority";
const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoUrl, {useNewUrlParser:true,useUnifiedTopology:true});
// const mongo = require('mongodb');

client.connect((err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("connected to mongodb database");
})

app.use(express.json())

// const users = []
const users = client.db("userauth").collection("users");

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        }else{
            res.send('Not Allowed')
        }
    }catch{
        res.status(500).send()
    }
})

app.listen(port, (err)=>{
    dbConnect()
    if (err) throw err;
    console.log(`server is running on port ${port}`)
});


// db.users.insert({"name":"Aboje Gabriel"})
// db.users.insert({"name":"James Moses"})

// database password: EbHB1nrm17K6tdg7 

// mongodb+srv://userauthenticate:EbHB1nrm17K6tdg7@cluster0.16ffmn9.mongodb.net/?retryWrites=true&w=majority