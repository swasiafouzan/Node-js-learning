var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors()); //for all routes

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  var info = {
    string_value: "StackOverFlow",
    number_value: 8970,
  };
  res.json(info);
});

app.listen(port, () => {
  console.log("Node js listening on port: " + port);
});
