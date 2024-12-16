import express from 'express';
const app = express()

import dotenv from 'dotenv';
dotenv.config();

//Db Connection
import dbConnect from './config/mongoConnect.mjs';
dbConnect()

const port = process.env.serverPort||5000

app.use('')
app.use()



app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})



