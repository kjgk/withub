package com.withub.web.portal;

import com.withub.entity.Content;
import com.withub.service.content.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PortalController {

    @Autowired
    private ContentService contentService;

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(Model model) {

        return "index";
    }

    @RequestMapping(value = "/content/list", method = RequestMethod.GET)
    public void listContent(@RequestParam(value = "columnId") Long columnId,
                     @RequestParam(value = "page", defaultValue = "1") int pageNumber,
                     @RequestParam(value = "page.size", defaultValue = "10") int pageSize,
                     @RequestParam(value = "sortType", defaultValue = "auto") String sortType, ModelMap modelMap) {

        Page<Content> contents = contentService.findByContentColumnId(columnId, pageNumber, pageSize, sortType);

        modelMap.put("items", contents.getContent());
    }
}
