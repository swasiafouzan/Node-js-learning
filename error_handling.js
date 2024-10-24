var express = require("express");
var app = express();

//get function
app.get("/names/:name", (req, res, next) => {
  if (req.params.name === "john") {
    return res.send("Valid Name");
  } else {
    next(new Error("Not Valid Name"));
  }
});

//error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).send("Internal Server occured");
});

app.listen(8080);
