let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
const createError = require("http-errors");

let movieuserSchema = require("../models/movieuser");

//create movie
router.route("/create-movieuser").post((req, res, next) => {
  movieuserSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ movies
router.route("/").get((req, res) => {
  movieuserSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Delete movie
router.route("/delete-movieuser/:id").delete((req, res, next) => {
  movieuserSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Get Single movie
router.route("/edit-movieuser/:id").get((req, res) => {
  movieuserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update movie
router.route("/update-movieuser/:id").put((req, res, next) => {
  movieuserSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("movie updated successfully !");
      }
    }
  );
});

module.exports = router;
