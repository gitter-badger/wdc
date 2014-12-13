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

    m.controller('fessCntrl', function ($scope) {


        var _count = 60;
        var enableDataLabels = false;

        $scope.chartTypes = ['areaspline','spline', 'column', 'area','line'];

        $scope.selectedChartType = $scope.chartTypes[0];



           var generateRandomData = function(){
           var randList = [];
            var randList_temp = [0,0,0,0,0,0,0,0,014089.072588338,14111.235296482,13248.919267719,11750.617396886,10521.911623697,9512.2763360223,8081.0507311432,6352.6982675546,4420.8153353378,2349.1050930702,179.59986324904,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1553.7546193406,3921.9241907129,6241.704633584,8485.7944824786,10604.26048006,12500.740957683,13988.199632891,14758.415558775,14542.236741132,13425.511148099,11733.935339586,9727.1174637272,7547.1353070041,5266.5655552852,3772.7265676682,3926.1159588598,6351.6813249711,8741.074990712,11067.71229216,13273.434818692,15214.029630703,16515.906859268,16550.616547648,15294.289746543,13372.811692468,11175.303558099,8852.6924467277,6465.5170312387,4547.7355411514,2807.8162144533,902.57275896576,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,628.12522645398,2874.4777227516,5040.2907771506,7087.4443987425,8954.436471137,10542.745714076,11705.727130152,12268.35441764,12113.644216702,11276.367062134,9912.3884483082,8191.0393617242,6238.2136091095,4134.9215534218,1931.3229646465,4352.8916070426,6853.0381350415,9346.9909262719,11829.6019615,14287.954565078,16678.770029354,18754.40365391,18827.483850088,16788.010394187,14403.020359981,11946.443381653,9464.5872640638,6971.022215574,4471.1004321906,1967.348748806,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1557.1379397307,3557.5924681154,5407.2619319291,7045.3324979667,8387.9755226758,9331.2736970192,9772.5870637088,9652.3219776395,8987.5691598555,7861.76413975,6382.255433007,4645.7317466238,2725.9833988436,1893.7895049022,4405.2416245616,6915.5308634621,9423.8894449796,11928.685582242,14425.740445764,16900.284931623,19243.548456142,19340.395431152,17015.889171899,14543.358165652,12046.876667823,9542.3189106864,7034.081538235,4523.8621737272,2012.4539489799,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21.089374924963,1859.4343903025,3527.1344362264,4970.2807242188,6122.6408909872,6911.8216561059,7274.2638733227,7175.952914051,6626.4500988885,5674.7407003293,4390.5121491563,2844.8376477624,1099.0517682388,1610.0656933689,4079.6559528283,6533.4050388428,8961.486968169,11344.179858905,13636.267289276,15714.575412245,17192.582107575,17233.843048319,15802.886266588,13740.811189758,11455.032779208,9075.2895157415,6648.7933052954,4195.9868008547,1726.9998393617,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1505.3200484131,2786.4302065163,3790.7718894393,4467.3146536906,4774.5775962749,4691.4602577935,4223.8219002461,3402.5816435098,2274.6195648701,891.91355737503,0,1011.9282459035,3397.292342087,5740.3916427444,8018.0240718272,10188.088484936,12169.38518784,13800.543974004,14791.059473599,14815.840348337,13864.577929435,12256.057021619,10286.810917706,8123.4055493589,5849.7018538697,3509.0712430213,1125.3441416758,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,528.85459318995,1416.3237308787,2007.509724154,2274.078965438,2202.0934248878,1795.3929206945,1074.6343696988,72.500273466649,0,0,126.60459913878,2397.7229148987,4596.5799993632,6689.435767295,8621.6720646563,10304.492396387,11600.509197612,12330.981715343,12348.580138212,11649.205993629,10375.717522533,8707.6590533296,6784.8742344397,4698.1675042551,2503.434310273,235.17495305643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1129.1607901745,3169.9846012902,5072.8136263527,6781.4796291544,8216.8530403747,9276.6583293889,9851.6270406095,9865.2506251,9315.5371478533,8276.2483015081,6856.1623074516,5158.429871959,3263.3475796929,1228.0581132681,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1523.1754703662,3247.4090916934,4761.2712079635,6000.2140964533,6890.7607393191,7363.6353472499,7374.7433891333,6922.9786717207,6050.7146854727,4826.5437207619,3324.1185327348,1608.5628039778,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1271.5798502421,2620.8499775898,3704.5814666839,4469.9329146649,4871.0445589524,4880.4195511987,4497.3834779879,3748.3074110292,2678.4413864795,1340.5313873191];

                            var find_min = 100000000;
                            var find_max = 0;
                            var gap = 1; // by default

                             angular.forEach(randList_temp, function(value){
                                  if(value > 0 ){

                                 if(value > find_max){
                                   find_max = value;
                                 }

                                 if(value < find_min){
                                   find_min = value;
                                 }

                                 gap = ( find_max - find_min ) / _count;
                                 }
                          });

                                 console.log('min: ' + find_min);
                                 console.log('max: ' + find_max);
                                 console.log('gap: ' + gap);


                            angular.forEach(randList_temp, function(value){

                                // value = Math.floor(value);

                                 for(var i=find_min; i<_count; i++){

                                   var v = i * gap;
                                   var v_next = (i+1) * gap;

                                 if(value > v && value <= v_next){

                                   var output = Math.floor((v_next + v) /2);

                                    randList.push( output);
                                 }

                                 }

                            });

                                 console.log('count: ' + randList.length);

           // create pair objects [key, value]
           var mapObj = _.chain(randList).countBy().pairs().value();

           // add apir form: {'value': key, 'count': value}
          var mapObjPre = _.map(mapObj, function(value){
              return {'value':value[0], 'count':value[1]};
          });

           // create empty objects with length of `count`
           var mapObjPost = _(_count).times(
               function(n){return {'value': "0", 'count':0}}
            );

           // merge Pre-Post (a.e. fill zero places with empty objects)
           var shift = 0;
           for(var i=0; i < mapObjPre.length; i++){

                     var value = mapObjPre[i].value;
                     var count = mapObjPre[i].count;

                             for(var z=find_min; z<_count; z++){

                                   var v = z * gap;
                                   var v_next = (z+1) * gap;



                                 if(value > v && value <= v_next){
                                  mapObjPost[i].value = value;
                                  mapObjPost[i].count += count;
                                 }
                                 }

           }

          var response = _.chain(mapObjPost)
          .pluck('count').value();
           return response;
        };

        var dataSimualted = generateRandomData();


        $scope.chartConfig = {
            loadRandomData: false, // fess
                chart: {
                     renderTo: 'container'
                },

                title: {
                    text: '<b><font color="red">Simulated</font></b> vs. <b>Calibrated</b> network performance'
                },
             xAxis: {
                    title: {
                        text: 'Throughput'
                    },
                    labels: {
                        formatter: function() {
                            return this.value  +'Mb';
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Sample Count'
                    },
                    labels: {
                        formatter: function() {
                            return this.value;
                        },
                        color: '#808080'
                    }
                },
                tooltip: {
                    pointFormat: 'for {series.name} found <b>{point.y:,.0f}</b><br/> samples with throughput of  {point.x}'
                },

                plotOptions: {
                    area: {
                        pointStart: 1,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'Simulated',
                    color: '#F73333',
                    data: dataSimualted,
                    type: $scope.selectedChartType,
                    dataLabels: {enabled:enableDataLabels}
                }]
            };


         $scope.toggleLoading = function () {
            this.chartConfig.loading = !this.chartConfig.loading
        }

          $scope.toggleLabels = function () {
             enableDataLabels = !enableDataLabels;
             $scope.chartConfig.series[0].dataLabels.enabled =  enableDataLabels;
        }

         $scope.seriesTypeChange = function(type){
             $scope.chartConfig.series[0].type =  type;
         };

    });


    m.directive('myElem',
       function () {
           return {
               restrict: 'E',
               replace:true,
                scope: {
                config: '='
               },
               template: '<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
               link: function (scope, element, attrs) {

                    var chart = false;

                    var initChart = function() {
                      if (chart) chart.destroy();
                      var config = scope.config || {};
                      chart = new Highcharts.Chart(config);


                      if(config.loading) {
                        chart.showLoading();
                      }

                    };
                    initChart();

            scope.$watch('config.loading', function (loading) {
              if(loading) {
                chart.showLoading();
              } else {
                chart.hideLoading();
              }
            });

           scope.$watch('config.series[0].type', function (type) {
             chart.series[0].update({type: type});
            });

            scope.$watch('config.series[0].dataLabels.enabled', function (enableDataLabels) {
             chart.series[0].update({dataLabels: {enabled: enableDataLabels}});
            });
             }//end watch
           }
       }) ;


    });

  var gems = [
     { name: 'Azurite', price: 110.50 },
     { name: 'Bloodstone', price: 22.90 },
     { name: 'Zircon', price: 1100 },
   ];
