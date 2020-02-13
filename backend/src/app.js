import cookieParser from "cookie-parser";
import "core-js/stable";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import "regenerator-runtime/runtime";

import { createTodo } from "./controllers/todoController";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('we have succesfully hit the root endpoint');
});

// Create a new todo with value provided by user
app.post("/create-todo", (req, res) => createTodo(req, res));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with the error message
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
