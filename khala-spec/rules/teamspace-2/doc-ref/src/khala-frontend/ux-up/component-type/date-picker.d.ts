import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { DateModelType } from 'ux-up/es/components/time-picker';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { GetDisabledHours } from 'ux-up/es/components/time-picker';
import { GetDisabledMinutes } from 'ux-up/es/components/time-picker';
import { GetDisabledSeconds } from 'ux-up/es/components/time-picker';
import type { InjectionKey } from 'vue';
import { ModelValueType } from 'ux-up/es/components/time-picker';
import { Options } from 'ux-up';
import { Placement } from 'ux-up';
import { PropType } from 'vue';
import type { SetupContext } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { SingleOrRange } from 'ux-up/es/components/time-picker';
import type { UseNamespaceReturn } from 'ux-up/es/hooks';
import { VNodeProps } from 'vue';

declare interface DatePickerContext {
    slots: SetupContext['slots'];
    pickerNs: UseNamespaceReturn;
}

declare type DatePickerExpose = {
    focus: () => void;
    blur: () => void;
    handleOpen: () => void;
    handleClose: () => void;
};

export declare type DatePickerInstance = ComponentPublicInstance<DatePickerProps, DatePickerExpose>;

export declare type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;

export declare const datePickerProps: {
    readonly type: EpPropFinalized<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType))[], unknown, unknown, "date", boolean>;
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
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom", boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
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
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
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

declare const _default: DefineComponent<    {
readonly type: EpPropFinalized<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType))[], unknown, unknown, "date", boolean>;
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
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
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
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
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
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly type: EpPropFinalized<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType))[], unknown, unknown, "date", boolean>;
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
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom", "top", "right", "left"], boolean>;
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
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
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
}, {
readonly disabled: boolean;
readonly type: EpPropMergeType<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => IDatePickerType))[], unknown, unknown>;
readonly placeholder: string;
readonly modelValue: EpPropMergeType<(new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null) | ((new (...args: any[]) => string | number | Date | string[] | [DateModelType, DateModelType]) | (() => ModelValueType | null))[], unknown, unknown>;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown>;
readonly tabindex: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly readonly: boolean;
readonly prefixIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly clearable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly fallbackPlacements: Placement[];
readonly popperOptions: Partial<Options>;
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

declare type IDatePickerType = 'year' | 'years' | 'month' | 'months' | 'date' | 'dates' | 'week' | 'datetime' | 'datetimerange' | 'daterange' | 'monthrange' | 'yearrange';

export declare const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext>;

export declare const ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY = "UxIsDefaultFormat";

declare const UxDatePicker: SFCWithInstall<typeof _default>;
export { UxDatePicker }
export default UxDatePicker;

export { }
