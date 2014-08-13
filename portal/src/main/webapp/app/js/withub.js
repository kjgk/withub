if (!PageContext) {
    PageContext = {
        path: ''
    }
}
angular.module('withub', [
    'ui.router',
    'pascalprecht.translate',
    'LocalStorageModule'
])
    .constant('NEWS_COLUMN_ID', 101)  //新闻的ID
    .constant('LA_COLUMN_ID', 102)  //上市公告的ID
    .constant('LA_EN_COLUMN_ID', 115)  //上市公告（英文版）的ID
    .factory('ContentService', ['$q', '$http',
        function ($q, $http) {
            return {
                fetchContentList: function (columnId, page, pageSize) {
                    var defer = $q.defer();
                    $http({
                        url: PageContext.path + '/content/list.do',
                        params: {
                            columnId: columnId,
                            page: page,
                            'page.size': pageSize
                        },
                        method: 'GET'
                    }).success(function (response) {
                        defer.resolve(response);
                    })
                    return defer.promise;
                },
                getContent: function (id) {
                    var defer = $q.defer();
                    $http({
                        url: PageContext.path + '/content/get.do',
                        params: {id: id},
                        method: 'GET'
                    }).success(function (response) {
                        defer.resolve(response);
                    })
                    return defer.promise;
                }
            }
        }
    ])