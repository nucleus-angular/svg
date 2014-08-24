/**
 * # SVG
 *
 * This directive will allow you to use an html element and replace that element with SVG.  This will use iconic.js if available however if you don't have Iconic, you can use the free https://github.com/iconic/SVGInjector library that they have.
 *
 * ```html
 * <img nag-svg data-src="arrow-thick.svg" />
 * ```
 *
 * It is important to note that you can not have any angular directives on the element that has the this directive on it because the process of injecting the SVG will remove the angular bingings.  This is done to keep this directive as simple as possible.  If you need angular specific bingings, just wrap the this directive with another element that has the bings.
 *
 * ```html
 * <span ng-click="doSomething()">
 *   <img nag-svg data-src="arrow-thick.svg" />
 * </span>
 * ```
 *
 * Only if a specific use case presents itself where the above does not work we efforts go into making this directive work with other directives on the same element.
 *
 * @module nag.svg
 * @ngdirective nagSvg
 *
 * @nghtmlattribute {null} nag-svg
 * @nghtmlattribute {string} data-src Path to the SVG file
 */
angular.module('nag.svg')
.directive('nagSvg', [
  'nagSvgHelper',
  function(nagSvgHelper) {
    return {
      restrict: 'A',
      compile: function(element, attributes) {
        return {
          post: function($scope, element, attributes) {
            nagSvgHelper.inject(element[0]);
          }
        };
      }
    }
  }
]);
