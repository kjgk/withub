/* App */
angular.module('app', ['withub', 'app.home', 'app.contact', 'app.intro', 'app.business', 'app.news', 'app.la'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
        }
    ])

    .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', '$state'
        , function ($rootScope, $scope, $timeout, $state) {

            $rootScope.ctx = ctx;
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeSuccess', function () {

//                console.log(angular.element("body"))
            })
        }

    ])
angular.module('app.business', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('business', {
                    url: "/business",
                    templateUrl: "app/template/business.html",
                    controller: 'BusinessCtrl'
                })
        }
    ])
    .factory('BusinessService', [
        function () {
            var businessList = [
                {title: '系统集成', subTitle: '以市场为先导 以集成倡导服务', titleEn: 'System integration', content: '依靠交大的人才优势，将产品技术进步与应用需求发展有机结合，为客户提供计算机网络信息系统、数据存储及灾备系统信息安全系统的总体规划设计及建设；智能化弱点系统总包及专业化多媒体会议系统、安防监控系统、综合布线、数据中心机房系统的规划设计及建设。', src: 'static/images/b_1.png', src2: 'static/images/b_5.png', url: '#/news/column/101'},
                {title: '软件开发', subTitle: '优质产品 高效服务 以人为本 客户至上', titleEn: 'Software', content: '软件开发和咨询业务提供专业的行业解决方案和产品。客户群涉及法院、医疗、教育、政府、金融行业以及众多大型企业；拥有完善的产品系列，涵盖区域医疗、智慧养老、热线诉服、智能监控、商业智能、电子政务、电子商务、ERP等应用方向。软件提供完善的售后服务保障体系。让用户“用的放心，用的安心”是我们秉承的理念。', src: 'static/images/b_2.png', src2: 'static/images/b_6.png', url: '#/news/column/102'},
                {title: '解决方案', subTitle: '从传输到控制，从播放到特效显示，提供全系列多媒体创新展示解决方案', titleEn: 'Solutions', content: '公司致力于多媒体专业显示领域的系列软硬件产品研发和应用，自行研发的Media Master系列产品能满足智能播放、特种打拼显示、媒体控制及无线传输等众多显示需求，可为文化创意和内容制作提供个性化的播控平台，为多种多路计算机和视频信号的协同管理及使用单位的决策辅助系统提供交换、处理和交互的显示平台。', src: 'static/images/b_3.png', src2: 'static/images/b_7.png', url: '#/news/column/103'},
                {title: '产品分销', subTitle: '专业第一 服务至上', titleEn: 'Product distribution', content: '公司笔记本产品分销业务，采取零售、行业、分销三种主要方式相结合的销售模式。经营的主力品牌有华硕笔记本电脑，是上海地区最大的分销商，并多次得到厂家的奖励，2005年7月获得最快成长奖、2006年7月至2010年7月一直获得最佳业绩奖，并于2011年7月获得最高奖项金钟奖。', src: 'static/images/b_4.png', src2: 'static/images/b_8.png', url: '#/news/column/104'}
            ];
            return {
                getBusinessList: function () {
                    return businessList;
                }
            }
        }
    ])
    .controller('BusinessCtrl', [
        '$scope', 'BusinessService'
        , function ($scope, BusinessService) {

            /* 公司业务 */
            $scope.businessList = BusinessService.getBusinessList();
        }

    ])
angular.module('app.contact', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('contact', {
                    url: "/contact",
                    templateUrl: "app/template/contact.html",
                    controller: 'ContactCtrl'
                })
        }
    ])
    .controller('ContactCtrl', [
        '$scope'
        , function ($scope) {


        }

    ])
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
        '$scope', 'BusinessService'
        , function ($scope, BusinessService) {

            /* 公司公告 */
            $scope.noticeList1 = [
                {eventTime: '2014-07-07 16:22', title: '发出通函后重大资料 / 在股东批准的情況下重选或委任董事'},
                {eventTime: '2014-07-07 16:22', title: '董事名单和他们的地位和作用'},
                {eventTime: '2014-07-07 16:22', title: '股东周年大会的結果 / 在股东批准的情況下重选或委任董事 / 更换董事或重要行政职能或职责'}
            ]
            $scope.noticeList2 = [
                {eventTime: '2014-07-07 16:22', title: '董事名单和他们的地位和作用'},
                {eventTime: '2014-07-07 16:22', title: '股东周年大会的結果 / 在股东批准的情況下重选或委任董事 / 更换董事或重要行政职能或职责'},
                {eventTime: '2014-07-07 16:22', title: '发出通函后重大资料 / 在股东批准的情況下重选或委任董事'}
            ]

            /* 公司业务 */
            $scope.businessList = BusinessService.getBusinessList();

            /* 员工天地 */
            $scope.employeeWorldList = [
                {title: '员工天地', src: 'static/images/e_1.png', url: ''},
                {title: '企业文化', src: 'static/images/e_2.png', url: ''},
                {title: '团队精神', src: 'static/images/e_4.png', url: ''},
                {title: '慧谷人', src: 'static/images/e_3.png', url: ''}
            ]
        }

    ])
