const mongoose = require("mongoose");

const Connect = async () => {
  mongoose.connect("mongodb://localhost:27017/looko");
  return console.log("Database Connected!");
};

module.exports = Connect;
