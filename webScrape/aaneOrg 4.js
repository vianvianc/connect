const { Builder, By, until, WebElement, getAttribute } = require('selenium-webdriver');
require('chromedriver');

async function getEventData(url) {
  // create the driver for controlling chrome
  let driver = await new Builder().forBrowser('chrome').build();
  try {

    // open the url in chrome
    await driver.get(url);

    // Wait for the calendar of events to load
    let calendarClass = 'tribe-events-calendar'
    await driver.wait(until.elementLocated(
        By.className(calendarClass))
        , 10000
    );

    // Get an array of the calendar's 'rawEvents'
    let eventClass = 'tribe-events-month-event-title';
    let eventWebEls = await driver.findElements(By.className(eventClass));
    let rawEvents = [];
    for (let i = 0; i < eventWebEls.length; i++){
      // get the descriptions and store in rawEvents
      await eventWebEls[i].getText().then((text) => {
        rawEvents.push(text);
      });
    }

    let cleanedEvents = [];

    // comma-separate && push the 'rawEvent' ("title, date, time") to 'cleanedEvents'
    for (let j = 0; j < rawEvents.length; j++){      
      let details = rawEvents[j].split(',');
      let numEventKeys = 3;
        // if split() returned the correct amount of event keys 
        if (details.length === numEventKeys) {
          cleanedEvents.push(
            {
              title: details[0],
              date: details[1],
              time: details[2]
            });
        }
    }

    console.log(cleanedEvents);
    return cleanedEvents;

  } catch (err) {
    console.log(err);
  } finally {
    await driver.quit();
  }
}

module.exports = {
  getEventData
}