import express from 'express';
const app = express()

import dotenv from 'dotenv';
dotenv.config();

//Db Connection
import dbConnect from './config/mongoConnect.mjs';
dbConnect()

//port config
const port = process.env.serverPort||5000

//Parser config
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//view Engine config
app.set('view engine','ejs');

//view Engine path
app.set('views', ['./views/user', './views/admin']);
app.use(express.static('./public'))  

import userRoute from './routes/userRoute.mjs';
app.use('/',userRoute)


app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})



