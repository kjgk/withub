angular.module('app.la', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('la', {
                    url: "/la",
                    templateUrl: "app/template/la.html",
                    controller: 'LaCtrl'
                })
        }
    ])
    .controller('LaCtrl', [
        '$scope'
        , function ($scope) {

            $scope.noticeList = [
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()},
                {title: '财务报表/环境、社会及管治资料 季度报告', eventTime: new Date()}
            ];
        }

    ])