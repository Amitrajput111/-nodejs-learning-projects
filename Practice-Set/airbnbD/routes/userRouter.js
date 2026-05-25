const express = require('express');
const { getHomes } = require('../data/homes');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.render('home', {
    registeredHomes: getHomes(),
    pageTitle: 'Airbnb Home',
  });
});

module.exports = userRouter;
