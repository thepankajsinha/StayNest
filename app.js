const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./Models/Listings.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const MONGODB_URL =
  "mongodb+srv://askpankajsinha:749Bi6PgtW6FnFWs@cluster0.cscgi.mongodb.net";
async function main() {
  await mongoose.connect(MONGODB_URL);
}
main().then(() => {
  console.log("Connected to MongoDB");
});


app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", {allListings });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
