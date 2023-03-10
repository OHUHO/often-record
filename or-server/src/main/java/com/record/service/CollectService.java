package com.record.service;

import com.record.dto.ArticleDTO;
import com.record.entity.Collect;
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
public interface CollectService extends IService<Collect> {


    /**
     * 通过文章id和用户id查询用户的收藏信息
     * @param articleId
     * @param userId
     * @return
     */
    Collect selectCollectByArticleIdAndUserId(Long articleId, Long userId);

    /**
     * 文章点赞/取消点赞操作
     * @param userId
     * @param articleId
     * @param isLike
     */
    void collect(Long userId, Long articleId, Boolean isLike);


    /**
     * 通过用户id查询用户的收藏
     * @param userId
     * @return
     */
    List<ArticleDTO> selectCollectByUserId(Long userId);
}
