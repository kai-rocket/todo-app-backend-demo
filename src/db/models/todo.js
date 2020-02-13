"use strict";

module.exports = (sequelize, DataTypes) => {
  // Define the model
  const Todo = sequelize.define(
    "Todo",
    {
      value: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {}
  );

  // Return the model
  return Todo;
};
