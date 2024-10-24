var express = require("express");
var app = express();

//each request will pass through it
app.use((req, res, next) => {
  req.user = "testuser";
  next();
});

app.get("/", (req, res, next) => {
  var user = req.user;
  console.log(user); //testuser
  return res.send(user);
});

app.listen(3000);
