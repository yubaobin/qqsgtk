import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly value: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
readonly isDot: BooleanConstructor;
readonly hidden: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "danger", boolean>;
readonly showZero: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly color: StringConstructor;
readonly badgeStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly offset: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, readonly [0, 0], boolean>;
readonly badgeClass: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description badge content */
content: ComputedRef<string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly value: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
readonly isDot: BooleanConstructor;
readonly hidden: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "danger", boolean>;
readonly showZero: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly color: StringConstructor;
readonly badgeStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly offset: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, readonly [0, 0], boolean>;
readonly badgeClass: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly hidden: boolean;
readonly offset: [number, number];
readonly value: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly type: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly max: number;
readonly showZero: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly isDot: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
    content?(_: {
        value: string;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type BadgeInstance = InstanceType<typeof _default> & unknown;

export declare type BadgeProps = ExtractPropTypes<typeof badgeProps>;

export declare const badgeProps: {
    readonly value: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
    readonly isDot: BooleanConstructor;
    readonly hidden: BooleanConstructor;
    readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "danger", boolean>;
    readonly showZero: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly color: StringConstructor;
    readonly badgeStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly offset: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, readonly [0, 0], boolean>;
    readonly badgeClass: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxBadge: SFCWithInstall<typeof _default>;
export { UxBadge }
export default UxBadge;

export { }
