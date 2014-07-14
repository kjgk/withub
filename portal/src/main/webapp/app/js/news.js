angular.module('app.news', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('news', {
                    url: "/news",
                    abstract: true,
                    template: "<ui-view></ui-view>"
                })
                .state('news.home', {
                    url: "",
                    templateUrl: "app/template/news.html",
                    controller: 'NewsCtrl'
                })
                .state('news.detail', {
                    url: "/:id",
                    templateUrl: "app/template/news-detail.html",
                    controller: 'NewsDetailCtrl'
                })

        }
    ])
    .controller('NewsCtrl', [
        '$scope', '$state', 'ContentService'
        , function ($scope, $state, ContentService) {
            ContentService.fetchContentList(101).then(function (result) {
                $scope.contentList = result.items;
                $scope.roll = $scope.contentList[0];
                $scope.contentList.splice(0, 1)
            });
        }
    ])
    .controller('NewsDetailCtrl', [
        '$scope', '$state', '$sce', 'ContentService'
        , function ($scope, $state, $sce, ContentService) {

            ContentService.getContent($state.params.id).then(function (result) {
                $scope.content = result.data;
                $scope.contentHtml = $sce.trustAsHtml($scope.content.content);
            });
        }
    ])