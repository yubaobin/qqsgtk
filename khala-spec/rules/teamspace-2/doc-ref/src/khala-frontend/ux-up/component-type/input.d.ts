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
import { Mutable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { ShallowRef } from 'vue';
import type { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly name: StringConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
readonly maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
readonly resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly showPassword: BooleanConstructor;
readonly showWordLimit: BooleanConstructor;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly autofocus: BooleanConstructor;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}, {
/** @description HTML input element */
input: ShallowRef<HTMLInputElement | undefined, HTMLInputElement | undefined>;
/** @description HTML textarea element */
textarea: ShallowRef<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
/** @description HTML element, input or textarea */
ref: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
/** @description style of textarea. */
textareaStyle: ComputedRef<StyleValue>;
/** @description from props (used on unit test) */
autosize: Ref<InputAutoSize, InputAutoSize>;
/** @description is input composing */
isComposing: Ref<boolean, boolean>;
/** @description HTML input element native method */
focus: () => void | undefined;
/** @description HTML input element native method */
blur: () => void | undefined;
/** @description HTML input element native method */
select: () => void;
/** @description clear input value */
clear: () => void;
/** @description resize textarea. */
resizeTextarea: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
input: (value: string) => void;
clear: () => void;
"update:modelValue": (value: string) => void;
change: (value: string) => void;
blur: (evt: FocusEvent) => void;
compositionend: (evt: CompositionEvent) => void;
compositionstart: (evt: CompositionEvent) => void;
compositionupdate: (evt: CompositionEvent) => void;
focus: (evt: FocusEvent) => void;
keydown: (evt: Event | KeyboardEvent) => void;
mouseenter: (evt: MouseEvent) => void;
mouseleave: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly name: StringConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
readonly maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
readonly resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly showPassword: BooleanConstructor;
readonly showWordLimit: BooleanConstructor;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly autofocus: BooleanConstructor;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
onMouseenter?: ((evt: MouseEvent) => any) | undefined;
onMouseleave?: ((evt: MouseEvent) => any) | undefined;
onClear?: (() => any) | undefined;
}, {
readonly disabled: boolean;
readonly id: string;
readonly type: string;
readonly modelValue: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly readonly: boolean;
readonly autosize: InputAutoSize;
readonly autocomplete: string;
readonly containerRole: string;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly inputStyle: StyleValue;
readonly rows: number;
readonly inputmode: EpPropMergeType<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown>;
readonly clearable: boolean;
readonly showPassword: boolean;
readonly showWordLimit: boolean;
readonly autofocus: boolean;
}>;

declare function __VLS_template(): {
    prepend?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    append?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type InputAutoSize = {
    minRows?: number;
    maxRows?: number;
} | boolean;

export declare type InputEmits = typeof inputEmits;

export declare const inputEmits: {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: KeyboardEvent | Event) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};

export declare type InputInstance = InstanceType<typeof _default> & unknown;

export declare type InputProps = ExtractPropTypes<typeof inputProps>;

export declare const inputProps: {
    readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
    readonly name: StringConstructor;
    readonly ariaLabel: StringConstructor;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly maxlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly minlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly resize: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
    readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly formatter: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly showPassword: BooleanConstructor;
    readonly showWordLimit: BooleanConstructor;
    readonly suffixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly prefixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly autofocus: BooleanConstructor;
    readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
};

declare const UxInput: SFCWithInstall<typeof _default>;
export { UxInput }
export default UxInput;

export { }
