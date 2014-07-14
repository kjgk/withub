/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.withub.entity;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.util.Date;

//JPA标识
@Entity
@Table(name = "ss_content")
public class Content extends IdEntity {

	private String title;
	private String content;
    private ContentColumn contentColumn;
    private Long contentColumnId;
    private User user;
    private Integer publish;
    private Date eventTime;

	// JSR303 BeanValidator的校验规则
	@NotBlank
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    // JPA 基于CONTENT_COLUMN_ID列的多对一关系定义
    @OneToOne()
    @JoinColumn(name = "content_column_id", insertable = false, updatable = false)
    public ContentColumn getContentColumn() {
        return contentColumn;
    }

    public void setContentColumn(ContentColumn contentColumn) {
        this.contentColumn = contentColumn;
    }

    @Column(name = "content_column_id")
    public Long getContentColumnId() {
        return contentColumnId;
    }

    public void setContentColumnId(Long contentColumnId) {
        this.contentColumnId = contentColumnId;
    }

    public Integer getPublish() {
        return publish;
    }

    public void setPublish(Integer publish) {
        this.publish = publish;
    }

    // JPA 基于USER_ID列的多对一关系定义
	@ManyToOne
	@JoinColumn(name = "user_id")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

    public Date getEventTime() {
        return eventTime;
    }

    public void setEventTime(Date eventTime) {
        this.eventTime = eventTime;
    }
}
