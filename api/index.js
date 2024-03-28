/* The statement const express = require('express') is used in Node.js applications to import the Express library. Here's a breakdown of what each part of this statement does:

const express: This declares a constant variable named express. Using const means that once express is assigned, its value cannot be changed later in the code.
require('express'): This part calls the require function with the argument 'express'. The require function is a built-in Node.js function used to import modules (libraries, files, etc.). When you pass the string 'express' to require, it tells Node.js to load the Express module.*/

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require("mongoose");

/* The require('express') statement effectively brings the Express module into your file, allowing you to use its methods and properties by accessing them through the express variable. After importing Express, you can create an instance of an Express application by calling express(), like so: */
 const app = express();

 /* This app object is then used to set up your server, including routes, middleware, and listening on a port for incoming connections.*/

app.use(cors());
app.use(express.json());

 app.get('/api/test',(req, res) => {
    res.json("test ok2");
 });

 app.post('/api/transaction',async(req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {name, description, datetime,price} = req.body;
    const transaction = await Transaction.create({name,description,datetime,price});
    res.json(transaction);
 });

 app.get('/api/transactions',async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
 });

 app.listen(4000); 