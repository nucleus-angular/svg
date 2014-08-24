var BasePageObject = require('../base-page-object');

var HomePage = BasePageObject.extend({
  initialize: function(test, urlAppend) {
    this.baseUrl = 'http://localhost:3000/home?uiTestingMode=true';
    this.selectors = {
      svg: 'svg',
      img: 'img'
    };

    BasePageObject.initialize.call(this, test, urlAppend);
  },

  waitForPage: function() {
    this.test.wait(100);
    this.waitForAngular();
  },

  hasSvg: function() {
    this.test.assert.attr(this.getSelector('svg'), 'class').to.contain('injected-svg');
    this.test.assert.doesntExist(this.getSelector('img'));
  }
});

module.exports = HomePage;
