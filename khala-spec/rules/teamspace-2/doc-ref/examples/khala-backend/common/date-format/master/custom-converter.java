package com.example.dateformat;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 自定义日期转换器示例
 */
@Component
public class StringToLocalDateTimeConverter implements Converter&lt;String, LocalDateTime&gt; {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);

    @Override
    public LocalDateTime convert(String source) {
        if (source == null || source.isEmpty()) {
            return null;
        }
        return LocalDateTime.parse(source, FORMATTER);
    }
}
