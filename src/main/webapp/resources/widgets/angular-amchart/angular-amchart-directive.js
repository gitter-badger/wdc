require.config({
    paths: {
        'amchart':'components/amcharts/AmChartsWeb/amcharts/amcharts',
        'serial':'components/amcharts/AmChartsWeb/amcharts/serial',
        'xy':'components/amcharts/AmChartsWeb/amcharts/xy',
        'radar':'components/amcharts/AmChartsWeb/amcharts/radar',
        'pie':'components/amcharts/AmChartsWeb/amcharts/pie'
    },
    shim: {
        'amchart':{
            exports: 'AmCharts'
        },
        'serial':{
            deps:['amchart']
        },
        'xy':{
                    deps:['amchart']
                },
        'radar':{
                    deps:['amchart']
                },
        'pie':{
                    deps:['amchart']
                }
    }
});


define(['angular','amchart','serial','xy','radar','pie'],
    function (angular,AmCharts) {
    console.log(AmCharts);
    console.log(AmCharts.AmSerialChart);
    console.log(AmCharts.AmPieChart);
    console.log(AmCharts.AmRadarChart);
    console.log(AmCharts.AmXYChart);

});

