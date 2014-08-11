/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.withub.service.content;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.withub.entity.Content;
import com.withub.entity.ContentColumn;
import com.withub.entity.User;
import com.withub.repository.ContentColumnDao;
import com.withub.repository.ContentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springside.modules.persistence.DynamicSpecifications;
import org.springside.modules.persistence.SearchFilter;
import org.springside.modules.persistence.SearchFilter.Operator;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

// Spring Bean的标识.
@Component
// 类中所有public函数都纳入事务管理的标识.
@Transactional
public class ContentService {

    private ContentDao contentDao;

    private ContentColumnDao contentColumnDao;

    @Value("${upload.path}")
    private String uploadPath;

    public Content getContent(Long id) {
        return contentDao.findOne(id);
    }


    public ContentColumn getContentColumn(Long id) {
        return contentColumnDao.findOne(id);
    }

    public void saveContent(Content entity, CommonsMultipartFile attachment) {

        entity.setContentColumn(getContentColumn(entity.getContentColumnId()));

        if (attachment != null) {
            String attachmentName = attachment.getFileItem().getName();
            String uuid = UUID.randomUUID().toString();
            String folderName = "/" + new SimpleDateFormat("yyyyMM").format(new Date());
            File folder = new File(uploadPath + folderName);
            if (!folder.exists()) {
                folder.mkdir();
            }
            try {
                attachment.getFileItem().write(new File(folder.getPath() + "/" + uuid));
            } catch (Exception e) {
                e.printStackTrace();
            }
            entity.setAttachmentName(attachmentName);
            entity.setAttachmentFileName(folderName + "/" + uuid);
        }

        contentDao.save(entity);
    }

    public void saveContent(Content entity, File attachment) {

        entity.setContentColumn(getContentColumn(entity.getContentColumnId()));

        if (attachment != null) {
            String uuid = UUID.randomUUID().toString();
            String folderName = "/" + new SimpleDateFormat("yyyyMM").format(new Date());
            File folder = new File(uploadPath + folderName);
            if (!folder.exists()) {
                folder.mkdir();
            }
            try {
                FileCopyUtils.copy(attachment, new File(folder.getPath() + "/" + uuid));
            } catch (Exception e) {
                e.printStackTrace();
            }
            entity.setAttachmentFileName(folderName + "/" + uuid);
        }

        contentDao.save(entity);
    }

    public void deleteContent(Long id) {
        contentDao.delete(id);
    }

    public void importContent(Long id) {

        String json = "";

        JSONArray array = JSON.parseArray(json);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        User user = new User();
        user.setId(1L);
        for(Object o : array) {
            JSONObject object = (JSONObject) o;
            Content content = new Content();
            content.setId(new Long(object.getString("id")));
            content.setTitle(object.getString("title"));
            content.setPublish(1);
            content.setUser(user);
            content.setContentColumnId(102L);
            content.setAttachmentName(object.getString("attachment_name"));
            try {
                content.setEventTime(simpleDateFormat.parse(object.getString("date")));
            } catch (ParseException e) {
                e.printStackTrace();
            }


            saveContent(content, new File("D:/attachment" + object.getString("attachment_path")));
        }
    }

    public List<ContentColumn> getAllContentColumn() {
        return (List<ContentColumn>) contentColumnDao.findAll();
    }

    public Page<Content> getUserContent(Long userId, Map<String, Object> searchParams, int pageNumber, int pageSize,
                                        String sortType) {
        PageRequest pageRequest = buildPageRequest(pageNumber, pageSize, sortType);
        Specification<Content> spec = buildSpecification(userId, searchParams);

        return contentDao.findAll(spec, pageRequest);
    }

    /**
     * 创建分页请求.
     */
    private PageRequest buildPageRequest(int pageNumber, int pagzSize, String sortType) {
        Sort sort = null;
        if ("auto".equals(sortType)) {
            sort = new Sort(Direction.DESC, "id");
        } else if ("title".equals(sortType)) {
            sort = new Sort(Direction.ASC, "title");
        }

        return new PageRequest(pageNumber - 1, pagzSize, sort);
    }

    /**
     * 创建动态查询条件组合.
     */
    private Specification<Content> buildSpecification(Long userId, Map<String, Object> searchParams) {
        Map<String, SearchFilter> filters = SearchFilter.parse(searchParams);
        filters.put("user.id", new SearchFilter("user.id", Operator.EQ, userId));
        Specification<Content> spec = DynamicSpecifications.bySearchFilter(filters.values(), Content.class);
        return spec;
    }

    @Autowired
    public void setContentDao(ContentDao contentDao) {
        this.contentDao = contentDao;
    }

    @Autowired
    public void setContentColumnDao(ContentColumnDao contentColumnDao) {
        this.contentColumnDao = contentColumnDao;
    }

    public Page<Content> findByContentColumnId(Long columnId, int pageNumber, int pageSize, String sortType) {

        PageRequest pageRequest = buildPageRequest(pageNumber, pageSize, sortType);

        return contentDao.findByContentColumnId(columnId, pageRequest);
    }

    public String getUploadPath() {
        return uploadPath;
    }
}
