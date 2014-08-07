package com.withub.web.portal;

import com.withub.entity.Content;
import com.withub.service.content.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

@Controller
public class PortalController {

    private static final String PAGE_SIZE = "20";

    @Autowired
    private ContentService contentService;

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(Model model) {

        return "index";
    }

    @RequestMapping(value = "/content/list", method = RequestMethod.GET)
    public void listContent(@RequestParam(value = "columnId") Long columnId,
                            @RequestParam(value = "page", defaultValue = "1") int pageNumber,
                            @RequestParam(value = "page.size", defaultValue = PAGE_SIZE) int pageSize,
                            @RequestParam(value = "sortType", defaultValue = "auto") String sortType, ModelMap modelMap) {

        Page<Content> contents = contentService.findByContentColumnId(columnId, pageNumber, pageSize, sortType);

        modelMap.put("items", contents.getContent());
    }

    @RequestMapping(value = "/content/get", method = RequestMethod.GET)
    public void getContent(@RequestParam(value = "id") Long id, ModelMap modelMap) {

        Content content = contentService.getContent(id);
        modelMap.put("data", content);
    }

    @RequestMapping(value = "/content/attachment/{id}")
    public void attachment(@PathVariable("id") Long id, HttpServletResponse response) throws Exception {

        Content content = contentService.getContent(id);

        File file = new File(contentService.getUploadPath() + "/" + content.getAttachmentFileName());
        InputStream inputStream = new FileInputStream(file);

        response.setHeader("Content-Length", file.length() + "");
        response.setHeader("Content-Disposition", "filename=" + new String(content.getAttachmentName().getBytes("GBK"), "ISO-8859-1"));
        if (StringUtils.endsWithIgnoreCase(content.getAttachmentName(), "pdf")) {
            response.setContentType("application/pdf");
        } else {
            response.setContentType("application/octet-stream");
        }
        FileCopyUtils.copy(inputStream, response.getOutputStream());
        inputStream.close();
        response.getOutputStream().flush();
        response.getOutputStream().close();
    }
}
