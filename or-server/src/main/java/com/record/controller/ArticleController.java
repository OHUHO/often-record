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


    @ApiOperation(value = "获取每日推荐(主页)")
    @GetMapping("/findArticleFour")
    public Result findArticleFour(){
        List<ArticleDTO> list = articleService.selectArticleFour();
        return Result.success(list);
    }


    @ApiOperation(value = "获取往期精选(主页)")
    @GetMapping("/findArticleOderByCollect")
    public Result findArticleOderByCollect(){
        List<ArticleDTO> list = articleService.selectArticleOderByCollect();
        return Result.success(list);
    }

    @ApiOperation(value = "通过文章id和用户id查找文章")
    @GetMapping("/findArticleByArticleIdAndUserId")
    public Result findArticleByArticleIdAndUserId(@RequestParam Long articleId, @RequestParam Long userId){
        ArticleDTO article = articleService.selectArticleByArticleIdAndUserId(articleId,userId);
        return Result.success(article);
    }

    @ApiOperation(value = "获取每日推荐(详细页)")
    @GetMapping("/findDailyRecommend")
    public Result findDailyRecommend(){
        List<ArticleDTO> list = articleService.selectArticleRecent();
        return Result.success(list);
    }


    @ApiOperation(value = "获取往期精选(详情页)")
    @GetMapping("/findOldChoiceness")
    public Result findOldChoiceness(){
        List<ArticleDTO> list = articleService.selectOldChoiceness();
        return Result.success(list);
    }
}
