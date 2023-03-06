package com.record.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@ApiModel(value = "TimeDTO对象")
public class TimeDTO {

    @ApiModelProperty("id")
    private Long timeId;

    @ApiModelProperty("时间")
    private String time;

    @ApiModelProperty("描述")
    private String describe;

    @ApiModelProperty("文章列表")
    private List<ArticleDTO> articles;
}
