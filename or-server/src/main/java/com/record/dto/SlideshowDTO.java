package com.record.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.experimental.Accessors;


@Data
@Accessors(chain = true)
@ApiModel(value = "SlideshowDTO")
public class SlideshowDTO {


    @ApiModelProperty("地址")
    private String url;

    @ApiModelProperty("类型 image video")
    private String type;
}
