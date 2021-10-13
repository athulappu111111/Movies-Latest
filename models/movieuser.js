var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var db = mongoose.connect(
  "mongodb+srv://customer:customer123@cluster0.big5e.mongodb.net/test",
  {
    useNewUrlParser: true,
  }
);
var movieuserSchema = new Schema(
  {
    movietitle: {
      type: String,
    },
    daterented: {
      type: String,
    },
    datereturned: {
      type: String,
    },
    rentalamount: {
      type: String,
    },
    noofdays: {
      type: String,
    },
    dailyrental: {
      type: String,
    },
    user: {
      type: String,
    },
  },
  {
    collection: "movieusers",
  }
);

module.exports = mongoose.model("movieuser", movieuserSchema);
