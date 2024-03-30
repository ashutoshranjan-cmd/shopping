import express from "express";
import cors from 'cors'

const app = express()
const cor = cors()

app.get("/",(req,res)=>{
    res.send("i am working")
})
const port = process.env.port || 3000
app.listen(port,()=>{
    console.log('the server is connected');
})