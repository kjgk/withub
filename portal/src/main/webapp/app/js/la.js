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
        '$scope', 'ContentService', 'LA_COLUMN_ID', 'LA_EN_COLUMN_ID'
        , function ($scope, ContentService, cnColumnId, enColumnId) {

            $scope.contentList = [];

            $scope.loading = false, $scope.complete = false;

            var page = 0, pageSize = 20, language = $scope.language;

            $scope.$watch('language', function () {
                if (language != $scope.language) {
                    page = 0;
                    language = $scope.language;
                    $scope.fetchContentList();
                }
            });

            $scope.fetchContentList = function () {
                $scope.loading = true;
                if (page == 0) {
                    $scope.contentList = [];
                }
                ContentService.fetchContentList(language == 'cn' ? cnColumnId : enColumnId, ++page, pageSize + 1).then(function (response) {
                    var items = response.items;
                    if (items.length < pageSize) {
                        $scope.complete = true;
                    } else {
                        items.pop();
                    }
                    $scope.contentList = $scope.contentList.concat(items);

                    $scope.loading = false;
                })
            }

            $scope.fetchContentList();
        }
    ])