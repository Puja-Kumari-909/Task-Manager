const mongoose = require('mongoose')




const connectionString = 'mongodb+srv://puja1234:McB1WKfvhRvgMCbw@nodeexpressproject.akv7m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const mongoDB = ()=>{
    return mongoose.connect(
        connectionString,{
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = mongoDB