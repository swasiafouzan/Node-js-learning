const express = require("express");
const greetMiddleware = require("./greet2");

class GreetingService {
  constructor(greeting = "Hello") {
    this.greeting = greeting;
  }

  createGreeting(name) {
    return `${this.greeting}, ${name}`;
  }
}

express()
  .use("/api/v1", greetMiddleware({ service: new GreetingService("Hello") }))
  .use("/api/v2", greetMiddleware({ service: new GreetingService("Hi") }))
  .listen(9090);
