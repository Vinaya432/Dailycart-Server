require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connection/db')
const router=require('./Routes/router')

const DailyCartServer=express()
DailyCartServer.use(cors())
DailyCartServer.use(express.json())
DailyCartServer.use(router)

const PORT=3000

DailyCartServer.listen(PORT,()=>{
    console.log(`DailyCart Server started at port:${PORT}`);
})

DailyCartServer.get('/',(req,res)=>{
    res.send(`<h1>DailyCart Server started !!!</h1>`)
})