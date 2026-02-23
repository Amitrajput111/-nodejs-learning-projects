//External module
const express = require('express');
const path = require('path');

//Local module 
const contactRouter = express.Router();

const rootDir = require('../utils/pathUtils');

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact-Us.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contacts-success.html"));
});

module.exports = contactRouter;
