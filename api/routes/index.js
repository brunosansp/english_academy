const bodyParser = require('body-parser');

const people = require('./peopleRoute.js');
const levels = require('./levelsRoute.js');
const classes = require('./classesRoute.js');

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    people,
    levels,
    classes
  );
}