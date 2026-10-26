import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PopperEffect } from 'ux-up';
import type { PopperEffect as PopperEffect_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<    {
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm", boolean>;
readonly modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: StringConstructor;
readonly start: EpPropFinalized<StringConstructor, unknown, unknown, "09:00", boolean>;
readonly end: EpPropFinalized<StringConstructor, unknown, unknown, "18:00", boolean>;
readonly step: EpPropFinalized<StringConstructor, unknown, unknown, "00:30", boolean>;
readonly minTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly maxTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly includeEndTime: BooleanConstructor;
readonly name: StringConstructor;
readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly clearIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
}, {
/**
* @description blur the Input component
*/
blur: () => void;
/**
* @description focus the Input component
*/
focus: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
clear: (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
change: (...args: any[]) => void;
blur: (...args: any[]) => void;
focus: (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm", boolean>;
readonly modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: StringConstructor;
readonly start: EpPropFinalized<StringConstructor, unknown, unknown, "09:00", boolean>;
readonly end: EpPropFinalized<StringConstructor, unknown, unknown, "18:00", boolean>;
readonly step: EpPropFinalized<StringConstructor, unknown, unknown, "00:30", boolean>;
readonly minTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly maxTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly includeEndTime: BooleanConstructor;
readonly name: StringConstructor;
readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly clearIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onChange?: ((...args: any[]) => any) | undefined;
onFocus?: ((...args: any[]) => any) | undefined;
onBlur?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
}, {
readonly disabled: boolean;
readonly end: string;
readonly start: string;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly format: string;
readonly prefixIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly clearable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly clearIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly editable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly step: string;
readonly includeEndTime: boolean;
}>;

export declare type TimeSelectInstance = InstanceType<typeof _default> & unknown;

export declare type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>;

export declare const timeSelectProps: {
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm", boolean>;
    readonly modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, "light", boolean>;
    readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: StringConstructor;
    readonly start: EpPropFinalized<StringConstructor, unknown, unknown, "09:00", boolean>;
    readonly end: EpPropFinalized<StringConstructor, unknown, unknown, "18:00", boolean>;
    readonly step: EpPropFinalized<StringConstructor, unknown, unknown, "00:30", boolean>;
    readonly minTime: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly maxTime: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly includeEndTime: BooleanConstructor;
    readonly name: StringConstructor;
    readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly clearIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
};

declare const UxTimeSelect: SFCWithInstall<typeof _default>;
export { UxTimeSelect }
export default UxTimeSelect;

export { }
