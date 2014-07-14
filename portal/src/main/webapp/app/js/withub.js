angular.module('withub', [
    'ui.router'

])
    .factory('ContentService', ['$q', '$http',
        function ($q, $http) {
            return {
                fetchContentList: function (columnId, page) {
                    var defer = $q.defer();
                    $http({
                        url: ctx + '/content/list.do',
                        params: {columnId: columnId},
                        method: 'GET'
                    }).success(function (response) {
                        defer.resolve(response);
                    })
                    return defer.promise;
                },
                getContent: function (id) {
                    var defer = $q.defer();
                    $http({
                        url: ctx + '/content/get.do',
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