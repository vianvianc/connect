const db = require('../config/connection');
const { Parent, Event, Weekly } = require("../models");
const eventData = require('./eventSeeds.json');
const weeklyData = require('./weeklyInspiration.json');


db.once('open', async () => {

    await Event.deleteMany({});
    await Weekly.deleteMany({});

    const event = await Event.insertMany(eventData);
    const weekly = await Weekly.insertMany(weeklyData);


    console.log("Data has been seeded")
});