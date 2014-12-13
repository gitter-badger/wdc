define([
        'angular',
        '/widgets/angular-amchart/angular-amchart-directive.js'
    ],
    function (angular) {
    var app = angular.module('app.widgets.am-bar', []);
    app.controller('AmBarChartCtrl',
           function ($scope, EventEmitter, APIProvider, APIUser) {

           this.products = gems;
           console.log('I am out of AM chart =(');

           console.log(AmCharts);


         var chart = AmCharts.makeChart( "chardiv" ,{
         	"type": "serial",
         	"categoryField": "category",
         	"graphs": [
         		{
         			"valueField": "value"
         		}
         	],
         	"dataProvider": [
         		{
         			"category": "category 1",
         			"value": 8,
         		},
         		{
         			"category": "category 2",
         			"value": 4,
         		}
         	]
         });
    });



    });

  var gems = [
     { name: 'Azurite', price: 110.50 },
     { name: 'Bloodstone', price: 22.90 },
     { name: 'Zircon', price: 1100 },
   ];
