package com.record.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(name = "WXSessionModel")
public class WXSessionModel {
    private String session_key;
    private String openid;
}