const express = require('express');
const { addHome } = require('../data/homes');

const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res) => {
  res.render('addHome', {
    pageTitle: 'Add Home',
    error: null,
    houseName: '',
  });
});

hostRouter.post('/add-home', (req, res) => {
  const houseName = (req.body.houseName || '').trim();

  if (!houseName) {
    return res.status(400).render('addHome', {
      pageTitle: 'Add Home',
      error: 'Please enter a house name.',
      houseName: '',
    });
  }

  addHome({ houseName });
  res.redirect('/host/home-added');
});

hostRouter.get('/home-added', (req, res) => {
  res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
});

module.exports = { hostRouter };
