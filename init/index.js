const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../Models/Listings.js');

const MONGODB_URL = "mongodb://127.0.0.1:27017/StayNest";
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