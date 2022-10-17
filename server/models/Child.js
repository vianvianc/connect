const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "A child must have a name!"],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "A child must have a specified age."],
    max: [2, "Age must have 2 digits maximum."],
  },
  interests: [{ type: String }],
  gender: { type: String },
});

const Child = model("child", childSchema);

module.exports = Child;
