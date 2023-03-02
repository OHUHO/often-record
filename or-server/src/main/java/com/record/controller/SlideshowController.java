package com.record.controller;

import com.record.dto.SlideshowDTO;
import com.record.entity.Slideshow;
import com.record.service.SlideshowService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
@Api(tags = "轮播图")
@RestController
public class SlideshowController {

    @Autowired
    private SlideshowService slideshowService;



    @ApiOperation(value = "获取轮播图")
    @GetMapping("/findAllSlideshow")
    public Result findAll(){
        List<SlideshowDTO> list = slideshowService.findAllSlideshow();
        return Result.success(list);
    }



}
