var HomePage = require('./lib/objects/pages/home');

module.exports = {
  name: 'svg component',

  'replaces img tag with svg content': function(test) {
    var homePage = HomePage.new(test);

    //this gives a little delay to make sure that the svg is loaded for the assertion
    homePage.waitForPage();

    homePage.hasSvg();

    homePage.done();
  }
};
