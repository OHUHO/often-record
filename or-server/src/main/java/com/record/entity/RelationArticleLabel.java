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
@TableName("or_relation_article_label")
@ApiModel(value = "RelationArticleLabel对象", description = "")
public class RelationArticleLabel implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("文章和标签联系id")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("文章id")
    private Long articleId;

    @ApiModelProperty("标签id")
    private Long labelId;

    @ApiModelProperty("标签状态")
    private Integer status;

    @ApiModelProperty("逻辑删除")
    @TableLogic
    private Integer isDelete;

    @ApiModelProperty("创建时间")
    private String createTime;
}
