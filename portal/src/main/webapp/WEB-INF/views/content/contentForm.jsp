<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>内容管理</title>
</head>

<body>
<form id="inputForm" action="${ctx}/admin/content/${action}" method="post" >
    <input type="hidden" name="id" value="${content.id}"/>
    <fieldset>
        <legend>
            <small>内容发布</small>
        </legend>
        <div class="control-group">
            <label for="content_title" class="control-label">标题:</label>

            <div class="controls">
                <input type="text" id="content_title" name="title" value="${content.title}" class="input-block-level required" minlength="3"/>
            </div>
        </div>
        <div class="control-group">
            <label for="content_column" class="control-label">栏目:</label>

            <div class="controls">
                <select id="content_column" name="contentColumnId" class="input-block-level">
                    <c:forEach var="column" items="${contentColumnList}">
                        <option value="${column.id}" <c:if test="${column.id==content.contentColumn.id}">selected</c:if>>${column.title}</option>
                    </c:forEach>
                </select>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">内容:</label>

            <div class="controls">
                <textarea name="content" class="input-large">${content.content}</textarea>
            </div>
        </div>
        <%--<div class="control-group">--%>
            <%--<label class="control-label">发布状态:</label>--%>
            <%--<div class="controls">--%>
                <%--<label class="radio inline">--%>
                    <%--<input type="radio" name="content_publish" value="1"> 已发布--%>
                <%--</label>--%>
                <%--<label class="radio inline">--%>
                    <%--<input type="radio" name="content_publish" value="0" checked> 未发布--%>
                <%--</label>--%>
            <%--</div>--%>
        <%--</div>--%>
        <div class="form-actions">
            <input id="submit_btn" class="btn btn-primary" type="submit" value="提交"/>&nbsp;
            <input id="cancel_btn" class="btn" type="button" value="返回" onclick="history.back()"/>
        </div>
    </fieldset>


</form>
<script>
    $(document).ready(function () {
        //聚焦第一个输入框
        $("#content_title").focus();
        //为inputForm注册validate函数
        $("#inputForm").validate();

        tinymce.init({
            selector: "textarea",
            menubar: false,
            height: 400,
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen textcolor colorpicker",
                "insertdatetime media table contextmenu paste moxiemanager"
            ],
            toolbar: "insertfile undo redo | fontselect fontsizeselect forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | link image"
        });
    });
</script>
</body>
</html>
