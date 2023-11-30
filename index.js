
const express= require('express')
const cors = require("cors");
const mongoose=require("mongoose");
const app= express()
const dB=require('./middlewares/dB');
const router=require('./routes/form-routes');

dB.connectTodB();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/",router);


app.listen(9002,()=>{
    console.log("Server is started on 9002");
})
