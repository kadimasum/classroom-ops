const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const sequelize = require('../moringaops/configs/db');

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//add school routes
app.use('/api/schools', schoolRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
