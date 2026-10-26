package com.eshore.khala.example.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * 手机号格式校验注解
 */
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PhoneValidator.class)
@Documented
public @interface Phone {

    String message() default &quot;手机号格式不正确&quot;;

    Class&lt;?&gt;[] groups() default {};

    Class&lt;? extends Payload&gt;[] payload() default {};
}

/**
 * 身份证号校验注解
 */
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = IdCardValidator.class)
@Documented
public @interface IdCard {

    String message() default &quot;身份证号格式不正确&quot;;

    Class&lt;?&gt;[] groups() default {};

    Class&lt;? extends Payload&gt;[] payload() default {};
}

/**
 * 枚举值校验注解
 */
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EnumValueValidator.class)
@Documented
public @interface EnumValue {

    String message() default &quot;枚举值不合法&quot;;

    Class&lt;?&gt;[] groups() default {};

    Class&lt;? extends Payload&gt;[] payload() default {};

    /**
     * 枚举类
     */
    Class&lt;? extends Enum&lt;?&gt;&gt; enumClass();

    /**
     * 枚举中用于校验的字段名（如 &quot;code&quot;）
     */
    String enumField() default &quot;code&quot;;
}
