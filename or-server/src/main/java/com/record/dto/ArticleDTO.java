package com.record.dto;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;

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
@ApiModel(value = "ArticleDTO", description = "")
public class ArticleDTO {

    @ApiModelProperty("文章id")
    private Long articleId;

    @ApiModelProperty("文章标题")
    private String title;

    @ApiModelProperty("文章简介")
    private String introduction;

    @ApiModelProperty("文章封面")
    private String cover;

    @ApiModelProperty("文章作者id")
    private Long authorId;

    @ApiModelProperty("文章作者昵称")
    private String nickname;

    @ApiModelProperty("文章作者头像")
    private String portrait;

    @ApiModelProperty("文章分享链接")
    private String shareUrl;

    @ApiModelProperty("是否收藏")
    private Boolean isLike;

    @ApiModelProperty("创建时间")
    private String createTime;
}
