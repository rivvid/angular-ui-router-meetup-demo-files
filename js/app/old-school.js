var app = angular.module('example',['ngRoute']);
    
app.config(
    function ($routeProvider) {
        console.log($routeProvider);
        $routeProvider.when('/category', { template: 'views/category/index.html' });
        $routeProvider.when('/category/:slug', { template: 'views/category/list.html' });
        $routeProvider.otherwise('/category');
    });

app.controller(
    'CategoryCtrl',
    function ($scope) {
        console.log('Hi from CategoryCtrl');
        // hardcode some categories
        $scope.categories = [
            { slug: 'one', name: 'One' }
            ,{ slug: 'two', name: 'Two' }
            ,{ slug: 'three', name: 'Three' }
        ]
    });

app.controller(
    'ItemsCtrl',
    function ($scope) {
        console.log('Hi from ItemsCtrl');
        // hardcode some items
        $scope.allItems = {
            'one': [
                { name: 'Category One Item One' }
                ,{ name: 'Category One Item Two' }
            ]
            ,'two': [
                { name: 'Category Two Item One' }
                ,{ name: 'Category Two Item Two' }
                ,{ name: 'Category Two Item Three' }
            ]
            ,'three': [
                { name: 'Category Three Item One' }
                ,{ name: 'Category Three Item Two' }
                ,{ name: 'Category Three Item Three' }
            ]
        }
    });
