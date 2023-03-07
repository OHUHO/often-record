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
     * 通过文章卡片id和用户id查找文章信息
     * @param articleId
     * @param userId
     * @return
     */
    ArticleDTO selectArticleByArticleIdAndUserId(Long articleId, Long userId);

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


    /**
     * 获取每日推荐详情页面
     * @return
     */
    List<ArticleDTO> selectArticleRecent();


    /**
     * 获取往期精选详情页面
     * @return
     */
    List<ArticleDTO> selectOldChoiceness();
}
