package com.eshore.khala.example.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.lang.reflect.Method;
import java.util.regex.Pattern;

/**
 * 手机号校验器实现
 */
public class PhoneValidator implements ConstraintValidator&lt;Phone, String&gt; {

    private static final Pattern PHONE_PATTERN = Pattern.compile(&quot;^1[3-9]\\d{9}$&quot;);

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.isEmpty()) {
            return true; // 空值由 @NotBlank 处理
        }
        return PHONE_PATTERN.matcher(value).matches();
    }
}

/**
 * 身份证号校验器实现（简化版）
 */
public class IdCardValidator implements ConstraintValidator&lt;IdCard, String&gt; {

    private static final Pattern ID_CARD_PATTERN = Pattern.compile(
            &quot;^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$&quot;
    );

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.isEmpty()) {
            return true;
        }
        return ID_CARD_PATTERN.matcher(value).matches();
    }
}

/**
 * 枚举值校验器实现
 */
public class EnumValueValidator implements ConstraintValidator&lt;EnumValue, Object&gt; {

    private Class&lt;? extends Enum&lt;?&gt;&gt; enumClass;
    private String enumField;

    @Override
    public void initialize(EnumValue constraintAnnotation) {
        this.enumClass = constraintAnnotation.enumClass();
        this.enumField = constraintAnnotation.enumField();
    }

    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        try {
            Method method = enumClass.getMethod(&quot;values&quot;);
            Enum&lt;?&gt;[] enums = (Enum&lt;?&gt;[]) method.invoke(null);

            Method fieldMethod = enumClass.getMethod(&quot;get&quot; + capitalize(enumField));

            for (Enum&lt;?&gt; e : enums) {
                Object fieldValue = fieldMethod.invoke(e);
                if (value.toString().equals(fieldValue.toString())) {
                    return true;
                }
            }
        } catch (Exception e) {
            return false;
        }

        return false;
    }

    private String capitalize(String str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}
