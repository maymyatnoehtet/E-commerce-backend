// Loads environment variables from the .env file
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Create the Sequelize connection object based on environment variables
const sequelize = process.env.JAWSDB_URL
// Connect to JawsDB MySQL in production environment
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the Sequelize connection object
module.exports = sequelize;
