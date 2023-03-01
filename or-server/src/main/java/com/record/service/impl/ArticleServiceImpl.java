package com.record.service.impl;

import com.record.entity.Article;
import com.record.mapper.ArticleMapper;
import com.record.service.ArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements ArticleService {

}
