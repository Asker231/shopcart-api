require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3002

app.get('/',(req,res)=>{
    try {
        res.status(200)
        res.send("</h1>Hello cartshopAPI</h1>")
    } catch (error) {
        console.log(error);
    }
    res.end()
})
app.listen(PORT,(err)=>{
    if(!err)console.log(`server started:http://localhost:${PORT}/ `);
})

