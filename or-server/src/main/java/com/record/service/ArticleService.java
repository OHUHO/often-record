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
    List<ArticleDTO> selectArticleFour();


    /**
     * 获取往期精选
     * @return
     */
    List<ArticleDTO> selectArticleOderByCollect();


    /**
     * 通过timeId查询文章list
     * @param timeId
     * @return
     */
    List<ArticleDTO> selectArticlesByTimeId(Long timeId);


    /**
     * 通过文章卡片id查找文章信息
     * @param articleId
     * @return
     */
    ArticleDTO selectArticleByArticleId(Long articleId);

    /**
     * 文章收藏加一
     * @param articleId
     */
    void articleCollectPlusOne(Long articleId);


    /**
     * 文章收藏减一
     * @param articleId
     */
    void articleCollectMinusOne(Long articleId);
}
