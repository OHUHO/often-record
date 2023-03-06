package com.record.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.record.dto.TimeDTO;
import com.record.entity.Time;
import com.record.service.TimeService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

@Api(tags = "记录线")
@RestController
public class TimeController {

    @Autowired
    private TimeService timeService;


    @ApiOperation(value = "每次获取记录线的五条数据")
    @PostMapping("/getRecordList")
    public Result getRecordList(@RequestParam Integer pageIndex){
        List<TimeDTO> list = timeService.getRecordList(pageIndex);
        return Result.success(list);
    }

}
