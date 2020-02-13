var cookieParser = require("cookie-parser");
import express from "express";
import createError from "http-errors";
var logger = require("morgan");
var path = require("path");

import { createTodo } from "./controllers/todoController";

var app = express();

// 3 environments that people use in real companies
// development, staging, and production
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/create-todo", (req, res) => {
  // Biz logic goes here
  createTodo(req, res);
});

// app.put("/update-todo", (req, res) => {
//   updateTodo(req, res);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
