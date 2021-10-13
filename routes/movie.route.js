  let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
  const createError = require('http-errors');

  let movieSchema = require('../models/movie');

  //create movie
router.route('/create-movie').post((req, res, next) => {
    movieSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  // READ movies
router.route('/').get((req, res) => {
    movieSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Get Single movie
router.route('/edit-movie/:id').get((req, res) => {
    movieSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  // Update movie
router.route('/update-movie/:id').put((req, res, next) => {
    movieSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('movie updated successfully !')
      }
    })
  })
  
  // Delete movie
router.route('/delete-movie/:id').delete((req, res, next) => {
    movieSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

  module.exports = router;
  


