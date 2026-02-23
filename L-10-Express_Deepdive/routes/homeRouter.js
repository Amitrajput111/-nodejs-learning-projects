//External module
const express = require('express');
const path = require('path');

//Local module 
const homeRouter = express.Router();

const rootDir = require('../utils/pathUtils');

homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
