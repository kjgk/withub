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