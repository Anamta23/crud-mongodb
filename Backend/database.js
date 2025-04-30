const mongoose = require('mongoose');
async function dbConn(){
    const conn = await mongoose.connect('mongodb+srv://khananamta137:root@cluster0.xw7pdfl.mongodb.net/abes-crud?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("Connected to MongoDB successfully");
    }
    else{
        console.log("Failed to connect to MongoDB");
    }
}
module.exports=dbConn;