import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { Dayjs } from 'dayjs';
import { DefineComponent } from 'vue';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';
import { WritableComputedRef } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly modelValue: {
readonly type: PropType<Date>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly range: {
readonly type: PropType<[Date, Date]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description currently selected date */
selectedDay: WritableComputedRef<Dayjs | undefined, Dayjs | undefined>;
/** @description select a specific date */
pickDay: (day: Dayjs) => void;
/** @description select date */
selectDate: (type: CalendarDateType) => void;
/** @description Calculate the validate date range according to the start and end dates */
calculateValidatedDateRange: (startDayjs: Dayjs, endDayjs: Dayjs) => [Dayjs, Dayjs][];
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: Date) => void;
input: (value: Date) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly modelValue: {
readonly type: PropType<Date>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly range: {
readonly type: PropType<[Date, Date]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((value: Date) => any) | undefined;
onInput?: ((value: Date) => any) | undefined;
}, {}>;

declare const __VLS_component_2: DefineComponent<    {
readonly selectedDay: {
readonly type: PropType<Dayjs>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly range: {
readonly type: PropType<[Dayjs, Dayjs]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly date: {
readonly type: PropType<Dayjs>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hideHeader: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description toggle date panel */
getFormattedDate: (day: number, type: CalendarDateCellType) => Dayjs;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
pick: (value: Dayjs) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly selectedDay: {
readonly type: PropType<Dayjs>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly range: {
readonly type: PropType<[Dayjs, Dayjs]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly date: {
readonly type: PropType<Dayjs>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hideHeader: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onPick?: ((value: Dayjs) => any) | undefined;
}, {}>;

declare function __VLS_template(): {
    header?(_: {
        date: string;
    }): any;
    "date-cell"?(_: {
        data: {
            isSelected: boolean;
            type: string;
            day: string;
            date: Date;
        };
    }): any;
    "date-cell"?(_: {
        data: {
            isSelected: boolean;
            type: string;
            day: string;
            date: Date;
        };
    }): any;
};

declare function __VLS_template_2(): {
    "date-cell"?(_: {
        data: {
            isSelected: boolean;
            type: string;
            day: string;
            date: Date;
        };
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type CalendarDateCellType = 'next' | 'prev' | 'current';

export declare type CalendarDateTableInstance = DateTableInstance;

export declare type CalendarDateType = 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today';

export declare type CalendarEmits = typeof calendarEmits;

export declare const calendarEmits: {
    "update:modelValue": (value: Date) => boolean;
    input: (value: Date) => boolean;
};

export declare type CalendarInstance = InstanceType<typeof _default> & unknown;

export declare type CalendarProps = ExtractPropTypes<typeof calendarProps>;

export declare const calendarProps: {
    readonly modelValue: {
        readonly type: PropType<Date>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly range: {
        readonly type: PropType<[Date, Date]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type DateTableInstance = InstanceType<typeof _default_2> & unknown;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const UxCalendar: SFCWithInstall<typeof _default>;
export { UxCalendar }
export default UxCalendar;

export { }
