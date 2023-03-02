package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.dto.ArticleDTO;
import com.record.entity.Article;
import com.record.entity.User;
import com.record.mapper.ArticleMapper;
import com.record.service.ArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.record.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private UserService userService;


    @Override
    public List<ArticleDTO> findArticleFour() {
        List<Article> articles = articleMapper.selectList(
                new LambdaQueryWrapper<Article>()
                        .orderByDesc(Article::getSort)
                        .last("limit 4")
        );
        return tranArticle(articles);
    }

    @Override
    public List<ArticleDTO> findArticleOderByCollect() {
        List<Article> articles = articleMapper.selectList(
                new LambdaQueryWrapper<Article>()
                        .orderByDesc(Article::getCollectNumber)
        );
        return tranArticle(articles);
    }

    
    private List<ArticleDTO> tranArticle(List<Article> articles){
        List<ArticleDTO> articleDTOS = new ArrayList<>();
        if (articles.size() > 0){
            articles.forEach(article -> {
                ArticleDTO articleDTO = new ArticleDTO();
                // 通过用户id查询用户头像
                User user = userService.findUserByUserId(article.getAuthorId());
                articleDTO.setArticleId(article.getArticleId())
                        .setTitle(article.getTitle())
                        .setIntroduction(article.getIntroduction())
                        .setCover(article.getCover())
                        .setAuthorId(article.getAuthorId())
                        .setNickname(user.getNickname())
                        .setPortrait(user.getPortrait())
                        .setCreateTime(article.getCreateTime());
                articleDTOS.add(articleDTO);
            });
        }
        return articleDTOS;
    }

}
