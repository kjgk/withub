<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>上海交大慧谷信息产业股份有限公司</title>
    <link href="${ctx}/static/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="${ctx}/static/font-awesome/css/font-awesome.min.css" type="text/css" rel="stylesheet">
    <link href="${ctx}/static/styles/app.css" type="text/css" rel="stylesheet">
    <script>
        ctx = '${ctx}';
    </script>
</head>
<body ng-controller="MainCtrl">

<header id="header">
    <div class="container">
        <a class="btn btn-grey">English</a>
        <a class="btn btn-red">关注</a>
    </div>
</header>

<div class="navbar navbar-index">
    <div class="container">
        <ul class="nav navbar-nav">
            <li ng-class="{active: $state.includes('home')}">
                <a href="#/home">首页</a>
            </li>
            <li ng-class="{active: $state.includes('intro')}">
                <a href="#/intro">公司简介</a>
            </li>
            <li ng-class="{active: $state.includes('business')}">
                <a href="#/business">公司业务</a>
            </li>
            <li ng-class="{active: $state.includes('news')}">
                <a href="#/news">新闻动态</a>
            </li>
            <li ng-class="{active: $state.includes('la')}">
                <a href="#/la">上市公告</a>
            </li>
            <li ng-class="{active: $state.includes('contact')}">
                <a href="#/contact">联系我们</a>
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
    <ui-view></ui-view>
</div>

<div class="banner3">
    <div class="container"></div>
</div>

<footer id="footer">
    <div class="container">
        <div class="pull-right"><label>版权所有：上海交大慧谷信息产业股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备05038349号</label></div>
    </div>
</footer>

<script src="${ctx}/static/underscore/underscore.min.js"></script>
<script src="${ctx}/static/angular/angular.min.js"></script>
<script src="${ctx}/static/angular/i18n/angular-locale_zh-cn.js"></script>
<script src="${ctx}/static/angular-ui/ui-bootstrap-tpls-0.11.0.min.js"></script>
<script src="${ctx}/static/angular-ui/angular-ui-router.min.js"></script>
<script src="${ctx}/static/angular-ui/ui-utils.js"></script>

<%--<script src="${ctx}/app/dist/withub-protal.min.js"></script>--%>

<script src="${ctx}/app/js/withub.js"></script>
<script src="${ctx}/app/js/home.js"></script>
<script src="${ctx}/app/js/contact.js"></script>
<script src="${ctx}/app/js/intro.js"></script>
<script src="${ctx}/app/js/business.js"></script>
<script src="${ctx}/app/js/news.js"></script>
<script src="${ctx}/app/js/la.js"></script>
<script src="${ctx}/app/js/app.js"></script>
</body>
</html>
