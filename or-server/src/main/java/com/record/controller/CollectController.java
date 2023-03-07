package com.record.controller;

import com.record.service.CollectService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
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

@Api(tags = "文章收藏")
@RestController
public class CollectController {

    @Autowired
    private CollectService collectService;


    @ApiOperation(value = "文章点赞/取消点赞")
    @PutMapping("/collect")
    public Result collect(@RequestParam Long userId,
                          @RequestParam Long articleId,
                          @RequestParam Boolean isLike){

        collectService.collect(userId,articleId,isLike);
        return Result.success();
    }


}
