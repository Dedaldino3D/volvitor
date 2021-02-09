const mongoose = require("mongoose");

function start() {
  mongoose
    .connect("mongodb://localhost/volvitor", {
      useMongoClient: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error when connecting to database, error: ", err);
    });
}

module.exports = {
  mongoose,
  start,
};
