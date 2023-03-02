package com.record.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.record.entity.User;
import com.record.mapper.UserMapper;
import com.record.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.record.utils.Result;
import com.record.utils.WxUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {


    @Autowired
    private UserMapper userMapper;

    @Override
    public Result login(String code, String nickname, String portrait) {
        // 获取openid
        String openid = WxUtil.generateOpenid(code);

        if (StringUtils.isNoneBlank(openid)){
            User user = userMapper.selectOne(
                    new LambdaQueryWrapper<User>()
                            .eq(User::getOpenId, openid)
            );
            if (user == null){
                User newUser = new User();
                newUser.setOpenId(openid)
                        .setNickname(nickname)
                        .setPortrait(portrait);
                userMapper.insert(newUser);
                return Result.success(newUser);
            }
            return Result.success(user);
        }
        return Result.fail("参数不能为空！");
    }

    @Override
    public User findUserByUserId(Integer authorId) {
        return userMapper.selectById(authorId);
    }


}
