"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

/*
 * Initialise Sequelize with configuration file information
 * Establish connection to database
 */
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

/*
 * For each file in the models folder, create a new Sequelize Model from it
 */
// Read current directory
fs.readdirSync(__dirname)
  // For each file in current directory that ends in .js
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  // Assume that file references a model, and save that model to the `db` variable
  .forEach(file => {
    // Create new model from each file in the models directory
    const model = sequelize["import"](path.join(__dirname, file));
    // Save that model to the `db` object
    db[model.name] = model;
  });

// For each model in the `db` object, associate it if necessary
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    // TODO(kai): figure out what model.associate() does
    // Apply relationships between the models
    // Create IDs? Let the program know that the models are associated
    db[modelName].associate(db);
  }
});

// Assign sequelize instance to the `db` object
// Note: lowercase "sequelize" is the instance, and uppercase "Sequelize" is the class
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
