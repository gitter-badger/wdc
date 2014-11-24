require.config({
    paths: {
        'd3': '/components/d3/d3',
        'nv.d3': '/components/nvd3/nv.d3',
        'angular-nvd3': '/components/angular-nvd3/dist/angular-nvd3',
        'jsinq': '/components/jsinq/source/jsinq',
        'jsinq-query': '/components/jsinq/source/jsinq-query'

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





define(['angular','jsinq','jsinq-query'/*,'palletes'*/,'angular-nvd3'], function (angular,jsinq) {
    var m = angular.module('app.widgets.nvd3-bar', ['nvd3',/*'app.widgets.palletes',*/ {files: ['/components/nvd3/nv.d3.css']}]);
    m.controller('Nvd3BarChartCtrl', function ($scope, EventEmitter, APIProvider, APIUser/*, palletes*/) {

        var eventEmitter = new EventEmitter($scope);

        $scope.options ={
            "chart": {
                "type": "multiBarChart",
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                        return d.value;
                    },

                "height": 450,
                "margin": {
                        "top": 20,
                        "right": 20,
                        "bottom": 60,
                        "left": 45
                    },
                "clipEdge": true,
                "staggerLabels": true,
                "transitionDuration": 500,
                "stacked": false,
                "xAxis": {
                    "axisLabel": "Time (ms)",
                    "showMaxMin": false,
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
                    "highlightZero": true,
                    "rotateYLabel": true,
                    "rotateLabels": 0,
                    "staggerLabels": false,
                    "axisLabelDistance": 12
                },
                "yAxis": {
                    "axisLabel": "Y Axis",
                        "axisLabelDistance": 40,
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
                "dispatch": {},
                "multibar": {
                    "dispatch": {},
                    "margin": {
                        "top": 0,
                            "right": 0,
                            "bottom": 0,
                            "left": 0
                    },
                    "width": 960,
                        "height": 500,
                        "forceY": [
                        0
                    ],
                        "stacked": false,
                        "stackOffset": "zero",
                        "clipEdge": true,
                        "barColor": null,
                        "id": 2771,
                        "hideable": false,
                        "delay": 1200,
                        "groupSpacing": 0.1
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
                "forceY": [
                    0
                ],
                "id": 2771,
                "stackOffset": "zero",
                "delay": 1200,
                "barColor": null,
                "groupSpacing": 0.1,
                "width": 400,
                "showControls": true,
                "showLegend": true,
                "showXAxis": true,
                "showYAxis": true,
                "rightAlignYAxis": false,
                "reduceXTicks": false,
                "rotateLabels": 45,
                "tooltips": true,
                "state": {
                    "stacked": false,
                        "disabled": [
                        false,
                        false,
                        false
                    ]
                },
                "defaultState": null,
                "noData": "No Data Available."
            },
            "title": {
            "enable": true,
                "text": "Write Your Title",
                "class": "h4",
                "css": {
                "width": "nullpx",
                    "textAlign": "center"
            }
        },
            "subtitle": {
            "enable": true,
                "text": "Write Your Subtitle",
                "css": {
                "width": "nullpx",
                    "textAlign": "center"
            }
        },
            "caption": {
            "enable": true,
                "text": "Figure 1. Write Your Caption text.",
                "css": {
                "width": "nullpx",
                    "textAlign": "center"
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





        $scope.apply = function(dest,src,keyList){
            if(angular.isUndefined(keyList)){
                $scope.apply(dest,src,[]);
                return
            }
            if (!angular.isNumber(src)
                && !angular.isString(src)){

                for (key in  src) {
                    keyList.push(key)

                    if (!angular.isNumber(src[key])
                        && !angular.isString(src[key])
                        ) {
                        $scope.apply(dest, src[key], keyList);

                    }else{
                        var d = dest;
                        for (var i=0;i<keyList.length-1;i++) {
                            if (angular.isDefined(d))
                                d = d[keyList[i]]
                        }
                        if (angular.isDefined(d))
                            d[key] = src[key];
                    }
                    keyList.pop();
                }
            }else{
                var d = dest;
                for (i in keyList) {
                    if (angular.isDefined(d))
                        d = d[i]
                }
                if (angular.isDefined(d))
                    d = src[key];
                keyList.pop();
            }
        }

        $scope.$watch('widget.decoration', function(newDecoration){
            //$scope.options.title.text = newDecoration.title.text;
            //$scope.options.title.class = newDecoration.title.class;
            //
            //$scope.options.subtitle.text = newDecoration.subtitle;
            //$scope.options.caption.text = newDecoration.caption;
            //$scope.options.chart.width = newDecoration.chart.width;
            //$scope.options.chart.height = newDecoration.chart.height;
            if(angular.isDefined(newDecoration)) {
                $scope.apply($scope.options, newDecoration);
                console.log($scope.options)
            }

        });

        //if($scope.widget.decoration.title)        angular.extend($scope.options.title,$scope.widget.decoration.title);
        //if($scope.widget.decoration.caption)      angular.extend($scope.options.caption,$scope.widget.decoration.caption);
        //if($scope.widget.decoration.height)       $scope.options.chart.height =$scope.widget.decoration.height;
        //if($scope.widget.decoration.width)        $scope.options.chart.width =$scope.widget.decoration.width;

        //if($scope.widget.decoration.pallete)
        //    $scope.pallete = palletes[$scope.widget.decoration.pallete.name][$scope.widget.decoration.pallete.colors];

        $scope.query = $scope.widget.query




        $scope.series = [];

        $scope.addSerie = function(){
            $scope.series.push($scope.result);

        }

        $scope.executeQuery = function(){
            $scope.result = undefined;
            var query = new jsinq.Query($scope.query);
            query.setValue(0, new jsinq.Enumerable($scope.data.data));
            //query.setValue(0, new jsinq.Enumerable($scope.data.header));
            $scope.result = {key:$scope.serieKey,values:query.execute().toArray()};
        }

        $scope.clearSeries = function(){
            $scope.series = [];
        }

        new APIProvider($scope)
            .provide('setData', function (evt, data) {

                console.log("bar set data",evt);
                $scope.data = data;
                if(angular.isDefined($scope.query)){
                    $scope.executeQuery();
                    $scope.addSerie();
                }
            });

        $scope.$watch('widget.datasource',function(newValue){
            console.log('bar datasource', newValue);
            var apiUser = new APIUser($scope);

            new APIProvider($scope)
                .provide('setData', function (evt, data) {

                    console.log("bar set data",evt);
                    $scope.data = data;
                    if(angular.isDefined($scope.query)){
                        $scope.executeQuery();
                        $scope.addSerie();
                    }
                });

            apiUser.invoke(newValue, 'feedback')
        });

    })
});
