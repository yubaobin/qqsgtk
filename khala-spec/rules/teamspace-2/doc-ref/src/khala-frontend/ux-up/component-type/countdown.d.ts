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
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
readonly prefix: StringConstructor;
readonly suffix: StringConstructor;
readonly title: StringConstructor;
readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
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
displayValue: ComputedRef<string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: number) => void;
finish: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
readonly prefix: StringConstructor;
readonly suffix: StringConstructor;
readonly title: StringConstructor;
readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
readonly valueStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onChange?: ((value: number) => any) | undefined;
onFinish?: (() => any) | undefined;
}, {
readonly value: EpPropMergeType<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown>;
readonly format: string;
}>;

declare function __VLS_template(): Partial<Record<NonNullable<string | number>, (_: {}) => any>>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type CountdownEmits = typeof countdownEmits;

export declare const countdownEmits: {
    finish: () => boolean;
    change: (value: number) => boolean;
};

export declare type CountdownInstance = InstanceType<typeof _default> & unknown;

export declare type CountdownProps = ExtractPropTypes<typeof countdownProps>;

export declare const countdownProps: {
    readonly format: EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly prefix: StringConstructor;
    readonly suffix: StringConstructor;
    readonly title: StringConstructor;
    readonly value: EpPropFinalized<(new (...args: any[]) => number | Dayjs) | (() => number | Dayjs) | ((new (...args: any[]) => number | Dayjs) | (() => number | Dayjs))[], unknown, unknown, 0, boolean>;
    readonly valueStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxCountdown: SFCWithInstall<typeof _default>;
export { UxCountdown }
export default UxCountdown;

export { }
