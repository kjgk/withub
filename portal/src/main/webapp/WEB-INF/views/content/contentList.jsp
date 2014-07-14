<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>

<html>
<head>
	<title>内容管理</title>
</head>

<body>
	<c:if test="${not empty message}">
		<div id="message" class="alert alert-success"><button data-dismiss="alert" class="close">×</button>${message}</div>
	</c:if>
	<div class="row">
		<div class="span4 offset7">
			<form class="form-search" action="#">
				<label>名称：</label> <input type="text" name="search_LIKE_title" class="input-medium" value="${param.search_LIKE_title}"> 
				<button type="submit" class="btn" id="search_btn">Search</button>
		    </form>
	    </div>
	    <tags:sort/>
	</div>
	
	<table id="contentTable" class="table table-striped table-bordered table-condensed">
		<thead><tr><th style="width: 60px;">ID</th><th>标题</th><th>栏目</th><th style="width: 160px;">创建时间</th><th style="width: 120px;">管理</th></tr></thead>
		<tbody>
		<c:forEach items="${contents.content}" var="content">
			<tr>
				<td><a href="${ctx}/admin/content/update/${content.id}">${content.id}</a></td>
				<td><a href="${ctx}/admin/content/update/${content.id}">${content.title}</a></td>
				<td>${content.contentColumn.title}</td>
				<td><fmt:formatDate value="${content.eventTime}" pattern="yyyy-MM-dd HH:mm" /> </td>
				<td><a href="${ctx}/admin/content/delete/${content.id}">删除</a></td>
			</tr>
		</c:forEach>
		</tbody>
	</table>

	<tags:pagination page="${contents}" paginationSize="5"/>

	<div><a class="btn" href="${ctx}/admin/content/create">创建内容</a></div>
</body>
</html>
