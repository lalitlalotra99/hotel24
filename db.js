const mongoose = require('mongoose')

//Define the MongoDb Connection.

// const MongoURL = 'mongodb://localhost:27017/hotels'  //Replace mydatabase with your database name.

 const MongoURL = 'mongodb+srv://lalitlalotra3:lalitlalotra3@cluster0.lcm78.mongodb.net/'

mongoose.connect(MongoURL,{
    useNewUrlParser: true, useUnifiedTopology: true
})

// Get the Default Connection.
//Mongoose Maintain a Default connection Object repersenting the MongoDB Connection.
const db = mongoose.connection


// Define Event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to the mongodb Server")
})

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

db.on('disconnected',()=>{
    console.log("MongoDb is Disconnected")
})

// export the database connection.

module.exports = db