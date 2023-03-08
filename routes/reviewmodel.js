const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const review = new Schema({
  taskprovider: {
    type:String,
    required: true
  },taskworker:{
    type:String,
    required:true
  },rating:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("review", review);