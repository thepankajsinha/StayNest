const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./Models/Listings.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

const MONGODB_URL = "mongodb://127.0.0.1:27017/StayNest";
async function main() {
  await mongoose.connect(MONGODB_URL);
}
main().then(() => {
  console.log("Connected to MongoDB");
});


app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", {allListings});
});


app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  const {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", {listing});
});


app.post("/listings", async (req, res) => {
  const newListing = req.body.listing;
  const listing = new Listing(newListing);
  await listing.save();
  res.redirect("/listings");
});



app.listen(5050, () => {
  console.log("Server is running on port 8080");
});
