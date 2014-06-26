/**
 * # Iconic
 *
 * This directive will make sure the iconic.js `inject()` method in executed on the element in order to make sure iconic works properly for dynamically loaded data.  It also automatically add the iconic class to the element.
 *
 * ```html
 * <img nag-iconic data-src="arrow-thick.svg" />
 * ```
 *
 * @module nag.iconic
 * @ngdirective nagIconic
 *
 * @nghtmlattribute {null} nag-icon
 */
angular.module('nag.iconic')
.directive('nagIconic', function() {
    function getSelectorPath(element, path) {
        path = path || '';

        if(element.is('html')) {
            return 'html' + path;
        }

        // Add the element name.
        var cur = element.get(0).nodeName.toLowerCase();

        // Determine the IDs and path.
        var id = element.attr('id');
        var cssClass = element.attr('class');

        // Add the #id if there is one.
        if ( typeof id != 'undefined' ) {
            cur += '#' + id;
        }

        if(cssClass) {
            cur += '.' + cssClass.split(/[\s\n]+/).join('.');
        }

        return getSelectorPath(element.parent(), ' > ' + cur + path);
    }

    return {
        restrict: 'A',
        compile: function(element, attributes) {
            element.addClass('iconic');

            return {
                post: function($scope, element, attributes) {
                    var uniqueSelector = getSelectorPath(element);
                    IconicJS().inject(uniqueSelector);
                }
            };
        }
    }
});
