const express = require("express");
const greetMiddleware = require("./greet");

express()
  .use("/api/v1", greetMiddleware({ greeting: "Hello World" }))
  .listen(8080);
