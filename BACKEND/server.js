//define the each dependencies to the variables
const express=require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors= require("cors");

const app= express();

require("dotenv").config(); 

//const dotenv=require("dotenv");

const PORT=process.env.PORT || 8070; //port number can be various port numbers

app.use(cors());

app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopologyL: true,
useFindAndModify: false

});

//connect the mongoDB connection
const connection=mongoose.connection;

connection.once("open", ()=> {

console.log("Mongodb Connection successful!");

});

const studentRouter =  require("./routes/students.js");

app.use("/student", studentRouter);


//MongoDB connection set to the port number to connect with the server
app.listen(PORT, ()=>{

console.log(`Server is up and running on port number: ${PORT}`);

});





