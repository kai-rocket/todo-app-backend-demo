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

  // Apply any associations
  Todo.associate = function(models) {
    // associations can be defined here
  };

  // Return the model
  return Todo;
};
