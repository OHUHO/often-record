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
@TableName("or_article")
@ApiModel(value = "Article对象", description = "")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("文章id")
    @TableId(value = "article_id", type = IdType.AUTO)
    private Long articleId;

    @ApiModelProperty("文章标题")
    private String title;

    @ApiModelProperty("文章简介")
    private String introduction;

    @ApiModelProperty("文章内容")
    private String content;

    @ApiModelProperty("文章内容（HTML）")
    private String contentHtml;

    @ApiModelProperty("文章封面")
    private String cover;

    @ApiModelProperty("文章链接")
    private String shareUrl;

    @ApiModelProperty("文章作者id")
    private Integer authorId;

    @ApiModelProperty("时间线id")
    private Integer timeId;

    @ApiModelProperty("分享次数")
    private Long shareNumber;

    @ApiModelProperty("收藏次数")
    private Long collectNumber;

    @ApiModelProperty("浏览数量")
    private Long viewNumber;

    @ApiModelProperty("文章排序（数字越大，优先级越高）")
    private Integer sort;

    @ApiModelProperty("文章状态")
    private Integer status;

    @ApiModelProperty("逻辑删除")
    @TableLogic
    private Integer isDelete;

    @ApiModelProperty("创建时间")
    private String createTime;
}
