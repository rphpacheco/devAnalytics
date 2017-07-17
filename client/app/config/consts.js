angular.module('app').constant('consts', {
    appName : 'DevAnalytics',
    version : '1.0',
    owner : 'Raphael Pacheco',
    year : '2017',
    site : 'http://devanalytics.com.br',
    apiUrl : 'http://localhost:8081/api',
    oapiUrl : 'http://localhost:8081/oapi',
    userKey : '_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
}])