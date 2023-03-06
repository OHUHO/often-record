package com.record.service.impl;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.record.dto.ArticleDTO;
import com.record.dto.TimeDTO;
import com.record.entity.Time;
import com.record.mapper.TimeMapper;
import com.record.service.ArticleService;
import com.record.service.TimeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
public class TimeServiceImpl extends ServiceImpl<TimeMapper, Time> implements TimeService {


    @Autowired
    private TimeMapper timeMapper;

    @Autowired
    private ArticleService articleService;

    private static final Integer PAGE_SIZE = 4;


    @Override
    public List<TimeDTO> getRecordList(Integer pageIndex) {
        Page<Time> page = timeMapper.selectPage(new Page<>(pageIndex,PAGE_SIZE), new QueryWrapper<>());
        List<Time> times = page.getRecords();
        if (times.size() > 0){
            //  封装数据
            List<TimeDTO> timeDTOS = new ArrayList<>();
            times.forEach(time -> {
                // 通过timeId查询文章list
                List<ArticleDTO> articleDTOS = articleService.selectArticlesByTimeId(time.getTimeId());

                TimeDTO dto = new TimeDTO();
                dto.setTimeId(time.getTimeId())
                        .setTime(time.getTimeName())
                        .setDescribe(time.getDescription())
                        .setArticles(articleDTOS);

                timeDTOS.add(dto);
            });
            return timeDTOS;
        }
        return null;
    }
}
