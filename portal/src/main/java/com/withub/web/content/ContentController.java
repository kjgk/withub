/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.withub.web.content;

import com.google.common.collect.Maps;
import com.withub.entity.Content;
import com.withub.entity.User;
import com.withub.service.account.ShiroDbRealm.ShiroUser;
import com.withub.service.content.ContentService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springside.modules.web.Servlets;

import javax.servlet.ServletRequest;
import javax.validation.Valid;
import java.util.Date;
import java.util.Map;

/**
 * Content管理的Controller, 使用Restful风格的Urls:
 *
 * List page : GET /content/
 * Create page : GET /content/create
 * Create action : POST /content/create
 * Update page : GET /content/update/{id}
 * Update action : POST /content/update
 * Delete action : GET /content/delete/{id}
 *
 * @author calvin
 */
@Controller
@RequestMapping(value = "/admin/content")
public class ContentController {

    private static final String PAGE_SIZE = "10";

    private static Map<String, String> sortTypes = Maps.newLinkedHashMap();

    static {
        sortTypes.put("auto", "自动");
        sortTypes.put("title", "标题");
    }

    @Autowired
    private ContentService contentService;

    @RequestMapping(method = RequestMethod.GET)
    public String list(@RequestParam(value = "page", defaultValue = "1") int pageNumber,
                       @RequestParam(value = "page.size", defaultValue = PAGE_SIZE) int pageSize,
                       @RequestParam(value = "sortType", defaultValue = "auto") String sortType, Model model,
                       ServletRequest request) {
        Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
        Long userId = getCurrentUserId();

        Page<Content> contents = contentService.getUserContent(userId, searchParams, pageNumber, pageSize, sortType);

        model.addAttribute("contents", contents);
        model.addAttribute("sortType", sortType);
        model.addAttribute("sortTypes", sortTypes);
        // 将搜索条件编码成字符串，用于排序，分页的URL
        model.addAttribute("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));

        return "content/contentList";
    }

    @RequestMapping(value = "create", method = RequestMethod.GET)
    public String createForm(Model model) {
        model.addAttribute("content", new Content());
        model.addAttribute("action", "create");
        model.addAttribute("contentColumnList", contentService.getAllContentColumn());

        return "content/contentForm";
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    public String create(@Valid Content newContent, RedirectAttributes redirectAttributes) {
        User user = new User(getCurrentUserId());
        newContent.setUser(user);
        newContent.setPublish(1);
        newContent.setEventTime(new Date());

        contentService.saveContent(newContent);
        redirectAttributes.addFlashAttribute("message", "创建成功");
        return "redirect:/admin/content";
    }

    @RequestMapping(value = "update/{id}", method = RequestMethod.GET)
    public String updateForm(@PathVariable("id") Long id, Model model) {
        model.addAttribute("content", contentService.getContent(id));
        model.addAttribute("action", "update");
        model.addAttribute("contentColumnList", contentService.getAllContentColumn());
        return "content/contentForm";
    }

    @RequestMapping(value = "update", method = RequestMethod.POST)
    public String update(@Valid @ModelAttribute("content") Content content, RedirectAttributes redirectAttributes) {
        contentService.saveContent(content);
        redirectAttributes.addFlashAttribute("message", "更新成功");
        return "redirect:/admin/content";
    }

    @RequestMapping(value = "delete/{id}")
    public String delete(@PathVariable("id") Long id, RedirectAttributes redirectAttributes) {
        contentService.deleteContent(id);
        redirectAttributes.addFlashAttribute("message", "删除成功");
        return "redirect:/admin/content";
    }

    /**
     * 所有RequestMapping方法调用前的Model准备方法, 实现Struts2 Preparable二次部分绑定的效果,先根据form的id从数据库查出Content对象,再把Form提交的内容绑定到该对象上。
     * 因为仅update()方法的form中有id属性，因此仅在update时实际执行.
     */
    @ModelAttribute
    public void getContent(@RequestParam(value = "id", defaultValue = "-1") Long id, Model model) {
        if (id != -1) {
            model.addAttribute("content", contentService.getContent(id));
        }
    }

    /**
     * 取出Shiro中的当前用户Id.
     */
    private Long getCurrentUserId() {
        ShiroUser user = (ShiroUser) SecurityUtils.getSubject().getPrincipal();
        return user.id;
    }
}
