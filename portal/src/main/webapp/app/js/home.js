angular.module('app.home', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "app/template/home.html",
                    controller: 'HomeCtrl'
                })
        }
    ])
    .controller('HomeCtrl', [
        '$scope', 'BusinessService', 'ContentService'
        , function ($scope, BusinessService, ContentService) {

            /* 公司公告 */


            ContentService.fetchContentList(101).then(function (result) {
                $scope.noticeList1 = [result.items[0], result.items[1] , result.items[2]]
            });

            $scope.noticeList2 = [
                {eventTime: '2014-07-07 16:22', title: '董事名单和他们的地位和作用'},
                {eventTime: '2014-07-07 16:22', title: '股东周年大会的結果 / 在股东批准的情況下重选或委任董事 / 更换董事或重要行政职能或职责'},
                {eventTime: '2014-07-07 16:22', title: '发出通函后重大资料 / 在股东批准的情況下重选或委任董事'}
            ]

            /* 公司业务 */
            $scope.businessList = BusinessService.getBusinessList();

            /* 员工天地 */
            $scope.employeeWorldList = [
                {title: '员工天地', src: 'static/images/e_1.jpg', url: ''},
                {title: '企业文化', src: 'static/images/e_2.jpg', url: ''},
                {title: '团队精神', src: 'static/images/e_4.jpg', url: ''},
                {title: '慧谷人', src: 'static/images/e_3.jpg', url: ''}
            ]
        }

    ])