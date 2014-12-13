define([
        'angular',
        '/widgets/angular-amchart/angular-amchart-directive.js'
    ],
    function (angular) {
    var m = angular.module('app.widgets.am-bar', []);
    m.controller('AmBarChartCtrl',
           function ($scope, EventEmitter, APIProvider, APIUser) {

           this.products = gems;
           console.log('I am out of AM chart =(');

           console.log(AmCharts);

    });

  m.directive("productReviews", function() {
    return {
      template: '<div id="chardiv" style="width: 800px; height: 600px;"></div>'
    };
  });


    });

  var gems = [
     { name: 'Azurite', price: 110.50 },
     { name: 'Bloodstone', price: 22.90 },
     { name: 'Zircon', price: 1100 },
   ];
