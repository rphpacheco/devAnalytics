(function() {

    angular.module('app').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider.state('home', {
                url: "/home",
                templateUrl: "home/home.html"
            })
            /*.state('billingCycle', {
                url: "/billingCycle?page",
                templateUrl: "billingCycle/tabs.html"
            })*/

            $urlRouterProvider.otherwise('/home')
            $httpProvider.interceptors.push('handleResponseError')
        }
    ])
    .run([
        '$rootScope',
        '$http',
        '$location',
        '$window',
        'auth',
        function ($rootScope, $http, $location, $window, auth) {
            validateUser()
            $rootScope.$on('$locationChangeStart', () => validateUser())

            function validateUser() {
                const user = auth.getUser()
                const authPage = '/auth.html'
                const isAuthPage = $window.location.href.includes(authPage)

                if (!user && !isAuthPage) {
                    $window.location.href = authPage
                } else if (user && !user.isValid) {
                    auth.validateToken(user.token, (err, valid) => {
                        if (!valid) {
                            $window.location.href = authPage
                        } else {
                            user.isValid = true
                            $http.defaults.headers.common.Authorization = user.token
                            isAuthPage ? $window.location.href = '/' : $location.path('/')
                        }
                    })
                }
            }
        }
    ])

})()