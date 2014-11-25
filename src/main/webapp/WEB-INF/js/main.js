require.config({
    baseUrl: '/',
    // alias libraries paths.  Must set 'angular'
    paths: {
        'jquery': 'components/jquery/dist/jquery',
        'angular': 'components/angular/angular',
        'template-cached-pages': 'js/templates',
        'angular-ui-router': 'components/angular-ui-router/release/angular-ui-router',
        'angular-oclazyload': 'components/oclazyload/dist/ocLazyLoad',
        'angular-bootstrap': 'components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-json-editor': 'components/angular-json-editor/src/angular-json-editor',
        'json-editor': 'components/json-editor/dist/jsoneditor',
        'leaflet': 'components/leaflet/dist/leaflet',
        'angular-leaflet': 'components/angular-leaflet/dist/angular-leaflet-directive',
        'sceditor': 'components/SCEditor/src/jquery.sceditor'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'leaflet': {
            exports: 'L'
        },
        'jquery': {
            exports: '$'
        },
        'angular-leaflet': ['angular', 'leaflet'],
        'angular-ui-router': ['angular'],
        'angular-oclazyload': ['angular'],
        'sceditor': ['jquery'],
        'json-editor': ['sceditor'],
        'angular-bootstrap': ['angular'],
        'angular-json-editor': ['angular', 'json-editor'],
        'template-cached-pages': ['angular']
    },

    // kick start application
    deps: ['js/app']
});
