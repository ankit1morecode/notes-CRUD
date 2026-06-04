let mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend:d3RtNfGeSdfxOVVs@cluster0.pzcpzii.mongodb.net/notes-db");
    console.log("connected to DB");
}

module.exports = connectDB;