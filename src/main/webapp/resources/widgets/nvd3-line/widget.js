require.config({
    paths: {
        'd3': '/components/d3/d3',
        'nv.d3': '/components/nvd3/nv.d3',
        'angular-nvd3': '/components/angular-nvd3/dist/angular-nvd3',
        'palletes': '/widgets/palletes/widget',
        'jsinq': '/components/jsinq/build/jsinq',
        'jsinq-query': '/components/jsinq/build/jsinq-query'

    }
    ,
    shim: {
           'd3':{
               exports: 'd3'
           },
           'nv.d3':{
                exports: 'nv',
                deps: ['d3']
            },
            'angular-nvd3':{
                deps: ['nv.d3']
            },
            'jsinq':{
                exports: 'jsinq'
            },
            'jsinq-query':{
                deps:['jsinq']
            }
    }
});





define(['angular','jsinq','jsinq-query','palletes','angular-nvd3'], function (angular,jsinq) {
    var m = angular.module('app.widgets.nvd3-line', ['nvd3','app.widgets.palletes', {files: ['/components/nvd3/nv.d3.css']}]);
    m.controller('Nvd3LineChartCtrl', function ($scope, widgetEvents, palletes) {
        var subscriber = widgetEvents.createSubscriber($scope);



        $scope.options = {
            "chart": {
                "type": "lineChart",
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                "height": 450,
                "margin": {
                    "top": 20,
                    "right": 20,
                    "bottom": 40,
                    "left": 55
                },
                "useInteractiveGuideline": true,
                "dispatch": {},
                "xAxis": {
                    "axisLabel": "Time (ms)",
                    "orient": "bottom",
                    "tickValues": null,
                    "tickSubdivide": 0,
                    "tickSize": 6,
                    "tickPadding": 7,
                    "domain": [
                        0,
                        1
                    ],
                    "range": [
                        0,
                        1
                    ],
                    "margin": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0
                    },
                    "width": 75,
                    "ticks": null,
                    "height": 60,
                    "showMaxMin": true,
                    "highlightZero": true,
                    "rotateYLabel": true,
                    "rotateLabels": 0,
                    "staggerLabels": false,
                    "axisLabelDistance": 12
                },
                "yAxis": {
                    "axisLabel": "Voltage (v)",
                    "axisLabelDistance": 30,
                    "orient": "left",
                    "tickValues": null,
                    "tickSubdivide": 0,
                    "tickSize": 6,
                    "tickPadding": 3,
                    "domain": [
                        0,
                        1
                    ],
                    "range": [
                        0,
                        1
                    ],
                    "margin": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0
                    },
                    "width": 75,
                    "ticks": null,
                    "height": 60,
                    "showMaxMin": true,
                    "highlightZero": true,
                    "rotateYLabel": true,
                    "rotateLabels": 0,
                    "staggerLabels": false
                },
                "lines": {
                    "dispatch": {},
                    "id": 26438,
                    "interactive": true,
                    "xDomain": null,
                    "yDomain": null,
                    "xRange": null,
                    "yRange": null,
                    "sizeDomain": [
                        16,
                        256
                    ],
                    "forceX": [],
                    "forceY": [],
                    "forceSize": [],
                    "clipVoronoi": true,
                    "useVoronoi": true,
                    "padData": false,
                    "margin": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0
                    },
                    "width": 960,
                    "height": 500,
                    "clipEdge": false,
                    "interpolate": "linear"
                },
                "legend": {
                    "dispatch": {},
                    "margin": {
                        "top": 5,
                        "right": 0,
                        "bottom": 5,
                        "left": 0
                    },
                    "width": 400,
                    "height": 20,
                    "align": true,
                    "rightAlign": true,
                    "updateState": true,
                    "radioButtonMode": false
                },
                "interactiveLayer": {
                    "dispatch": {},
                    "margin": {
                        "left": 55,
                        "top": 30
                    },
                    "width": null,
                    "height": null,
                    "showGuideLine": true,
                    "svgContainer": null
                },
                "xDomain": null,
                "yDomain": null,
                "xRange": null,
                "yRange": null,
                "forceX": [],
                "forceY": [],
                "interactive": true,
                "clipEdge": false,
                "clipVoronoi": true,
                "useVoronoi": true,
                "id": 26438,
                "interpolate": "linear",
                "width": null,
                "showLegend": true,
                "showXAxis": true,
                "showYAxis": true,
                "rightAlignYAxis": false,
                "size": 1,
                "tooltips": true,
                "reduceXTicks": false,
                "state": {
                    "disabled": [
                        false,
                        false,
                        false
                    ]
                },
                "defaultState": null,
                "noData": "No Data Available.",
                "transitionDuration": 250
            },
            "title": {
                "enable": true,
                "text": "Title for Line Chart",
                "class": "h4",
                "css": {
                    "width": "nullpx",
                    "textAlign": "center"
                }
            },
            "subtitle": {
                "enable": true,
                "text": "Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.",
                "css": {
                    "width": "nullpx",
                    "textAlign": "center",
                    "text-align": "center",
                    "margin": "10px 13px 0px 7px"
                }
            },
            "caption": {
                "enable": true,
                "text": "Figure 1. Write Your Caption text.",
                "css": {
                    "width": "nullpx",
                    "textAlign": "center",
                    "text-align": "justify",
                    "margin": "10px 13px 0px 7px"
                }
            },
            "styles": {
                "classes": {
                    "with-3d-shadow": true,
                    "with-transitions": true,
                    "gallery": false
                },
                "css": {}
            }
        };

        if($scope.widget.decoration.title)        angular.extend($scope.options.title,$scope.widget.decoration.title);
        if($scope.widget.decoration.caption)      angular.extend($scope.options.caption,$scope.widget.decoration.caption);
        if($scope.widget.decoration.height)       $scope.options.chart.height =$scope.widget.decoration.height;
        if($scope.widget.decoration.width)        $scope.options.chart.width =$scope.widget.decoration.width;

        if($scope.widget.decoration.pallete)
            $scope.pallete = palletes[$scope.widget.decoration.pallete.name][$scope.widget.decoration.pallete.colors];

        $scope.query = $scope.widget.query




        $scope.series = [];

        $scope.addSerie = function(){
            $scope.series.push($scope.result);

        }

        $scope.executeQuery = function(){
            $scope.result = undefined;
            var query = new jsinq.Query($scope.query);
            query.setValue(0, new jsinq.Enumerable($scope.data.data));
            $scope.result = {key:$scope.serieKey,values:query.execute().toArray()};
        }

        $scope.clearSeries = function(){
            $scope.series = [];
        }

        subscriber.on('setData', function (data) {
            $scope.data = data;
            if(angular.isDefined($scope.query)){
                $scope.executeQuery();
                $scope.addSerie();
            }
        });

    })
});
