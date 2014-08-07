angular.module('app.news', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('news', {
                    url: "/news",
                    abstract: true,
                    template: "<div ui-view></div>"
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
        '$scope', '$state', 'ContentService', 'NEWS_COLUMN_ID'
        , function ($scope, $state, ContentService, columnId) {

            $scope.contentList = [];

            $scope.loading = false, $scope.complete = false;

            var page = 0, pageSize = 20;

            $scope.fetchContentList = function () {
                $scope.loading = true;
                ContentService.fetchContentList(columnId, ++page, pageSize + (page == 1 ? 2 : 1)).then(function (response) {
                    var items = response.items;
                    if (items.length < pageSize) {
                        $scope.complete = true;
                    } else {
                        items.pop();
                    }
                    if (page == 1) {
                        $scope.roll = items[0];
                        items.splice(0, 1);
                    }
                    $scope.contentList = $scope.contentList.concat(items);

                    $scope.loading = false;
                })
            }

            $scope.fetchContentList();
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