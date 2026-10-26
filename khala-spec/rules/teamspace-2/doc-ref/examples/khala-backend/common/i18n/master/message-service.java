package com.example.i18n;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import java.util.Locale;

/**
 * 消息服务示例
 */
@Service
public class MessageServiceExample {

    @Autowired
    private MessageSource messageSource;

    /**
     * 获取国际化消息
     */
    public String getMessage(String code) {
        Locale locale = LocaleContextHolder.getLocale();
        return messageSource.getMessage(code, null, locale);
    }

    /**
     * 获取带参数的国际化消息
     */
    public String getMessageWithArgs(String code, Object... args) {
        Locale locale = LocaleContextHolder.getLocale();
        return messageSource.getMessage(code, args, locale);
    }

    /**
     * 指定语言获取消息
     */
    public String getMessageByLocale(String code, String lang) {
        Locale locale = Locale.forLanguageTag(lang);
        return messageSource.getMessage(code, null, locale);
    }
}
