import express from 'express';
const app = express()

import dotenv from 'dotenv';
dotenv.config();

//Db Connection
import dbConnect from './config/mongoConnect.mjs';
dbConnect()

//middleware
app.use(express.static('./public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//view Engine config
app.set('view engine','ejs');
app.set('views', ['./views/user', './views/admin']);

//route modules
import authRoutes from './routes/user/authRoutes.mjs';
import productRoutes from './routes/user/productRoutes.mjs'

//routes
app.use('/auth',authRoutes) 
app.use('/',productRoutes)

//port config
const port = process.env.serverPort||5000

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

