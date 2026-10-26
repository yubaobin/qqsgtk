import { AllowedComponentProps } from 'vue';
import { Arrayable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentSize } from 'ux-up/es/constants';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import { PropType } from 'vue';
import { Reactive } from '@vue/reactivity';
import { Ref } from 'vue';
import type { RuleItem } from 'async-validator';
import type { SetupContext } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { UnwrapRef } from 'vue';
import type { ValidateError } from 'async-validator';
import type { ValidateFieldsError } from 'async-validator';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly model: ObjectConstructor;
readonly rules: {
readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly labelPosition: EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
readonly requireAsteriskPosition: EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly labelSuffix: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly inline: BooleanConstructor;
readonly inlineMessage: BooleanConstructor;
readonly statusIcon: BooleanConstructor;
readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly validateOnRuleChange: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly hideRequiredAsterisk: BooleanConstructor;
readonly scrollToError: BooleanConstructor;
readonly scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}, {
/**
* @description Validate the whole form. Receives a callback or returns `Promise`.
*/
validate: (callback?: FormValidateCallback) => FormValidationResult;
/**
* @description Validate specified fields.
*/
validateField: (props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult;
/**
* @description Reset specified fields and remove validation result.
*/
resetFields: (props?: Arrayable<FormItemProp>) => void;
/**
* @description Clear validation message for specified fields.
*/
clearValidate: (props?: Arrayable<FormItemProp>) => void;
/**
* @description Scroll to the specified fields.
*/
scrollToField: (prop: FormItemProp) => void;
/**
* @description Get a field context.
*/
getField: (prop: FormItemProp) => FormItemContext | undefined;
/**
* @description All fields context.
*/
fields: Reactive<FormItemContext[]>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
validate: (prop: FormItemProp, isValid: boolean, message: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly model: ObjectConstructor;
readonly rules: {
readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly labelPosition: EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
readonly requireAsteriskPosition: EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly labelSuffix: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly inline: BooleanConstructor;
readonly inlineMessage: BooleanConstructor;
readonly statusIcon: BooleanConstructor;
readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly validateOnRuleChange: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly hideRequiredAsterisk: BooleanConstructor;
readonly scrollToError: BooleanConstructor;
readonly scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}>> & {
onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
}, {
readonly disabled: boolean;
readonly inline: boolean;
readonly labelWidth: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly labelPosition: EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
readonly inlineMessage: boolean;
readonly showMessage: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly requireAsteriskPosition: EpPropMergeType<StringConstructor, "left" | "right", unknown>;
readonly labelSuffix: string;
readonly validateOnRuleChange: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly scrollIntoViewOptions: EpPropMergeType<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown>;
readonly statusIcon: boolean;
readonly hideRequiredAsterisk: boolean;
readonly scrollToError: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly label: StringConstructor;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly labelPosition: EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
readonly prop: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => FormItemProp))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly required: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly rules: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly error: StringConstructor;
readonly validateStatus: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly for: StringConstructor;
readonly inlineMessage: EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/**
* @description Form item size.
*/
size: ComputedRef<"" | "small" | "default" | "large" | "mini">;
/**
* @description Validation message.
*/
validateMessage: Ref<string, string>;
/**
* @description Validation state.
*/
validateState: Ref<"" | "error" | "success" | "validating", "" | "error" | "success" | "validating">;
/**
* @description Validate form item.
*/
validate: (trigger: string, callback?: FormValidateCallback) => FormValidationResult;
/**
* @description Remove validation status of the field.
*/
clearValidate: () => void;
/**
* @description Reset current field and remove validation result.
*/
resetField: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly label: StringConstructor;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly labelPosition: EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
readonly prop: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => FormItemProp))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly required: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly rules: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly error: StringConstructor;
readonly validateStatus: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly for: StringConstructor;
readonly inlineMessage: EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly required: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly labelWidth: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly labelPosition: EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
readonly inlineMessage: EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
readonly showMessage: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    label?(_: {
        label: string;
    }): any;
    default?(_: {}): any;
    error?(_: {
        error: string;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

/**
 * Array index key
 *
 * 数组下标键
 */
declare type ArrayKey = number;

/**
 * Array method key
 *
 * 数组方法键
 */
declare type ArrayMethodKey = keyof any[];

declare type BrowserNativeObject = Date | FileList | File | Blob | RegExp;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

/**
 * Type which collects all paths through a type
 *
 * 通过一个类型收集所有路径的类型
 *
 * @example
 * FieldPath<{ 1: number; a: number; b: string; c: { d: number; e: string }; f: [{ value: string }]; g: { value: string }[]; h: Date; i: FileList; j: File; k: Blob; l: RegExp }> => '1' | 'a' | 'b' | 'c' | 'f' | 'g' | 'c.d' | 'c.e' | 'f.0' | 'f.0.value' | 'g.number' | 'g.number.value' | 'h' | 'i' | 'j' | 'k' | 'l'
 */
declare type FieldPath<T> = T extends object ? Path<T> : never;

export declare type FormContext = FormProps & UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit'];
    getField: (prop: FormItemProp) => FormItemContext | undefined;
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    clearValidate: (props?: Arrayable<FormItemProp>) => void;
    validateField: (props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult;
};

export declare const formContextKey: InjectionKey<FormContext>;

export declare type FormEmits = typeof formEmits;

export declare const formEmits: {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => boolean;
};

export declare type FormInstance = InstanceType<typeof _default> & unknown;

export declare interface FormItemContext extends FormItemProps {
    $el: HTMLDivElement | undefined;
    size: ComponentSize;
    validateMessage: string;
    validateState: FormItemValidateState;
    isGroup: boolean;
    labelId: string;
    inputIds: string[];
    hasLabel: boolean;
    fieldValue: any;
    propString: string;
    addInputId: (id: string) => void;
    removeInputId: (id: string) => void;
    validate: (trigger: string, callback?: FormValidateCallback) => FormValidationResult;
    resetField(): void;
    clearValidate(): void;
}

export declare const formItemContextKey: InjectionKey<FormItemContext>;

export declare type FormItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type FormItemProp = Arrayable<string>;

export declare type FormItemProps = ExtractPropTypes<typeof formItemProps>;

export declare const formItemProps: {
    readonly label: StringConstructor;
    readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelPosition: EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
    readonly prop: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly required: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare interface FormItemRule extends RuleItem {
    trigger?: Arrayable<string>;
}

export declare type FormItemValidateState = (typeof formItemValidateStates)[number];

export declare const formItemValidateStates: readonly ["", "error", "validating", "success"];

export declare type FormLabelWidthContext = ReturnType<typeof useFormLabelWidth>;

export declare type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;

export declare const formMetaProps: {
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};

export declare type FormProps = ExtractPropTypes<typeof formProps>;

export declare const formProps: {
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    readonly requireAsteriskPosition: EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChange: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};

export declare type FormRules<T extends MaybeRef<Record<string, any> | string> = string> = Partial<Record<UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>, Arrayable<FormItemRule>>>;

export declare type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => Promise<void> | void;

export declare interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}

export declare type FormValidationResult = Promise<boolean>;

/**
 * Check whether it is tuple
 *
 * 检查是否为元组
 *
 * @example
 * IsTuple<[1, 2, 3]> => true
 * IsTuple<Array[number]> => false
 */
declare type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;

export declare type IUseFormItemInputCommonProps = {
    id?: string;
    label?: string | number | boolean | Record<string, any>;
    ariaLabel?: string | number | boolean | Record<string, any>;
};

/**
 * Type which collects all paths through a type
 *
 * 通过一个类型收集所有路径的类型
 *
 * @see {@link FieldPath}
 */
declare type Path<T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
    [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>;
}[TupleKey<T>] : PathImpl<ArrayKey, V> : {
    [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>;
}[keyof T];

/**
 * Helper type for recursively constructing paths through a type
 *
 * 用于通过一个类型递归构建路径的辅助类型
 */
declare type PathImpl<K extends string | number, V> = V extends Primitive | BrowserNativeObject ? `${K}` : `${K}` | `${K}.${Path<V>}`;

declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;

/**
 * Tuple index key
 *
 * 元组下标键
 *
 * @example
 * TupleKey<[1, 2, 3]> => '0' | '1' | '2'
 */
declare type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>;

export declare const useDisabled: (fallback?: MaybeRef<boolean | undefined>) => ComputedRef<boolean>;

export declare const useFormDisabled: (fallback?: MaybeRef<boolean | undefined>) => ComputedRef<boolean>;

export declare const useFormItem: () => {
    form: FormContext | undefined;
    formItem: FormItemContext | undefined;
};

export declare const useFormItemInputId: (props: Partial<IUseFormItemInputCommonProps>, { formItemContext, disableIdGeneration, disableIdManagement }: {
    formItemContext?: FormItemContext;
    disableIdGeneration?: ComputedRef<boolean> | Ref<boolean>;
    disableIdManagement?: ComputedRef<boolean> | Ref<boolean>;
}) => {
    isLabeledByFormItem: ComputedRef<boolean>;
    inputId: Ref<string | undefined, string | undefined>;
};

declare function useFormLabelWidth(): {
    autoLabelWidth: ComputedRef<string>;
    registerLabelWidth: (val: number, oldVal: number) => void;
    deregisterLabelWidth: (val: number) => void;
};

export declare const useFormSize: (fallback?: MaybeRef<ComponentSize | undefined>, ignore?: Partial<Record<"prop" | "form" | "formItem" | "global", boolean>>) => ComputedRef<"" | "small" | "default" | "large" | "mini">;

export declare const useSize: (fallback?: MaybeRef<ComponentSize | undefined>, ignore?: Partial<Record<"prop" | "form" | "formItem" | "global", boolean>>) => ComputedRef<"" | "small" | "default" | "large" | "mini">;

declare const UxForm: SFCWithInstall<typeof _default> & {
    FormItem: typeof _default_2;
};
export { UxForm }
export default UxForm;

export declare const UxFormItem: SFCWithInstall<typeof _default_2>;

export { }
