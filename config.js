require("dotenv").config();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
console.log(process.env.MONGOURI);

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
