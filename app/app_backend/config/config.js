require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root1234',
    database: process.env.DATABASE_NAME || 'Ebytr',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
  },
};
