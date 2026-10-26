package com.example.dateformat;

import cn.hutool.core.date.DateUtil;

import java.util.Date;

/**
 * 日期工具类使用示例
 */
public class DateUtilsExample {

    public void examples() {
        // 获取当前日期时间字符串
        String now = DateUtil.now();

        // 格式化日期
        String format = DateUtil.format(new Date(), &quot;yyyy-MM-dd&quot;);

        // 解析日期字符串
        Date date = DateUtil.parse(&quot;2024-01-01 12:00:00&quot;);

        // 日期偏移
        Date newDate = DateUtil.offsetDay(date, 1);

        // 获取年龄
        int age = DateUtil.ageOfNow(&quot;1990-05-20&quot;);

        // 获取星座
        String zodiac = DateUtil.getZodiac(5, 20);

        // 获取属相
        String chineseZodiac = DateUtil.getChineseZodiac(1990);
    }
}
