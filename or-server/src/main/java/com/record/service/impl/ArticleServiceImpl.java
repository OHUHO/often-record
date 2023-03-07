package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.dto.ArticleDTO;
import com.record.entity.Article;
import com.record.entity.Collect;
import com.record.entity.User;
import com.record.mapper.ArticleMapper;
import com.record.service.ArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.record.service.CollectService;
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

    @Autowired
    private CollectService collectService;


    @Override
    public List<ArticleDTO> selectArticleFour() {
        List<Article> articles = articleMapper.selectList(
                new LambdaQueryWrapper<Article>()
                        .orderByDesc(Article::getSort)
                        .last("limit 4")
        );
        return tranArticle(articles);
    }

    @Override
    public List<ArticleDTO> selectArticleOderByCollect() {
        List<Article> articles = articleMapper.selectList(
                new LambdaQueryWrapper<Article>()
                        .orderByDesc(Article::getCollectNumber)
                        .last("limit 4")
        );
        return tranArticle(articles);
    }

    @Override
    public List<ArticleDTO> selectArticlesByTimeId(Long timeId) {
        List<Article> articles = articleMapper.selectList(
                new LambdaQueryWrapper<Article>()
                        .eq(Article::getTimeId, timeId)
        );
        return tranArticle(articles);
    }

    @Override
    public ArticleDTO selectArticleByArticleIdAndUserId(Long articleId, Long userId) {
        Article article = articleMapper.selectById(articleId);
        if (article != null){
            // 通过用户id查询用户信息
            User user = userService.selectUserByUserId(article.getAuthorId());
            // 通过用户id和文章id查询用户是否喜欢该文章
            Collect collect = null;
            if (userId != 0){
                collect = collectService.selectCollectByArticleIdAndUserId(articleId,userId);
            }

            ArticleDTO dto = new ArticleDTO();
            dto.setArticleId(article.getArticleId())
                    .setTitle(article.getTitle())
                    .setCover(article.getCover())
                    .setIntroduction(article.getIntroduction())
                    .setAuthorId(user.getUserId())
                    .setNickname(user.getNickname())
                    .setPortrait(user.getPortrait())
                    .setShareUrl(article.getShareUrl())
                    .setIsLike(collect != null)
                    .setCreateTime(article.getCreateTime());

            return dto;
        }
        return null;
    }

    @Override
    public void articleCollectPlusOne(Long articleId) {
        Article article = articleMapper.selectById(articleId);
        article.setCollectNumber(article.getCollectNumber() + 1);
        articleMapper.updateById(article);
    }

    @Override
    public void articleCollectMinusOne(Long articleId) {
        Article article = articleMapper.selectById(articleId);
        article.setCollectNumber(article.getCollectNumber() - 1);
        articleMapper.updateById(article);
    }


    /**
     * <p>
     *     将 List<Article> 转换为 List<ArticleDTO>
     * </p>
     * @param articles
     * @return
     */
    private List<ArticleDTO> tranArticle(List<Article> articles){
        List<ArticleDTO> articleDTOS = new ArrayList<>();
        if (articles.size() > 0){
            articles.forEach(article -> {
                ArticleDTO articleDTO = new ArticleDTO();
                // 通过用户id查询用户头像
                User user = userService.selectUserByUserId(article.getAuthorId());
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
