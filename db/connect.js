const mongoose = require("mongoose");

const connectdb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectdb;
//   .then(() => console.log("Connected...."))
//   .catch((err) => console.log(err));
