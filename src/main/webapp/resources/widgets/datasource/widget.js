require.config({
    paths: {
        'jsinq': '/components/jsinq/source/jsinq',
        'jsinq-query': '/components/jsinq/source/jsinq-query'

    },
    shim: {
        'jsinq':{
            exports: 'jsinq'
        },
        'jsinq-query':{
            deps:['jsinq']
        }
    }
});


define(['angular','jsinq','jsinq-query'], function (angular,jsinc) {
    var m = angular.module('app.widgets.datasource', []);


        m.controller('DataSourceController',
            function($scope, $http, $window,  EventEmitter, APIProvider){

                var eventEmitter = new EventEmitter($scope);
                $scope.urls = [];
                $scope.url = $scope.widget.url;
                $scope.dimensionList = [];

                $scope.select = function(url){
                    $scope.url = url;
                    $scope.load();
                }



                $scope.load = function (){
                    $scope.dimensionList = [];
                    $http.get($scope.url).success(
                        function(data){

                            $scope.data = data;
                            var header = $scope.data.header;
                            var stub = $scope.data.stub;

                            var q1 = new jsinq.Query("from r in $0 select {name:r.dimensionId,role:undefined,selection:[]}");
                            var q2 = new jsinq.Query("from r in $0 where r.dimensionId==$1 select r.members");
                            var q3 = new jsinq.Query("from r in $0 select {value:r, selected:false}");

                            q1.setValue(0, new jsinq.Enumerable($scope.data.header));

                            var p1 = q1.execute().toArray();

                            angular.forEach( p1, function(current,index){
                                 q2.setValue(0,new jsinq.Enumerable(header));
                                 q2.setValue(1,current.name);
                                 current.members = q2.execute().toArray()[0];
                                 q3.setValue(0,new jsinq.Enumerable(current.members));
                                 current.members = q3.execute().toArray();
                            });

                            q1.setValue(0, new jsinq.Enumerable(stub));
                            var p2 = q1.execute().toArray();

                            angular.forEach( p2, function(current,index){
                                q2.setValue(0,new jsinq.Enumerable(stub));
                                q2.setValue(1,current.name);
                                current.members = q2.execute().toArray()[0];
                                q3.setValue(0,new jsinq.Enumerable(current.members));
                                current.members = q3.execute().toArray();
                            });

                            $scope.dimensionList = $scope.dimensionList.concat(p1,p2);



                            eventEmitter.emit('loadDataSuccess',$scope.data);

                        }
                    ).error(function (data, status) {
                            $window.alert('$http error ' + status + ' - cannot load data');
                        });
                }



                $scope.$watch('widget.url', function (newValue) {
                    $scope.url = newValue;
                    if (angular.isDefined($scope.url)) $scope.load();
                });

                new APIProvider($scope)
                    .provide('feedback', function (evt) {
                        console.log("datasource feefback",evt);
                        if(angular.isDefined($scope.data))
                        eventEmitter.emit('loadDataSuccess',$scope.data);
                    });



                $scope.pushSelection = function(result,dimension){
                    var r = {name:dimension.name, selection:[]};
                    angular.forEach(dimension.members, function(current){
                       if(current.selected) r.selection.push("'"+current.value+"'");
                    });
                    result.push(r);
                }

                $scope.getQuery = function(){
                    var queryParams = [];
                    angular.forEach($scope.dimensionList, function(current){
                        $scope.pushSelection(queryParams,current);
                    })
                    var selectionTest = []
                    angular.forEach(queryParams, function(currentDim){
                        var itemsTest = [];
                        angular.forEach(currentDim.selection,function(current){
                            itemsTest.push("r."+currentDim.name+"=="+current);
                        });
                        selectionTest.push("("+itemsTest.join("||")+")");
                    });
                    selectionTest = selectionTest.join(" && ");
                    console.log('selectionTest',selectionTest);

                    var query1 = new jsinq.Query("from r in $0 where "+selectionTest+" select r");
                    query1.setValue(0, new jsinq.Enumerable($scope.data.data));
                    $scope.query = query1;
                    $scope.query1Result = query1.execute().toArray();
                    $scope.query1ResultHeader = Object.keys($scope.query1Result[0]);
                }

                $scope.getSeries = function(){
                    console.log("$scope.query2String",$scope);
                    var query = new jsinq.Query($scope.q2S);
                    query.setValue(0, new jsinq.Enumerable($scope.query1Result));
                    var r = query.execute();
                    $scope.series = r.toArray();
                    //r.each(function(element) {
                    //    console.log(element);
                    //    element.each(function(e){
                    //            console.log(e);
                    //        });
                    //
                    //});

                }

            }
        );
});
