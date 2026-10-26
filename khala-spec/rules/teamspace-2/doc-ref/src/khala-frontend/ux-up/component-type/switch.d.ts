import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
readonly disabled: BooleanConstructor;
readonly loading: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini") | ((new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini"))[], unknown, "" | "small" | "default" | "large" | "mini">>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly inlinePrompt: BooleanConstructor;
readonly inactiveActionIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeActionIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly inactiveIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly inactiveText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly activeValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
readonly inactiveValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly beforeChange: {
readonly type: PropType<() => Promise<boolean> | boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: StringConstructor;
readonly tabindex: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/**
*  @description manual focus to the switch component
**/
focus: () => void;
/**
* @description whether Switch is checked
*/
checked: ComputedRef<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: string | number | boolean) => void;
change: (val: string | number | boolean) => void;
input: (val: string | number | boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
readonly disabled: BooleanConstructor;
readonly loading: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini") | ((new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini"))[], unknown, "" | "small" | "default" | "large" | "mini">>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly inlinePrompt: BooleanConstructor;
readonly inactiveActionIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeActionIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly inactiveIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly activeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly inactiveText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly activeValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
readonly inactiveValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly beforeChange: {
readonly type: PropType<() => Promise<boolean> | boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: StringConstructor;
readonly tabindex: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
onChange?: ((val: string | number | boolean) => any) | undefined;
onInput?: ((val: string | number | boolean) => any) | undefined;
}, {
readonly disabled: boolean;
readonly width: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly name: string;
readonly loading: boolean;
readonly modelValue: EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly activeText: string;
readonly inactiveText: string;
readonly activeValue: EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
readonly inactiveValue: EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
readonly inlinePrompt: boolean;
}>;

declare function __VLS_template(): {
    "active-action"?(_: {}): any;
    "inactive-action"?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type SwitchEmits = typeof switchEmits;

export declare const switchEmits: {
    "update:modelValue": (val: boolean | string | number) => boolean;
    change: (val: boolean | string | number) => boolean;
    input: (val: boolean | string | number) => boolean;
};

export declare type SwitchInstance = InstanceType<typeof _default> & unknown;

export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;

export declare const switchProps: {
    readonly ariaLabel: StringConstructor;
    readonly modelValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini") | ((new (...args: any[]) => "" | "small" | "default" | "large" | "mini") | (() => "" | "small" | "default" | "large" | "mini"))[], unknown, "" | "small" | "default" | "large" | "mini">>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly inlinePrompt: BooleanConstructor;
    readonly inactiveActionIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeActionIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inactiveIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inactiveText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly activeValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    readonly inactiveValue: EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly beforeChange: {
        readonly type: PropType<() => Promise<boolean> | boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: StringConstructor;
    readonly tabindex: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxSwitch: SFCWithInstall<typeof _default>;
export { UxSwitch }
export default UxSwitch;

export { }
