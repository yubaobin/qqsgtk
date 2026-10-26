import { AllowedComponentProps } from 'vue';
import type { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly lowThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly highThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
readonly colors: EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
readonly voidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly disabledVoidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icons: EpPropFinalized<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown, () => [Component, Component, Component], boolean>;
readonly voidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
readonly disabledVoidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
readonly disabled: BooleanConstructor;
readonly allowHalf: BooleanConstructor;
readonly showText: BooleanConstructor;
readonly showScore: BooleanConstructor;
readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly texts: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["极差", "失望", "一般", "满意", "惊喜"], boolean>;
readonly scoreTemplate: EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly clearable: BooleanConstructor;
}, {
/** @description set current value */
setCurrentValue: typeof setCurrentValue;
/** @description reset current value */
resetCurrentValue: typeof resetCurrentValue;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: number) => void;
change: (value: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly lowThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly highThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
readonly colors: EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
readonly voidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly disabledVoidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icons: EpPropFinalized<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown, () => [Component, Component, Component], boolean>;
readonly voidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
readonly disabledVoidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
readonly disabled: BooleanConstructor;
readonly allowHalf: BooleanConstructor;
readonly showText: BooleanConstructor;
readonly showScore: BooleanConstructor;
readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly texts: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["极差", "失望", "一般", "满意", "惊喜"], boolean>;
readonly scoreTemplate: EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly clearable: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: number) => any) | undefined;
onChange?: ((value: number) => any) | undefined;
}, {
readonly disabled: boolean;
readonly id: string;
readonly modelValue: number;
readonly max: number;
readonly clearable: boolean;
readonly textColor: string;
readonly colors: EpPropMergeType<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown>;
readonly showText: boolean;
readonly lowThreshold: number;
readonly highThreshold: number;
readonly voidColor: string;
readonly disabledVoidColor: string;
readonly icons: EpPropMergeType<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown>;
readonly voidIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly disabledVoidIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly texts: string[];
readonly scoreTemplate: string;
readonly allowHalf: boolean;
readonly showScore: boolean;
}>;

export declare type RateEmits = typeof rateEmits;

export declare const rateEmits: {
    change: (value: number) => boolean;
    "update:modelValue": (value: number) => boolean;
};

export declare type RateInstance = InstanceType<typeof _default> & unknown;

export declare type RateProps = ExtractPropTypes<typeof rateProps>;

export declare const rateProps: {
    readonly ariaLabel: StringConstructor;
    readonly modelValue: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly lowThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly highThreshold: EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    readonly colors: EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
    readonly voidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly disabledVoidColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icons: EpPropFinalized<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown, () => [Component, Component, Component], boolean>;
    readonly voidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
    readonly disabledVoidIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => Component, boolean>;
    readonly disabled: BooleanConstructor;
    readonly allowHalf: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly showScore: BooleanConstructor;
    readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly texts: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["极差", "失望", "一般", "满意", "惊喜"], boolean>;
    readonly scoreTemplate: EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly clearable: BooleanConstructor;
};

declare function resetCurrentValue(): void;

declare function setCurrentValue(value: number, event?: MouseEvent): void;

declare const UxRate: SFCWithInstall<typeof _default>;
export { UxRate }
export default UxRate;

export { }
