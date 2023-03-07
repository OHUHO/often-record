package com.record.service;

import com.record.entity.Collect;
import com.baomidou.mybatisplus.extension.service.IService;

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
     * @param authorId
     * @return
     */
    Collect selectCollectByArticleIdAndUserId(Long articleId, Long authorId);
}
