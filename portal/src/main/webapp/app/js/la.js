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
        '$scope', 'ContentService', 'LA_COLUMN_ID'
        , function ($scope, ContentService, columnId) {

            $scope.contentList = [];

            $scope.loading = false, $scope.complete = false;

            var page = 0, pageSize = 20;

            $scope.fetchContentList = function () {
                $scope.loading = true;
                ContentService.fetchContentList(columnId, ++page, pageSize + 1).then(function (response) {
                    var items = response.items;
                    if (items.length < pageSize) {
                        $scope.complete = true;
                    } else {
                        items.pop();
                    }
                    $scope.contentList = $scope.contentList.concat(items);

                }).finally(function () {
                    $scope.loading = false;
                })
            }

            $scope.fetchContentList();
        }
    ])