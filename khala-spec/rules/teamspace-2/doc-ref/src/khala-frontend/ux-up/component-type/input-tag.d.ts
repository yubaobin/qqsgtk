import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly modelValue: {
readonly type: PropType<string[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly max: NumberConstructor;
readonly tagType: {
readonly default: "info";
readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tagEffect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
readonly trigger: EpPropFinalized<(new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space") | ((new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space"))[], unknown, unknown, string, boolean>;
readonly draggable: BooleanConstructor;
readonly delimiter: EpPropFinalized<readonly [StringConstructor, RegExpConstructor], unknown, unknown, "", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly clearable: BooleanConstructor;
readonly disabled: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly readonly: BooleanConstructor;
readonly autofocus: BooleanConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
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
readonly placeholder: StringConstructor;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly saveOnBlur: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly ariaLabel: StringConstructor;
}, {
focus: () => void;
blur: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
clear: () => void;
"update:modelValue": (value?: string[] | undefined) => void;
change: (value?: string[] | undefined) => void;
input: (value: string) => void;
blur: (evt: FocusEvent) => void;
focus: (evt: FocusEvent) => void;
"add-tag": (value: string | string[]) => void;
"remove-tag": (value: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly modelValue: {
readonly type: PropType<string[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly max: NumberConstructor;
readonly tagType: {
readonly default: "info";
readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tagEffect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
readonly trigger: EpPropFinalized<(new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space") | ((new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space"))[], unknown, unknown, string, boolean>;
readonly draggable: BooleanConstructor;
readonly delimiter: EpPropFinalized<readonly [StringConstructor, RegExpConstructor], unknown, unknown, "", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly clearable: BooleanConstructor;
readonly disabled: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly readonly: BooleanConstructor;
readonly autofocus: BooleanConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
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
readonly placeholder: StringConstructor;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly saveOnBlur: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly ariaLabel: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value?: string[] | undefined) => any) | undefined;
onChange?: ((value?: string[] | undefined) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
onClear?: (() => any) | undefined;
"onAdd-tag"?: ((value: string | string[]) => any) | undefined;
"onRemove-tag"?: ((value: string) => any) | undefined;
}, {
readonly disabled: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly id: string;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly readonly: boolean;
readonly trigger: EpPropMergeType<(new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space") | ((new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space"))[], unknown, unknown>;
readonly autocomplete: string;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly clearable: boolean;
readonly autofocus: boolean;
readonly tagType: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly tagEffect: EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
readonly draggable: boolean;
readonly delimiter: EpPropMergeType<readonly [StringConstructor, RegExpConstructor], unknown, unknown>;
readonly saveOnBlur: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    prefix?(_: {}): any;
    tag?(_: {
        value: string;
        index: number;
    }): any;
    suffix?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type InputTagEmits = typeof inputTagEmits;

export declare const inputTagEmits: {
    "update:modelValue": (value?: string[]) => boolean;
    change: (value?: string[]) => boolean;
    input: (value: string) => boolean;
    'add-tag': (value: string | string[]) => boolean;
    'remove-tag': (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
};

export declare type InputTagInstance = InstanceType<typeof _default> & unknown;

export declare type InputTagProps = ExtractPropTypes<typeof inputTagProps>;

export declare const inputTagProps: {
    readonly modelValue: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly max: NumberConstructor;
    readonly tagType: {
        readonly default: "info";
        readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly tagEffect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
    readonly trigger: EpPropFinalized<(new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space") | ((new (...args: any[]) => "Enter" | "Space") | (() => "Enter" | "Space"))[], unknown, unknown, string, boolean>;
    readonly draggable: BooleanConstructor;
    readonly delimiter: EpPropFinalized<readonly [StringConstructor, RegExpConstructor], unknown, unknown, "", boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly clearable: BooleanConstructor;
    readonly disabled: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly readonly: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
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
    readonly placeholder: StringConstructor;
    readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly saveOnBlur: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly ariaLabel: StringConstructor;
};

declare const UxInputTag: SFCWithInstall<typeof _default>;
export { UxInputTag }
export default UxInputTag;

export { }
