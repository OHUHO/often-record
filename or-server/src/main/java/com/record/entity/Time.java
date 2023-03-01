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
@TableName("or_time")
@ApiModel(value = "Time对象", description = "")
public class Time implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "time_id", type = IdType.AUTO)
    private Long timeId;

    @ApiModelProperty("流程名称")
    private String timeName;

    @ApiModelProperty("流程描述")
    private String description;

    @ApiModelProperty("创建者id")
    private Long creatorId;

    @ApiModelProperty("创建时间")
    private String createTime;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("逻辑删除")
    @TableLogic
    private Integer isDelete;
}
