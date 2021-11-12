const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

app.use(express.json())

app.get('/hello', (req, res)=>{
res.send("Hello world")
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 5000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("server is listening"))
    }catch(err){
        console.log(err);
    }
}

start()