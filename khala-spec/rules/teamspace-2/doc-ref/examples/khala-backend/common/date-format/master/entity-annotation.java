package com.example.dateformat;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * 实体字段日期格式化示例
 */
@Data
public class DateFormatEntity {

    /** LocalDateTime 格式化 */
    @DateTimeFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;, timezone = &quot;GMT+8&quot;)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createTime;
    /** Date 类型格式化 */
    @DateTimeFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot; , timezone = &quot;GMT+8&quot;)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private Date updateTime;
}
