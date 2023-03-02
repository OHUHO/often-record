package com.record.service;

import com.record.dto.SlideshowDTO;
import com.record.entity.Slideshow;
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
public interface SlideshowService extends IService<Slideshow> {


    /**
     * 查询所有的轮播图
     * @return
     */
    List<SlideshowDTO> findAllSlideshow();
}
