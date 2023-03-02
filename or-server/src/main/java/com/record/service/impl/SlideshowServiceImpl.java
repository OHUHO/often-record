package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.dto.SlideshowDTO;
import com.record.entity.Slideshow;
import com.record.mapper.SlideshowMapper;
import com.record.service.SlideshowService;
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
public class SlideshowServiceImpl extends ServiceImpl<SlideshowMapper, Slideshow> implements SlideshowService {


    @Autowired
    private SlideshowMapper slideshowMapper;



    @Override
    public List<SlideshowDTO> findAllSlideshow() {
        List<Slideshow> list = slideshowMapper.selectList(
                new LambdaQueryWrapper<Slideshow>()
                        .orderByDesc(Slideshow::getPriority)
                        .last("limit 4")
        );
        List<SlideshowDTO> slideshowDTOS = new ArrayList<>();
        list.forEach(slideshow -> {
            SlideshowDTO slideshowDTO = new SlideshowDTO();
            slideshowDTO.setUrl(slideshow.getUrl());
            if (slideshow.getType() == 1){
                slideshowDTO.setType("image");
            }else {
                slideshowDTO.setType("video");
            }
            slideshowDTOS.add(slideshowDTO);
        });
        return slideshowDTOS;
    }
}
