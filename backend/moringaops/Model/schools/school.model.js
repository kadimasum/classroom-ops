const { DataTypes } = require("sequelize");
const sequelize = require('../../configs/db');
const bcrypt = require('bcrypt');


const School = sequelize.define("schools", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

//adding my school to my db 
sequelize.sync().then(() => {
  console.log('School table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = School;
