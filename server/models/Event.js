const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  name: { type: String, unique: true },

  location: { type: String },

  time: { type: Number },

  preparationTips: { type: String },

  preparationTips: { type: String },

  isFeatured: {type: Boolean, default: false},

  eventDetails: {type: String},

  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
});

const Event = model("events", eventSchema);

module.exports = Event;
