import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { Options } from 'ux-up';
import type { Options as Options_2 } from '@popperjs/core';
import { Placement } from 'ux-up';
import { Placement as Placement_2 } from '@popperjs/core';
import type { Placement as Placement_3 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly showNow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showFooter: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showWeekNumber: BooleanConstructor;
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly disabledDate: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly cellClassName: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
readonly arrowControl: BooleanConstructor;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly unlinkPanels: BooleanConstructor;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], Placement_2, unknown, "bottom", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
readonly disabledHours: {
readonly type: PropType<GetDisabledHours>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabledMinutes: {
readonly type: PropType<GetDisabledMinutes>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabledSeconds: {
readonly type: PropType<GetDisabledSeconds>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly name: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly format: StringConstructor;
readonly valueFormat: StringConstructor;
readonly dateFormat: StringConstructor;
readonly timeFormat: StringConstructor;
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown, "", boolean>;
readonly rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
readonly startPlaceholder: StringConstructor;
readonly endPlaceholder: StringConstructor;
readonly defaultValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly defaultTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly isRange: BooleanConstructor;
}, {
/**
* @description focus input box.
*/
focus: () => void;
/**
* @description blur input box.
*/
blur: () => void;
/**
* @description opens picker
*/
handleOpen: () => void;
/**
* @description closes picker
*/
handleClose: () => void;
/**
* @description pick item manually
*/
onPick: (date?: any, visible?: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
clear: (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
change: (...args: any[]) => void;
blur: (...args: any[]) => void;
focus: (...args: any[]) => void;
keydown: (...args: any[]) => void;
"calendar-change": (...args: any[]) => void;
"panel-change": (...args: any[]) => void;
"visible-change": (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly showNow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showFooter: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showWeekNumber: BooleanConstructor;
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly disabledDate: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly cellClassName: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
readonly arrowControl: BooleanConstructor;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly unlinkPanels: BooleanConstructor;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], Placement_2, unknown, "bottom", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
readonly disabledHours: {
readonly type: PropType<GetDisabledHours>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabledMinutes: {
readonly type: PropType<GetDisabledMinutes>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabledSeconds: {
readonly type: PropType<GetDisabledSeconds>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly name: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly format: StringConstructor;
readonly valueFormat: StringConstructor;
readonly dateFormat: StringConstructor;
readonly timeFormat: StringConstructor;
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown, "", boolean>;
readonly rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
readonly startPlaceholder: StringConstructor;
readonly endPlaceholder: StringConstructor;
readonly defaultValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly defaultTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly isRange: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onChange?: ((...args: any[]) => any) | undefined;
onFocus?: ((...args: any[]) => any) | undefined;
onBlur?: ((...args: any[]) => any) | undefined;
onKeydown?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
"onCalendar-change"?: ((...args: any[]) => any) | undefined;
"onPanel-change"?: ((...args: any[]) => any) | undefined;
"onVisible-change"?: ((...args: any[]) => any) | undefined;
}, {
readonly disabled: boolean;
readonly type: string;
readonly placeholder: string;
readonly modelValue: EpPropMergeType<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown>;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], Placement_2, unknown>;
readonly tabindex: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly readonly: boolean;
readonly prefixIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly clearable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly fallbackPlacements: Placement_2[];
readonly popperOptions: Partial<Options_2>;
readonly popperClass: string;
readonly editable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly rangeSeparator: string;
readonly shortcuts: unknown[];
readonly showNow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showFooter: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showWeekNumber: boolean;
readonly arrowControl: boolean;
readonly unlinkPanels: boolean;
readonly isRange: boolean;
}>;

declare function __VLS_template(): {
    "range-separator"?(_: {}): any;
    default?(_: {
        visible: boolean;
        actualVisible: boolean;
        parsedValue: DayOrDays;
        format: string | undefined;
        dateFormat: string | undefined;
        timeFormat: string | undefined;
        unlinkPanels: boolean;
        type: string;
        defaultValue: EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown> | undefined;
        showNow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
        showFooter: EpPropMergeType<BooleanConstructor, unknown, unknown>;
        showWeekNumber: boolean;
        onMousedown: any;
        onPanelChange: any;
        onCalendarChange: any;
        onSetPickerOption: any;
        onSelectRange: any;
        onPick: any;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const adapterOldFormat: (format?: string) => string | undefined;

export declare const buildTimeList: (value: number, bound: number) => TimeList;

export declare const CommonPicker: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const dateEquals: (a: Date | unknown, b: Date | unknown) => boolean;

export declare type DateModelType = number | string | Date;

export declare type DateOrDates = SingleOrRange<Date>;

export declare type DayOrDays = SingleOrRange<Dayjs>;

export declare const dayOrDaysToDate: (dayOrDays: DayOrDays) => DateOrDates;

declare const _default: DefineComponent<    {
/**
* @description whether to pick a time range
*/
isRange: BooleanConstructor;
showNow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
showFooter: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
showWeekNumber: BooleanConstructor;
ariaLabel: StringConstructor;
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
disabledDate: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
cellClassName: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
arrowControl: BooleanConstructor;
tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
unlinkPanels: BooleanConstructor;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom", boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
disabledHours: {
readonly type: PropType<GetDisabledHours>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabledMinutes: {
readonly type: PropType<GetDisabledMinutes>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabledSeconds: {
readonly type: PropType<GetDisabledSeconds>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
id: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
name: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
format: StringConstructor;
valueFormat: StringConstructor;
dateFormat: StringConstructor;
timeFormat: StringConstructor;
type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "", boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly: BooleanConstructor;
disabled: BooleanConstructor;
placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
modelValue: EpPropFinalized<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown, "", boolean>;
rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
startPlaceholder: StringConstructor;
endPlaceholder: StringConstructor;
defaultValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
defaultTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description whether to pick a time range
*/
isRange: BooleanConstructor;
showNow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
showFooter: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
showWeekNumber: BooleanConstructor;
ariaLabel: StringConstructor;
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
disabledDate: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
cellClassName: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
arrowControl: BooleanConstructor;
tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
unlinkPanels: BooleanConstructor;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom", boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
disabledHours: {
readonly type: PropType<GetDisabledHours>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabledMinutes: {
readonly type: PropType<GetDisabledMinutes>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabledSeconds: {
readonly type: PropType<GetDisabledSeconds>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
id: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
name: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
format: StringConstructor;
valueFormat: StringConstructor;
dateFormat: StringConstructor;
timeFormat: StringConstructor;
type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "", boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly: BooleanConstructor;
disabled: BooleanConstructor;
placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
modelValue: EpPropFinalized<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown, "", boolean>;
rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
startPlaceholder: StringConstructor;
endPlaceholder: StringConstructor;
defaultValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
defaultTime: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
disabled: boolean;
type: string;
placeholder: string;
modelValue: EpPropMergeType<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown>;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown>;
tabindex: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly: boolean;
prefixIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
clearable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
fallbackPlacements: Placement[];
popperOptions: Partial<Options>;
popperClass: string;
editable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
rangeSeparator: string;
shortcuts: unknown[];
showNow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
showFooter: EpPropMergeType<BooleanConstructor, unknown, unknown>;
showWeekNumber: boolean;
arrowControl: boolean;
unlinkPanels: boolean;
isRange: boolean;
}>;

export declare const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";

export declare const DEFAULT_FORMATS_DATEPICKER: {
    date: string;
    dates: string;
    week: string;
    year: string;
    years: string;
    month: string;
    months: string;
    datetime: string;
    monthrange: string;
    yearrange: string;
    daterange: string;
    datetimerange: string;
};

export declare const DEFAULT_FORMATS_TIME = "HH:mm:ss";

export declare const extractDateFormat: (format: string) => string;

export declare const extractTimeFormat: (format: string) => string;

export declare const formatter: (date: string | number | Date | Dayjs, format: string | undefined, lang: string) => string | number | Date | dayjs.Dayjs;

export declare type GetDisabledHours = (role: string, comparingDate?: Dayjs) => number[];

export declare type GetDisabledMinutes = (hour: number, role: string, comparingDate?: Dayjs) => number[];

export declare type GetDisabledSeconds = (hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[];

export declare const makeList: (total: number, method?: () => number[]) => boolean[];

export declare type ModelValueType = SingleOrRange<DateModelType> | string[];

export declare const parseDate: (date: string | number | Date, format: string | undefined, lang: string) => dayjs.Dayjs | undefined;

export declare const PICKER_BASE_INJECTION_KEY = "EP_PICKER_BASE";

export declare const PICKER_POPPER_OPTIONS_INJECTION_KEY = "UxPopperOptions";

export declare interface PickerOptions {
    isValidValue: (date: DayOrDays) => boolean;
    handleKeydownInput: (event: KeyboardEvent) => void;
    parseUserInput: (value: UserInput) => DayOrDays;
    formatToString: (value: DayOrDays) => UserInput;
    getRangeAvailableTime: (date: DayOrDays) => DayOrDays;
    getDefaultValue: () => DayOrDays;
    panelReady: boolean;
    handleClear: () => void;
    handleFocusPicker?: () => void;
}

export declare const rangeArr: (n: number) => number[];

export declare type SingleOrRange<T> = T | [T, T];

export declare type TimeList = [number | undefined, number, undefined | number];

export declare type TimePickerDefaultProps = ExtractPropTypes<typeof timePickerDefaultProps>;

export declare const timePickerDefaultProps: {
    readonly showNow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showFooter: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showWeekNumber: BooleanConstructor;
    readonly ariaLabel: StringConstructor;
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    readonly disabledDate: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly cellClassName: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
    readonly arrowControl: BooleanConstructor;
    readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly unlinkPanels: BooleanConstructor;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_3) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_3))[], Placement_3, unknown, "bottom", boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_3[]) | (() => Placement_3[]) | ((new (...args: any[]) => Placement_3[]) | (() => Placement_3[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
    readonly disabledHours: {
        readonly type: PropType<GetDisabledHours>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledMinutes: {
        readonly type: PropType<GetDisabledMinutes>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledSeconds: {
        readonly type: PropType<GetDisabledSeconds>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly name: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => SingleOrRange<string>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly format: StringConstructor;
    readonly valueFormat: StringConstructor;
    readonly dateFormat: StringConstructor;
    readonly timeFormat: StringConstructor;
    readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly clearIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "", boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown, "", boolean>;
    readonly rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly defaultValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultTime: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isRange: BooleanConstructor;
};

export declare const timePickerRangeTriggerProps: {
    readonly id: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly name: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string | null, string | null]) | (() => UserInput) | ((new (...args: any[]) => string | [string | null, string | null]) | (() => UserInput))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabled: BooleanConstructor;
};

/**
 * @deprecated Use `timePickerRangeTriggerProps` instead. This will be removed in future versions.
 */
export declare const timePickerRngeTriggerProps: {
    readonly id: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly name: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | [string | null, string | null]) | (() => UserInput) | ((new (...args: any[]) => string | [string | null, string | null]) | (() => UserInput))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startPlaceholder: StringConstructor;
    readonly endPlaceholder: StringConstructor;
    readonly disabled: BooleanConstructor;
};

export declare const TimePickPanel: DefineComponent<    {
readonly datetimeRole: StringConstructor;
readonly parsedValue: {
readonly type: PropType<dayjs.Dayjs>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly visible: BooleanConstructor;
readonly actualVisible: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"select-range": (...args: any[]) => void;
pick: (...args: any[]) => void;
"set-picker-option": (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly datetimeRole: StringConstructor;
readonly parsedValue: {
readonly type: PropType<dayjs.Dayjs>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly visible: BooleanConstructor;
readonly actualVisible: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}>> & {
onPick?: ((...args: any[]) => any) | undefined;
"onSelect-range"?: ((...args: any[]) => any) | undefined;
"onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
readonly visible: boolean;
readonly format: string;
readonly actualVisible: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

export declare type TimeUnit = (typeof timeUnits)[number];

export declare const timeUnits: readonly ["hours", "minutes", "seconds"];

export declare type UserInput = SingleOrRange<string | null>;

declare const UxTimePicker: SFCWithInstall<typeof _default>;
export { UxTimePicker }
export default UxTimePicker;

export declare const valueEquals: (a: Array<Date> | unknown, b: Array<Date> | unknown) => boolean;

export { }
