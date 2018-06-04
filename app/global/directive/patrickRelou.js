angular.module('apptest').directive("patrickRelou", function () {
    return{
        restrict: 'EA',
        link: function (scope, element) {
            var url = 'https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif';
            element.replaceWith('<img src="'+url+'">');
            }
        };
    });
