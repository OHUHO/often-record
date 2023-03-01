package com.record.utils;

import com.record.entity.WXSessionModel;

import java.util.HashMap;
import java.util.Map;

public class WxUtil {

    /**
     * @param code
     * @return
     * @Description: 生成 openid
     */
    public static String generateOpenid(String code) {
        /*
         * https://api.weixin.qq.com/sns/jscode2session
         * appid=APPID
         * secret=SECRET
         * js_code=JSCODE
         * grant_type=authorization_code
         */

        String url = "https://api.weixin.qq.com/sns/jscode2session";
        Map<String, String> param = new HashMap<>();
        param.put("appid", "wxd04eacde3121e458");
        param.put("secret", "eedd25c7306c380a3acc83187b317583");
        param.put("js_code", code);
        param.put("grant_type", "authorization_code");

        // 获取openid
        String wxResult = HttpClientUtil.doGet(url, param);
        // System.out.println(wxResult);

        WXSessionModel wxSessionModel = JsonUtils.jsonToPojo(wxResult, WXSessionModel.class);
        if (wxSessionModel != null){
            // 存入session到redis
            // redis.set("USER-REDIS-SESSION:" + wxSessionModel.getOpenid(), wxSessionModel.getSession_key(), 1000 * 60 * 30);

            return wxSessionModel.getOpenid();
        }
        return null;
    }
}
