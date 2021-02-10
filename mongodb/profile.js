const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
   title1: String,
   title2: String,
   reps: String,
   banner: String,
   id: String,
   respect: Number,
   badge: String,
   badge2: String,
   badge3: String,
   vip: Number,
   supporter: Number,
   staff: Number,
   boss: Number,
   responsble: Number,
   member: Number,
   dailycool: Number
});
module.exports = mongoose.model("profile data", dataSchema)