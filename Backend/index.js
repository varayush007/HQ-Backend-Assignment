const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8000;
const {chats} = require('./data/data');

app.get("/",(req,res)=>{
    res.send("API is running");
})

app.get("/api/chat", (req,res)=>{
    res.send(chats);
})

app.get("/api/chat/:id", (req,res)=>{
    console.log(req.params.id);
    const singleuserchat  = chats.find((chat)=>chat._id === req.params.id);
    res.send(singleuserchat);
})

app.listen(PORT, console.log(`Server Started on PORT ${PORT}!!`));
