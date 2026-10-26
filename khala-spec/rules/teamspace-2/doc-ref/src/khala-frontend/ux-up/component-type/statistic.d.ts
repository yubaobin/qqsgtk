import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { Dayjs } from 'dayjs';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly decimalSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ".", boolean>;
readonly groupSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ",", boolean>;
readonly precision: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly formatter: FunctionConstructor;
readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
readonly prefix: StringConstructor;
readonly suffix: StringConstructor;
readonly title: StringConstructor;
readonly valueStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/**
* @description current display value
*/
displayValue: ComputedRef<any>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly decimalSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ".", boolean>;
readonly groupSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ",", boolean>;
readonly precision: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly formatter: FunctionConstructor;
readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
readonly prefix: StringConstructor;
readonly suffix: StringConstructor;
readonly title: StringConstructor;
readonly valueStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly value: EpPropMergeType<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown>;
readonly decimalSeparator: string;
readonly groupSeparator: string;
readonly precision: number;
}>;

declare function __VLS_template(): {
    title?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type StatisticInstance = InstanceType<typeof _default> & unknown;

export declare type StatisticProps = ExtractPropTypes<typeof statisticProps>;

export declare const statisticProps: {
    readonly decimalSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ".", boolean>;
    readonly groupSeparator: EpPropFinalized<StringConstructor, unknown, unknown, ",", boolean>;
    readonly precision: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly formatter: FunctionConstructor;
    readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
    readonly prefix: StringConstructor;
    readonly suffix: StringConstructor;
    readonly title: StringConstructor;
    readonly valueStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxStatistic: SFCWithInstall<typeof _default>;
export { UxStatistic }
export default UxStatistic;

export { }
