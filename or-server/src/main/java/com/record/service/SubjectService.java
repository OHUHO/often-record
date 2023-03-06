package com.record.service;

import com.record.entity.Subject;
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
public interface SubjectService extends IService<Subject> {


    /**
     * 获取所有的专题
     * @return
     */
    List<Subject> selectSubjects();
}
