angular.module('app.business', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('business', {
                    url: "/business",
                    abstract: true,
                    template: "<div ui-view></div>"
                })
                .state('business.home', {
                    url: "",
                    templateUrl: "app/template/business.html",
                    controller: 'BusinessCtrl'
                })
                .state('business.column', {
                    url: "/:columnId",
                    templateUrl: "app/template/business-column.html",
                    controller: 'BusinessColumnCtrl'
                })
                .state('business.column.detail', {
                    url: "/:contentId",
                    templateUrl: "app/template/business-column-detail.html",
                    controller: 'BusinessDetailCtrl'
                })

        }
    ])
    .factory('BusinessService', [
        function () {
            var businessList = [
                {id: '111', title: '系统集成', subTitle: '以市场为先导 以集成倡导服务', titleEn: 'System integration', content: '依靠交大的人才优势，将产品技术进步与应用需求发展有机结合，为客户提供计算机网络信息系统、数据存储及灾备系统信息安全系统的总体规划设计及建设；智能化弱点系统总包及专业化多媒体会议系统、安防监控系统、综合布线、数据中心机房系统的规划设计及建设。', src: 'static/images/b_1.jpg', src2: 'static/images/b_5.jpg'},
                {id: '112', title: '软件开发', subTitle: '优质产品 高效服务 以人为本 客户至上', titleEn: 'Software', content: '软件开发和咨询业务提供专业的行业解决方案和产品。客户群涉及法院、医疗、教育、政府、金融行业以及众多大型企业；拥有完善的产品系列，涵盖区域医疗、智慧养老、热线诉服、智能监控、商业智能、电子政务、电子商务、ERP等应用方向。软件提供完善的售后服务保障体系。让用户“用的放心，用的安心”是我们秉承的理念。', src: 'static/images/b_2.jpg', src2: 'static/images/b_6.jpg'},
                {id: '113', title: '解决方案', subTitle: '从传输到控制，从播放到特效显示，提供全系列多媒体创新展示解决方案', titleEn: 'Solutions', content: '公司致力于多媒体专业显示领域的系列软硬件产品研发和应用，自行研发的Media Master系列产品能满足智能播放、特种打拼显示、媒体控制及无线传输等众多显示需求，可为文化创意和内容制作提供个性化的播控平台，为多种多路计算机和视频信号的协同管理及使用单位的决策辅助系统提供交换、处理和交互的显示平台。', src: 'static/images/b_3.jpg', src2: 'static/images/b_7.jpg'},
                {id: '114', title: '产品分销', subTitle: '专业第一 服务至上', titleEn: 'Product distribution', content: '公司笔记本产品分销业务，采取零售、行业、分销三种主要方式相结合的销售模式。经营的主力品牌有华硕笔记本电脑，是上海地区最大的分销商，并多次得到厂家的奖励，2005年7月获得最快成长奖、2006年7月至2010年7月一直获得最佳业绩奖，并于2011年7月获得最高奖项金钟奖。', src: 'static/images/b_4.jpg', src2: 'static/images/b_8.jpg'}
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
    .controller('BusinessColumnCtrl', [
        '$scope', '$state', 'ContentService'
        , function ($scope, $state, ContentService) {

            $scope.showColumn = true;
            ContentService.fetchContentList($state.params.columnId).then(function (result) {
                $scope.contentList = result.items;
            });
        }
    ])
    .controller('BusinessDetailCtrl', [
        '$scope', '$state', '$sce', 'ContentService'
        , function ($scope, $state, $sce, ContentService) {

            $scope.$parent.showColumn = false;
            ContentService.getContent($state.params.contentId).then(function (result) {
                $scope.content = result.data;
                $scope.contentHtml = $sce.trustAsHtml($scope.content.content);
            });
        }
    ])