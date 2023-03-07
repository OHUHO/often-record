package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.entity.Collect;
import com.record.mapper.CollectMapper;
import com.record.service.CollectService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
@Service
public class CollectServiceImpl extends ServiceImpl<CollectMapper, Collect> implements CollectService {

    @Autowired
    private CollectMapper collectMapper;



    @Override
    public Collect selectCollectByArticleIdAndUserId(Long articleId, Long authorId) {
        return collectMapper.selectOne(
                new LambdaQueryWrapper<Collect>()
                        .eq(Collect::getArticleId,articleId)
                        .eq(Collect::getUserId,authorId)
        );
    }
}
