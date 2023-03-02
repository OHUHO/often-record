package com.record.service;

import com.record.dto.ArticleDTO;
import com.record.entity.Article;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
public interface ArticleService extends IService<Article> {


    /**
     * 获取每日推荐
     * @return
     */
    List<ArticleDTO> findArticleFour();


    /**
     * 获取往期精选
     * @return
     */
    List<ArticleDTO> findArticleOderByCollect();
}
