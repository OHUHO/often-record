package com.record.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author 京茶吉鹿
 * @since 2023-03-01 22:40:37
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("or_user")
@ApiModel(value = "User对象", description = "")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("用户id")
    @TableId(value = "user_id", type = IdType.AUTO)
    private Long userId;

    @ApiModelProperty("微信openid")
    private String openId;

    @ApiModelProperty("用户名")
    private String nickname;

    @ApiModelProperty("头像")
    private String portrait;

    @ApiModelProperty("城市")
    private String city;

    @ApiModelProperty("性别（0，女；1，男；2，未知）")
    private String gender;

    @ApiModelProperty("手机号")
    private String phoneNumber;

    @ApiModelProperty("用户等级")
    private Integer level;

    @ApiModelProperty("角色id")
    private Integer roleId;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("用户注册时间")
    private String createTime;

    @ApiModelProperty("逻辑删除")
    @TableLogic
    private Integer isDelete;
}
