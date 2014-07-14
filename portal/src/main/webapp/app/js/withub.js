angular.module('withub', [
    'ui.router'
//    , 'ui.bootstrap'

])
    .factory('ContentService', ['$q', '$http',
        function ($q, $http) {
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
            var laList = [];
            return {
                getNewsList: function () {
                    return newsList;
                },
                fetchContentList: function (columnId) {
                    var defer = $q.defer();
                    if (laList.length > 0) {
                        defer.resolve(laList);
                    } else {
                        $http({
                            url: ctx + '/content/list.do',
                            params: {columnId: columnId},
                            method: 'GET'
                        }).success(function (response) {
                            defer.resolve(response);
                        })
                    }
                    return defer.promise;
                }
            }
        }
    ])