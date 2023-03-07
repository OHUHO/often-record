package com.record.controller;

import com.record.dto.ArticleDTO;
import com.record.entity.Article;
import com.record.service.ArticleService;
import com.record.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

@Api(tags = "文章")
@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;


    @ApiOperation(value = "获取每日推荐")
    @GetMapping("/findArticleFour")
    public Result findArticleFour(){
        List<ArticleDTO> list = articleService.selectArticleFour();
        return Result.success(list);
    }


    @ApiOperation(value = "获取往期精选")
    @GetMapping("/findArticleOderByCollect")
    public Result findArticleOderByCollect(){
        List<ArticleDTO> list = articleService.selectArticleOderByCollect();
        return Result.success(list);
    }

    @ApiOperation(value = "通过文章卡片id查找文章")
    @GetMapping("/findArticleByArticleId")
    public Result findArticleByArticleId(@RequestParam Long articleId){
        ArticleDTO article = articleService.selectArticleByArticleId(articleId);
        return Result.success(article);
    }


}
