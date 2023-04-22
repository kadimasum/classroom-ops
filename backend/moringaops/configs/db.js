const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "moringaops",
  "root",
  "",
  {
    host: "localhost",
    dialect: 'mysql'
  }
);

// authenticate the connection
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;
