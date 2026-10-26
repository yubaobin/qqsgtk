import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { InputAutoSize } from 'ux-up/es/components/input';
import type { InputInstance } from 'ux-up/es/components/input';
import { Mutable } from 'ux-up/es/utils';
import { Options } from '@popperjs/core';
import type { Options as Options_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import type { TooltipInstance } from 'ux-up/es/components/tooltip';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
options: EpPropFinalized<(new (...args: any[]) => MentionOption[]) | (() => MentionOption[]) | ((new (...args: any[]) => MentionOption[]) | (() => MentionOption[]))[], unknown, unknown, () => never[], boolean>;
prefix: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
split: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
filterOption: EpPropFinalized<(new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)))[], unknown, unknown, () => (pattern: string, option: MentionOption) => boolean, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown, string, boolean>;
showArrow: BooleanConstructor;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
whole: BooleanConstructor;
checkIsWhole: {
readonly type: PropType<(pattern: string, prefix: string) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
modelValue: StringConstructor;
loading: BooleanConstructor;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
name: StringConstructor;
ariaLabel: StringConstructor;
id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly: BooleanConstructor;
clearable: BooleanConstructor;
showPassword: BooleanConstructor;
showWordLimit: BooleanConstructor;
suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
autofocus: BooleanConstructor;
rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}, {
input: Ref<InputInstance | undefined, InputInstance | undefined>;
tooltip: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
dropdownVisible: ComputedRef<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
input: (value: string) => void;
search: (pattern: string, prefix: string) => void;
select: (option: MentionOption, prefix: string) => void;
"update:modelValue": (value: string) => void;
blur: (evt: FocusEvent) => void;
focus: (evt: FocusEvent) => void;
"whole-remove": (pattern: string, prefix: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
options: EpPropFinalized<(new (...args: any[]) => MentionOption[]) | (() => MentionOption[]) | ((new (...args: any[]) => MentionOption[]) | (() => MentionOption[]))[], unknown, unknown, () => never[], boolean>;
prefix: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
split: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
filterOption: EpPropFinalized<(new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)))[], unknown, unknown, () => (pattern: string, option: MentionOption) => boolean, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown, string, boolean>;
showArrow: BooleanConstructor;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
whole: BooleanConstructor;
checkIsWhole: {
readonly type: PropType<(pattern: string, prefix: string) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
modelValue: StringConstructor;
loading: BooleanConstructor;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
name: StringConstructor;
ariaLabel: StringConstructor;
id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly: BooleanConstructor;
clearable: BooleanConstructor;
showPassword: BooleanConstructor;
showWordLimit: BooleanConstructor;
suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
autofocus: BooleanConstructor;
rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
onSelect?: ((option: MentionOption, prefix: string) => any) | undefined;
onSearch?: ((pattern: string, prefix: string) => any) | undefined;
"onWhole-remove"?: ((pattern: string, prefix: string) => any) | undefined;
}, {
disabled: boolean;
split: string;
offset: number;
id: string;
type: string;
loading: boolean;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown>;
options: MentionOption[];
tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
prefix: EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>;
readonly: boolean;
autosize: InputAutoSize;
autocomplete: string;
containerRole: string;
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
inputStyle: StyleValue;
rows: number;
inputmode: EpPropMergeType<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown>;
clearable: boolean;
showPassword: boolean;
showWordLimit: boolean;
autofocus: boolean;
popperOptions: Partial<Options>;
popperClass: string;
showArrow: boolean;
filterOption: EpPropMergeType<(new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)))[], unknown, unknown>;
whole: boolean;
}>;

declare function __VLS_template(): Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type MentionEmits = typeof mentionEmits;

export declare const mentionEmits: {
    "update:modelValue": (value: string) => boolean;
    'whole-remove': (pattern: string, prefix: string) => boolean;
    input: (value: string) => boolean;
    search: (pattern: string, prefix: string) => boolean;
    select: (option: MentionOption, prefix: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
};

export declare type MentionInstance = InstanceType<typeof _default> & unknown;

export declare type MentionOption = {
    value: string;
    label?: string;
    disabled?: boolean;
    [key: string]: any;
};

export declare type MentionProps = ExtractPropTypes<typeof mentionProps>;

export declare const mentionProps: {
    options: EpPropFinalized<(new (...args: any[]) => MentionOption[]) | (() => MentionOption[]) | ((new (...args: any[]) => MentionOption[]) | (() => MentionOption[]))[], unknown, unknown, () => never[], boolean>;
    prefix: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
    split: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    filterOption: EpPropFinalized<(new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: MentionOption) => boolean)) | (() => false | ((pattern: string, option: MentionOption) => boolean)))[], unknown, unknown, () => (pattern: string, option: MentionOption) => boolean, boolean>;
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown, string, boolean>;
    showArrow: BooleanConstructor;
    offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    whole: BooleanConstructor;
    checkIsWhole: {
        readonly type: PropType<(pattern: string, prefix: string) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: StringConstructor;
    loading: BooleanConstructor;
    popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => Partial<Options_2>, boolean>;
    inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
    name: StringConstructor;
    ariaLabel: StringConstructor;
    id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    maxlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    minlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    resize: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
    autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    formatter: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parser: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    form: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: BooleanConstructor;
    clearable: BooleanConstructor;
    showPassword: BooleanConstructor;
    showWordLimit: BooleanConstructor;
    suffixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prefixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    autofocus: BooleanConstructor;
    rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
};

declare const UxMention: SFCWithInstall<typeof _default>;
export { UxMention }
export default UxMention;

export { }
