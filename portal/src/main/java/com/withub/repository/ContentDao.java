/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.withub.repository;

import com.withub.entity.Content;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ContentDao extends PagingAndSortingRepository<Content, Long>, JpaSpecificationExecutor<Content> {

	Page<Content> findByUserId(Long id, Pageable pageRequest);

	@Modifying
	@Query("delete from Content content where content.user.id=?1")
	void deleteByUserId(Long id);
}
