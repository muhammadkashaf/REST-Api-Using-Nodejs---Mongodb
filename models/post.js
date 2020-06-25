const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  cotent: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model("Post", post_schema);
