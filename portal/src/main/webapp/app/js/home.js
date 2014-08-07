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
        '$scope', 'BusinessService', 'ContentService', 'NEWS_COLUMN_ID', 'LA_COLUMN_ID'
        , function ($scope, BusinessService, ContentService, newsColumnId, laColumnId) {

            /* 公司公告 */
            ContentService.fetchContentList(newsColumnId, 1, 3).then(function (result) {
                $scope.contentList1 = result.items;
            });
            ContentService.fetchContentList(laColumnId, 1, 3).then(function (result) {
                $scope.contentList2 = result.items;
            });

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