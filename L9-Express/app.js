
const express = require ('express');

const requestHandler = require('./user');

const app = express();
app.use("/",(req,res,next) =>{

  console.log ("came in first middleware",req.url, req.method);
  next();
});

app.use("/submit",(req,res,next) =>{
  console.log ("came in second middleware",req.url,req.method);
  res.send("<p> Welcome  amit </P>");
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
