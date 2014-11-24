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
    var m = angular.module('app.widgets.nvd3-horizontal-bar', ['nvd3','app.widgets.palletes', {files: ['/components/nvd3/nv.d3.css']}]);
    m.controller('Nvd3HBarChartCtrl', function ($scope, widgetEvents, palletes) {
        var subscriber = widgetEvents.createSubscriber($scope);



        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 350,
                "margin": {
                    "top": 20,
                    "right": 20,
                    "right": 20,
                    "bottom": 60,
                    "left": 200
                },
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showControls: false,
                showValues: false,
                transitionDuration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    },
                    showMaxMin: true,
                    staggerLabels: true
                },

                xAxis: {
                    axisLabel: 'Y Axis'//,
                    //axisLabelDistance: 20
                }

            },
            title: {
                css: {
                    'text-alig': 'center',
                    'font-size': '1.0rem',
                    'font-weight': 'bold'
                }
            },
            caption: {
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
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
