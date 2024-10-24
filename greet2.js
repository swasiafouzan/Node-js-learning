const express = require("express");

module.exports = (options = {}) => {
  const router = express.Router();
  //get Controller
  const { service } = options;
  router.get("/greet", (req, res, next) => {
    res.end(service.createGreeting(req.query.name || "Stranger"));
  });

  return router;
};
