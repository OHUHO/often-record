package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.dto.ArticleDTO;
import com.record.entity.Collect;
import com.record.mapper.CollectMapper;
import com.record.service.ArticleService;
import com.record.service.CollectService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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

    @Autowired
    private ArticleService articleService;


    @Override
    public Collect selectCollectByArticleIdAndUserId(Long articleId, Long userId) {
        return collectMapper.selectOne(
                new LambdaQueryWrapper<Collect>()
                        .eq(Collect::getArticleId,articleId)
                        .eq(Collect::getUserId,userId)
        );
    }

    @Override
    public void collect(Long userId, Long articleId, Boolean isLike) {
        if (isLike){
            // 保存数据到数据库
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = format.format(new Date());

            Collect collect = new Collect();
            collect.setArticleId(articleId)
                    .setUserId(userId)
                    .setCreateTime(date);
            collectMapper.insert(collect);

            // 文章收藏加一
            articleService.articleCollectPlusOne(articleId);

        }else {
            // 删除数据
            collectMapper.delete(
                    new LambdaQueryWrapper<Collect>()
                            .eq(Collect::getUserId,userId)
                            .eq(Collect::getArticleId,articleId)
            );

            // 文章收藏减一
            articleService.articleCollectMinusOne(articleId);
        }
    }

    @Override
    public List<ArticleDTO> selectCollectByUserId(Long userId) {

        List<Collect> collects = collectMapper.selectList(
                new LambdaQueryWrapper<Collect>()
                        .eq(Collect::getUserId, userId)
        );
        if (collects.size() > 0){
            List<Long> articleIds = collects.stream().map(Collect::getArticleId).collect(Collectors.toList());

            // 通过用户id批量查询文章
            return articleService.selectArticlesByArticleIds(articleIds);
        }
        return null;
    }
}
