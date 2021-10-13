const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let customerSchema = new Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneno: {
      type: Number,
    },
  },
  {
    collection: "customers",
  }
);

module.exports = mongoose.model("customer", customerSchema);
