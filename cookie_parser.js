var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());

app.get("/setCookie", (req, res) => {
  //setting cookie
  res.cookie("username", "john doe", { maxAge: 90000, httpOnly: true });
  return res.send("Cookie has been set");
});

app.get("/getCookie", (req, res) => {
  var username = req.cookies["username"];
  if (username) {
    return res.send(username);
  }
  return res.send("No cookie found");
});

app.listen(8080);
