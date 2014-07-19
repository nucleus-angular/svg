/**
 * # SVG
 *
 * This directive will allow you to use an html element and replace that element with SVG.  This will use iconic.js if available however if you don't have Iconic, you can use the free https://github.com/iconic/SVGInjector library that they have.
 *
 * ```html
 * <img nag-svg data-src="arrow-thick.svg" />
 * ```
 *
 * @module nag.svg
 * @ngdirective nagSvg
 *
 * @nghtmlattribute {null} nag-svg
 * @nghtmlattribute {string} data-src Path to the SVG file
 */
angular.module('nag.svg')
.directive('nagSvg', function() {
  return {
    restrict: 'A',
    compile: function(element, attributes) {
      return {
        post: function($scope, element, attributes) {
          if(window.IconicJS) {
            element.addClass('iconic');

            window.IconicJS().inject(element);
          } else if(window.SVGInjector ) {
            window.SVGInjector(element);
          }
        }
      };
    }
  }
});