angular.module('app.intro', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('intro', {
                    url: "/intro",
                    templateUrl: "app/template/intro.html",
                    controller: 'IntroCtrl'
                })
        }
    ])
    .controller('IntroCtrl', [
        '$scope'
        , function ($scope) {

            $scope.sprcList = [
                {text: '交大慧谷网智通防火墙软件'},
                {text: '交大慧谷-涉案财务信息管理软件'},
                {text: '交大慧谷-违法犯罪人员信息管理软件'},
                {text: '交大慧谷网智通视™网络视频软件'},
                {text: '交大慧谷-劳动力资源管理信息软件'},
                {text: '交大慧谷-服务热线管理信息软件'},
                {text: '交大慧谷-内容管理软件'},
                {text: '交大慧谷-知识库管理软件'},
                {text: '交大慧谷MediaMaster大屏幕显示系统数字媒体应用内容管理软件'},
                {text: '交大慧谷WIT_CCFrame呼叫中心管理平台软件'},
                {text: '交大慧谷MediaMaster全方位大屏幕数字媒体显示软件'},
                {text: '交大慧谷远程无线网络监控和信息发布平台软件'},
                {text: '交大慧谷MediaMaster图形图像处理软件'},
                {text: '交大慧谷E-controlling图形图像处理软件'},
                {text: '交大慧谷Pro-viewer图形图像处理软件'}
            ];
            $scope.sc1List = [
                {text: '交大慧谷远程无线网络监控和信息发布平台软件'},
                {text: '交大慧谷-内容管理软件'},
                {text: '交大慧谷--劳动力资源管理信息系统'},
                {text: '交大慧谷--知识库管理系统'},
                {text: '慧谷网智通防火墙软件'},
                {text: '交大慧谷-涉案财物信息管理软件'},
                {text: '交大慧谷-违法犯罪人员信息管理软件'},
                {text: '网智通视™网络视频系统'},
                {text: '交大慧谷--服务热线管理信息系统'}
            ];
            $scope.sc2List = [
                {text: '交大慧谷Media Master图形图像处理软件'},
                {text: '交大慧谷Media Master大屏显示系统数字媒体应用内容管理软件'},
                {text: '交大慧谷-WIT_Easy.Net企业级框架平台软件'},
                {text: '交大慧谷监控云平台-基于TD-CDMA视频识别云软件'},
                {text: '交大慧谷-基于云计算的区域医疗平台软件'},
                {text: '交大慧谷-WIT_SHEJA新一代电子政务平台软件'},
                {text: '交大慧谷-呼叫服务云软件'},
                {text: '交大慧谷-Pro-viewer图形图像处理软件'},
                {text: '交大慧谷-E-controlling图形图像处理软件'},
                {text: '交大慧谷基于云计算的MMFrame信息发布软件'},
                {text: '交大慧谷基于SOA的数据采集交换网关软件'}
            ];
        }

    ])
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
angular.module('app.news', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('news', {
                    url: "/news",
                    abstract: true,
                    templateUrl: "app/template/news.html",
                    controller: 'NewsCtrl'
                })
                .state('news.columns', {
                    url: "/column",
                    templateUrl: "app/template/news-column.html",
                    controller: 'NewsColumnCtrl'
                })
                .state('news.column', {
                    url: "/column/:id",
                    templateUrl: "app/template/news-column.html",
                    controller: 'NewsColumnCtrl'
                })
                .state('news.detail', {
                    url: "/detail/:id",
                    templateUrl: "app/template/news-detail.html",
                    controller: 'NewsDetailCtrl'
                })

            $urlRouterProvider.when('/news', '/news/column')

        }
    ])
    .factory('NewsService', [
        function () {
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
            return {
                getNewsList: function () {
                    return newsList;
                }
            }
        }
    ])
    .controller('NewsCtrl', [
        '$scope'
        , function ($scope) {
        }
    ])
    .controller('NewsColumnCtrl', [
        '$scope', '$state', 'NewsService'
        , function ($scope, $state, NewsService) {

            $scope.newsList = NewsService.getNewsList();

            $scope.roll = $scope.newsList[0];
        }
    ])
    .controller('NewsDetailCtrl', [
        '$scope'
        , function ($scope) {

        }
    ])
angular.module('withub', [
    'ui.router'
//    , 'ui.bootstrap'

]);