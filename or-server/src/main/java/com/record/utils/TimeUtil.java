package com.record.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {


    /**
     *
     * @param str yyyy-MM-dd HH:mm:ss
     * @return
     */
    public static  String generateCurrentTime(String str){
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(str);
        return simpleDateFormat.format(date);
    }


}
