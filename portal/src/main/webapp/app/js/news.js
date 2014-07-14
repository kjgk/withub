angular.module('app.news', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('news', {
                    url: "/news",
                    abstract: true,
                    templateUrl: "app/template/news.html",
                    controller: 'NewsCtrl'
                })
                .state('news.columns', {
                    url: "/column",
                    templateUrl: "app/template/news-column.html",
                    controller: 'NewsColumnCtrl'
                })
                .state('news.column', {
                    url: "/column/:id",
                    templateUrl: "app/template/news-column.html",
                    controller: 'NewsColumnCtrl'
                })
                .state('news.detail', {
                    url: "/detail/:id",
                    templateUrl: "app/template/news-detail.html",
                    controller: 'NewsDetailCtrl'
                })

            $urlRouterProvider.when('/news', '/news/column')

        }
    ])
    .factory('NewsService', [
        function () {
            var newsList = [
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'},
                {title: '交大海外教育学院商务考察系列活动走进贵州，引领优质教育、企业家校友资源服务全国', column: '集团新闻', content: '经过十年的办学，我院形成了较为完备的高端继续教育培训体系，培养了近5万名企业家为主的校友，从2013年开始，学院创新服务社会形式，组织优秀教育资源和企业家校友资源。', eventTime: new Date(), source: '发展联络部 喻成浩'}
            ];
            return {
                getNewsList: function () {
                    return newsList;
                }
            }
        }
    ])
    .controller('NewsCtrl', [
        '$scope'
        , function ($scope) {
        }
    ])
    .controller('NewsColumnCtrl', [
        '$scope', '$state', 'NewsService'
        , function ($scope, $state, NewsService) {

            $scope.newsList = NewsService.getNewsList();

            $scope.roll = $scope.newsList[0];
        }
    ])
    .controller('NewsDetailCtrl', [
        '$scope'
        , function ($scope) {

        }
    ])