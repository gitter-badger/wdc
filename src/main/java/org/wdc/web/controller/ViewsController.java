package org.wdc.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import java.io.InputStream;
import java.util.Scanner;

@Controller
@RequestMapping("/")
public class ViewsController {
    @Autowired
    private ServletContext servletContext;

    @RequestMapping(method = RequestMethod.GET, produces = "text/html")
    public ResponseEntity home() {

        InputStream in = servletContext.getResourceAsStream("/WEB-INF/views/index.html");
        InputStreamResource inputStreamResource = new InputStreamResource(in);
        return new ResponseEntity(inputStreamResource, HttpStatus.OK);
    }
}