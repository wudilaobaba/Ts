package com.whj.axiosserver.controller;

import com.whj.axiosserver.pojo.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.websocket.server.PathParam;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/v1/banner")
@Validated
public class BannerControler {
    @RequestMapping(value = "/all",method = {RequestMethod.GET,RequestMethod.POST})
    public String test1(
        @RequestParam
        String calendar
    ) {
        System.out.println();
        return "132465";
    }
}
