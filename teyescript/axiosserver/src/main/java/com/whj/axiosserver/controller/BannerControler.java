package com.whj.axiosserver.controller;

import com.whj.axiosserver.pojo.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/v1/banner")
@Validated
public class BannerControler {
    @RequestMapping(value = "/all",method = {RequestMethod.GET,RequestMethod.POST})
    public Map test1(
        @RequestParam
        String name,
        @RequestParam
        List<String> hobbies,
        @RequestBody
        String user

    ) {
        Map<String,Object> map = new HashMap<>();
        map.put("name",name);
        map.put("hobbies",hobbies);
        map.put("user",user);
        System.out.println(map);
        return map;
    }

    /**
     * 测试表单提交
     * 不要写@RequestBody
     *  前端data传：let form = new URLSearchParams("name='王泓钧'&age=12&sex='男'");
     */
    @RequestMapping(value = "/form",method = {RequestMethod.POST})
    public User test02(
        User user
    ){
        return user;
    }
}
