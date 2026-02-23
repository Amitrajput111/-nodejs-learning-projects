const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy MidleWare", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy MidleWare");
  next();
});

// app.use ((req, res, next)=> {
//     console.log ("Third Middleware" , req.url, req.method);
//     res.send ("<h1> Welcome  Amit </h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for  GET", req.url, req.method);
  res.send(`<h1> Welcome to C Amit </h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /Contact-us for GET", req.url, req.method);
  res.send(`<h1> Give  your detail </h1>
            <form action ="contact-us  method=m"POST">
        <input type ="text" name ="name" placeholder="Enter your name" />
        <input type ="email" name ="email" placeholder="Enter your email" />
           <input type="Submit"/>
        `);
});

app.post ("/contact-us", (req,res,next) => {
    console.log ("Handling / contact-us for POST", req.url, req.method);
    res.send (`<h1> WE wil contact you sooon</h1>`);
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on sddress http://localhost:${PORT}`);
});
