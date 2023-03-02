package com.record.controller;

import com.record.entity.User;
import com.record.service.UserService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
@Api(tags = "用户")
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @ApiOperation(value = "微信授权登录")
    @PostMapping("/login")
    public Result login(@RequestParam("code") String code,
                        @RequestParam("nickname") String nickname,
                        @RequestParam("portrait") String portrait){

        return userService.login(code,nickname,portrait);

    }

}
