const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://foodecom:food123@foodecom.1wriy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('Database connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB