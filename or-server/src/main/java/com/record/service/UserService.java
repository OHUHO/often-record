package com.record.service;

import com.record.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;
import com.record.utils.Result;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
public interface UserService extends IService<User> {


    /**
     * 微信授权登录
     * @param code
     * @param nickname
     * @param portrait
     * @return
     */
    Result login(String code, String nickname, String portrait);


    /**
     * 通过用户id查询用户信息
     * @param authorId
     * @return
     */
    User selectUserByUserId(Long authorId);


}
