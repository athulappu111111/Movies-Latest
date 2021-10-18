var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var db = mongoose.connect(
  "mongodb+srv://customer:customer123@cluster0.big5e.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var movieSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    gener: {
      type: String,
    },
    dailyrental: {
      type: Number,
    },
    noofcopies: {
      type: Number,
    },
  },
  {
    collection: "movies",
  }
);

module.exports = mongoose.model("movie", movieSchema);
