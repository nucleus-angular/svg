var BasePageObject = require('../base-page-object');

var HomePage = BasePageObject.extend({
  initialize: function(test, urlAppend) {
    this.baseUrl = '/home?uiTestingMode=true';
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
    this.test.assert.attr(this.getSelector('svg'), 'data-src').to.contain('app/svg/test.svg');
    this.test.assert.doesntExist(this.getSelector('img'));
  }
});

module.exports = HomePage;
