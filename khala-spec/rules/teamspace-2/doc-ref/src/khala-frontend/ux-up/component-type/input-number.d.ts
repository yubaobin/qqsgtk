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
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly align: EpPropFinalized<(new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right") | ((new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right"))[], unknown, unknown, "center", boolean>;
readonly disabledScientific: BooleanConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly stepStrictly: BooleanConstructor;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly modelValue: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly controls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly controlsPosition: EpPropFinalized<StringConstructor, "" | "right", unknown, "", boolean>;
readonly valueOnClear: EpPropFinalized<readonly [StringConstructor, NumberConstructor, null], unknown, unknown, null, boolean>;
readonly name: StringConstructor;
readonly placeholder: StringConstructor;
readonly precision: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
/** @description get focus the input component */
focus: () => void;
/** @description remove focus the input component */
blur: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: number | undefined) => void;
change: (cur: number | undefined, prev: number | undefined) => void;
input: (val: number | null | undefined) => void;
blur: (e: FocusEvent) => void;
focus: (e: FocusEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly align: EpPropFinalized<(new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right") | ((new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right"))[], unknown, unknown, "center", boolean>;
readonly disabledScientific: BooleanConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly stepStrictly: BooleanConstructor;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly modelValue: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly controls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly controlsPosition: EpPropFinalized<StringConstructor, "" | "right", unknown, "", boolean>;
readonly valueOnClear: EpPropFinalized<readonly [StringConstructor, NumberConstructor, null], unknown, unknown, null, boolean>;
readonly name: StringConstructor;
readonly placeholder: StringConstructor;
readonly precision: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
"onUpdate:modelValue"?: ((val: number | undefined) => any) | undefined;
onChange?: ((cur: number | undefined, prev: number | undefined) => any) | undefined;
onFocus?: ((e: FocusEvent) => any) | undefined;
onBlur?: ((e: FocusEvent) => any) | undefined;
onInput?: ((val: number | null | undefined) => any) | undefined;
}, {
readonly disabled: boolean;
readonly id: string;
readonly valueOnClear: any;
readonly readonly: boolean;
readonly min: number;
readonly max: number;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly inputmode: EpPropMergeType<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown>;
readonly align: EpPropMergeType<(new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right") | ((new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right"))[], unknown, unknown>;
readonly step: number;
readonly controls: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly controlsPosition: EpPropMergeType<StringConstructor, "" | "right", unknown>;
readonly disabledScientific: boolean;
readonly stepStrictly: boolean;
}>;

declare function __VLS_template(): {
    "decrease-icon"?(_: {}): any;
    "increase-icon"?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type InputNumberEmits = typeof inputNumberEmits;

export declare const inputNumberEmits: {
    change: (cur: number | undefined, prev: number | undefined) => boolean;
    blur: (e: FocusEvent) => boolean;
    focus: (e: FocusEvent) => boolean;
    input: (val: number | null | undefined) => boolean;
    "update:modelValue": (val: number | undefined) => boolean;
};

export declare type InputNumberInstance = InstanceType<typeof _default> & unknown;

export declare type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;

export declare const inputNumberProps: {
    readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
    readonly align: EpPropFinalized<(new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right") | ((new (...args: any[]) => "center" | "left" | "right") | (() => "center" | "left" | "right"))[], unknown, unknown, "center", boolean>;
    readonly disabledScientific: BooleanConstructor;
    readonly ariaLabel: StringConstructor;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly stepStrictly: BooleanConstructor;
    readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly modelValue: {
        readonly type: PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly controls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly controlsPosition: EpPropFinalized<StringConstructor, "" | "right", unknown, "", boolean>;
    readonly valueOnClear: EpPropFinalized<readonly [StringConstructor, NumberConstructor, null], unknown, unknown, null, boolean>;
    readonly name: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly precision: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

declare const UxInputNumber: SFCWithInstall<typeof _default>;
export { UxInputNumber }
export default UxInputNumber;

export { }
