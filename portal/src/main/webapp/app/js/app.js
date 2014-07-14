angular.module('app', ['withub', 'app.home', 'app.contact', 'app.intro', 'app.business', 'app.news', 'app.la'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
        }
    ])

    .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', '$state'
        , function ($rootScope, $scope, $timeout, $state) {

            $rootScope.ctx = ctx;
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeSuccess', function () {

//                console.log(angular.element("body"))
            })
        }

    ])