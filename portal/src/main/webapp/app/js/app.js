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
                CONTACT: 'Contact',
                MORE: 'More',
                LOADING: ' Loading... '
            });

            $translateProvider.translations('cn', {
                HOME: '首页',
                INTRO: '公司简介',
                BUSINESS: '公司业务',
                NEWS: '新闻动态',
                LA: '上市公告',
                CONTACT: '联系我们',
                MORE: '加载更多',
                LOADING: ' 正在加载，请稍候... '
            });

        }
    ])

    .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$location', '$translate', 'localStorageService'
        , function ($rootScope, $scope, $timeout, $state, $location, $translate, localStorageService) {

            $rootScope.contextPath = PageContext.path;
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeSuccess', function () {

            });
            $rootScope.$on('$stateChangeStart', function (event, newState) {
                if ($scope.language == 'en' && newState.name != 'la') {
                    $location.path('la');
                }
            });

            $rootScope.language = localStorageService.get('language') || 'cn';
            $rootScope.changeLanguage = function (key) {
                $translate.use(key);
                $rootScope.language = key;
                localStorageService.set('language', key);

                if ($scope.language == 'en' && $state.current.name != 'la') {
                    $location.path('la');
                }
            };

            $translate.use($rootScope.language);

            $scope.showMenu = function () {
                return $scope.language == 'cn';
            }
        }
    ]);