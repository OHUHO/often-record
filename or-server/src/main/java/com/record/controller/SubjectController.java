package com.record.controller;

import com.record.entity.Subject;
import com.record.service.SubjectService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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

@Api(tags = "百宝箱")
@RestController
public class SubjectController {

    @Autowired
    private SubjectService subjectService;


    @ApiOperation(value = "获取所有专题")
    @GetMapping("/getSubjects")
    public Result findSubjects(){
        List<Subject> subjects = subjectService.selectSubjects();
        return Result.success(subjects);
    }

}
