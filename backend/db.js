const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017/reactPortal", () => {
    console.log("connected to MongoDB Successfully");
  });
};

module.exports = connectToMongo;
