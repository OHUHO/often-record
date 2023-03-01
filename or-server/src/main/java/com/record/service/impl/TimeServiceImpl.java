package com.record.service.impl;

import com.record.entity.Time;
import com.record.mapper.TimeMapper;
import com.record.service.TimeService;
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
public class TimeServiceImpl extends ServiceImpl<TimeMapper, Time> implements TimeService {

}
