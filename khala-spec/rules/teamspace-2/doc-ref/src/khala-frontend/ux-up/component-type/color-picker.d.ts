import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Numberify } from '@ctrl/tinycolor';
import { PropType } from 'vue';
import { RGBA } from '@ctrl/tinycolor';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare function blur_2(): void;

declare class Color {
    private _hue;
    private _saturation;
    private _value;
    private _alpha;
    private _tiny;
    private _isValid;
    enableAlpha: boolean;
    format: string;
    value: string;
    selected?: boolean;
    constructor(options?: Partial<ColorOptions>);
    set(prop: {
        [key: string]: any;
    } | any, value?: number): void;
    get(prop: string): any;
    toRgb(): Numberify<RGBA>;
    fromString(value: string): void;
    compare(color: this): boolean;
    doOnChange(): void;
}

declare interface ColorOptions {
    enableAlpha: boolean;
    format: string;
    value?: string | null;
}

export declare interface ColorPickerContext {
    currentColor: ComputedRef<string>;
}

export declare const colorPickerContextKey: InjectionKey<ColorPickerContext>;

export declare type ColorPickerEmits = typeof colorPickerEmits;

export declare const colorPickerEmits: {
    "update:modelValue": (val: string | null) => boolean;
    change: (val: string | null) => boolean;
    activeChange: (val: string | null) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
};

export declare type ColorPickerInstance = InstanceType<typeof _default> & unknown;

export declare type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;

export declare const colorPickerProps: {
    readonly ariaLabel: StringConstructor;
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, undefined, boolean>;
    readonly id: StringConstructor;
    readonly showAlpha: BooleanConstructor;
    readonly colorFormat: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly predefine: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

declare const _default: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, undefined, boolean>;
readonly id: StringConstructor;
readonly showAlpha: BooleanConstructor;
readonly colorFormat: StringConstructor;
readonly disabled: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly predefine: {
readonly type: PropType<string[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
/**
* @description current color object
*/
color: Color;
/**
* @description manually show ColorPicker
*/
show: typeof show;
/**
* @description manually hide ColorPicker
*/
hide: typeof hide;
/**
* @description focus the input element
*/
focus: typeof focus_2;
/**
* @description blur the input element
*/
blur: typeof blur_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: string | null) => void;
change: (val: string | null) => void;
blur: (evt: FocusEvent) => void;
focus: (evt: FocusEvent) => void;
activeChange: (val: string | null) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, undefined, boolean>;
readonly id: StringConstructor;
readonly showAlpha: BooleanConstructor;
readonly colorFormat: StringConstructor;
readonly disabled: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly predefine: {
readonly type: PropType<string[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
"onUpdate:modelValue"?: ((val: string | null) => any) | undefined;
onChange?: ((val: string | null) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onActiveChange?: ((val: string | null) => any) | undefined;
}, {
readonly disabled: boolean;
readonly modelValue: EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly popperClass: string;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showAlpha: boolean;
}>;

declare function focus_2(): void;

declare function hide(): void;

declare function show(): void;

declare const UxColorPicker: SFCWithInstall<typeof _default>;
export { UxColorPicker }
export default UxColorPicker;

export { }
