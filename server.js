const express = require("express");

const mongoose = require ("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

app.get("/",(req,res)=>{
    return res.send("This is mongodb database")
})
mongoose.connect(MONGO_URL);
app.listen(5000,()=>{
    console.log(Server connected successfully);
})