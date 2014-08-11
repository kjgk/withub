<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>上海交大慧谷信息产业股份有限公司</title>
    <link href="${ctx}/static/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="${ctx}/static/font-awesome/css/font-awesome.min.css" type="text/css" rel="stylesheet">
    <link href="${ctx}/static/styles/app.css" type="text/css" rel="stylesheet">
    <!--[if lte IE 8]>
    <link href="${ctx}/static/styles/ie8.css" type="text/css" rel="stylesheet">
    <![endif]-->
</head>
<body ng-controller="MainCtrl">

<div id="header">
    <div class="container">
        <a class="btn btn-grey" ng-show="language!='en'" ng-click="changeLanguage('en')">English</a>
        <a class="btn btn-grey" ng-show="language!='cn'" ng-click="changeLanguage('cn')">中文</a>
        <a class="btn btn-red">关注</a>
    </div>
</div>

<div class="navbar navbar-index">
    <div class="container">
        <ul class="nav navbar-nav">
            <li ng-class="{active: $state.includes('home')}">
                <a href="#/home" translate="HOME"></a>
            </li>
            <li ng-class="{active: $state.includes('intro')}">
                <a href="#/intro" translate="INTRO"></a>
            </li>
            <li ng-class="{active: $state.includes('business')}">
                <a href="#/business"  translate="BUSINESS"></a>
            </li>
            <li ng-class="{active: $state.includes('news')}">
                <a href="#/news"  translate="NEWS"></a>
            </li>
            <li ng-class="{active: $state.includes('la')}">
                <a href="#/la"  translate="LA"></a>
            </li>
            <li ng-class="{active: $state.includes('contact')}">
                <a href="#/contact"  translate="CONTACT"></a>
            </li>
        </ul>
    </div>
</div>

<div ng-class="{'banner1-home': $state.includes('home'), 'banner1': !$state.includes('home')}">
    <div class="container">
        <div class="code"></div>
    </div>
</div>

<div class="banner2">
    <div class="container"></div>
</div>

<div id="main">
    <div ui-view></div>
</div>

<div class="banner3">
    <div class="container"></div>
</div>

<div id="footer">
    <div class="container">
        <div class="pull-right"><label>版权所有：上海交大慧谷信息产业股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备05038349号</label></div>
    </div>
</div>

<!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->
<!--[if lte IE 8]>
<script src="${ctx}/static/respond/respond.min.js"></script>
<script src="${ctx}/static/html5shiv/html5shiv.min.js"></script>
<script src="${ctx}/static/ie-better/ieBetter-min.js"></script>
<![endif]-->

<script>
    PageContext = {
        path: '${ctx}'
    };
</script>

<script src="${ctx}/static/underscore/underscore.min.js"></script>
<script src="${ctx}/static/angular/angular.min.js"></script>
<script src="${ctx}/static/angular/i18n/angular-locale_zh-cn.js"></script>
<script src="${ctx}/static/angular-ui/ui-bootstrap-tpls-0.11.0.min.js"></script>
<script src="${ctx}/static/angular-ui/angular-ui-router.min.js"></script>
<script src="${ctx}/static/angular-ui/ui-utils.js"></script>
<script src="${ctx}/static/angular-translate/angular-translate.min.js"></script>
<script src="${ctx}/static/angular-local-storage/angular-local-storage.min.js"></script>

<script src="${ctx}/app/dist/withub-protal.min.js"></script>

<%--<script src="${ctx}/app/js/withub.js"></script>--%>
<%--<script src="${ctx}/app/js/home.js"></script>--%>
<%--<script src="${ctx}/app/js/contact.js"></script>--%>
<%--<script src="${ctx}/app/js/intro.js"></script>--%>
<%--<script src="${ctx}/app/js/business.js"></script>--%>
<%--<script src="${ctx}/app/js/news.js"></script>--%>
<%--<script src="${ctx}/app/js/la.js"></script>--%>
<%--<script src="${ctx}/app/js/app.js"></script>--%>

<!--[if lte IE 7]>
<script>
    document.getElementsByTagName('body')[0].innerHTML = '您使用的浏览器版本过低，建议立即升级到 Google Chrome、Internet Explorer 8 或更高版本';
</script>
<![endif]-->
</body>
</html>