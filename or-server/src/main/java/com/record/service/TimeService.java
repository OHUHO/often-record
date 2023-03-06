package com.record.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.record.dto.TimeDTO;
import com.record.entity.Time;
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
public interface TimeService extends IService<Time> {


    /**
     * 每次获取记录线的五条数据
     * @param pageIndex
     * @return
     */
    List<TimeDTO> getRecordList(Integer pageIndex);


}
