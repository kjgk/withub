angular.module('app', ['withub', 'app.home', 'app.contact', 'app.intro', 'app.business', 'app.news', 'app.la'])
    .config([
        '$stateProvider', '$urlRouterProvider', '$translateProvider'
        , function ($stateProvider, $urlRouterProvider, $translateProvider) {
            $urlRouterProvider.otherwise("/home");

            $translateProvider.translations('en', {
                HOME: 'Home',
                INTRO: 'Introduce',
                BUSINESS: 'Services',
                NEWS: 'News',
                LA: 'Announcements',
                CONTACT: 'Contact'
            });

            $translateProvider.translations('cn', {
                HOME: '首页',
                INTRO: '公司简介',
                BUSINESS: '公司业务',
                NEWS: '新闻动态',
                LA: '上市公告',
                CONTACT: '联系我们'
            });

        }
    ])

    .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$translate', 'localStorageService'
        , function ($rootScope, $scope, $timeout, $state, $translate, localStorageService) {

            $rootScope.contextPath = PageContext.path;
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeSuccess', function () {

            })

            $rootScope.language = localStorageService.get('language') || 'cn';
            $rootScope.changeLanguage = function (key) {
                $translate.use(key);
                $rootScope.language = key;
                localStorageService.set('language', key)
            };

            $translate.use($rootScope.language);
        }
    ])