angular.module('apptest').directive("itemHandler", function () {
    return{
        restrict: 'EA',
        link: function (scope, element) {
            scope.items = [];

            var btn = document.querySelector("button");
            btn.onclick = function () {

                scope.items.push(element.find('input')[0].value);

                setInterval(function(){
                    scope.$apply();
                }, 1000);
            }
        }
    };
});
