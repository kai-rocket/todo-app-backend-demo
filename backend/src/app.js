import cookieParser from "cookie-parser";
import "core-js/stable";
import cors from 'cors';
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import "regenerator-runtime/runtime";

import todoRoutes from './routes/todoRoutes';

var app = express();

app.use(logger("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Return response when root endpoint is hit
app.get('/', (req, res) => {
  res.send('we have succesfully hit the root endpoint');
});

// Perform relevant backend actions for todo APIs
app.use('/todos', todoRoutes);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Respond with the error message
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
