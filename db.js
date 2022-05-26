const mongoose = require ("mongoose");

var mongoURL= 'mongodb+srv://vonser:vonser@cluster0.beyvr.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('errror', () =>{
    console.log("DB connection failed.")
})

connection.on("connected", () => {
    console.log("Mongo DB connection successful")
})

module.exports = mongoose