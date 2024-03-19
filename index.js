require('dotenv').config()
const express = require('express')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use('/users',routes)

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

