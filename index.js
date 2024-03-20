require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const fs = require('fs')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth',authRoutes)

const PORT = 3002

app.get('/',async(req,res)=>{
    try {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let data = await fs.promises.readFile('./public/index.html','utf-8')
        res.write(data)
    } catch (error) {
        console.log(error);
    }
    res.end()
})
app.listen(PORT,(err)=>{
    if(!err)console.log(`server started:http://localhost:${PORT}/ `);
})

