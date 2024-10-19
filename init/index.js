const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../Models/Listings.js');

const MONGODB_URL = "mongodb+srv://askpankajsinha:749Bi6PgtW6FnFWs@cluster0.cscgi.mongodb.net"
async function main(){
    await mongoose.connect(MONGODB_URL)
}
main().then(()=> {
    console.log("Connected to MongoDB");
})


const initDB = async () =>{
    await Listing.deleteMany();
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
}
initDB();