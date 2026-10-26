import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly gutter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly justify: EpPropFinalized<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown, "start", boolean>;
readonly align: {
readonly type: PropType<EpPropMergeType<StringConstructor, "top" | "bottom" | "middle", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly gutter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly justify: EpPropFinalized<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown, "start", boolean>;
readonly align: {
readonly type: PropType<EpPropMergeType<StringConstructor, "top" | "bottom" | "middle", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly justify: EpPropMergeType<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown>;
readonly tag: string;
readonly gutter: number;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const RowAlign: readonly ["top", "middle", "bottom"];

declare interface RowContext {
    gutter: ComputedRef<number>;
}

export declare const rowContextKey: InjectionKey<RowContext>;

export declare type RowInstance = InstanceType<typeof _default> & unknown;

export declare const RowJustify: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];

export declare type RowProps = ExtractPropTypes<typeof rowProps>;

export declare const rowProps: {
    readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly gutter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly justify: EpPropFinalized<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown, "start", boolean>;
    readonly align: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "top" | "bottom" | "middle", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxRow: SFCWithInstall<typeof _default>;
export { UxRow }
export default UxRow;

export { }
