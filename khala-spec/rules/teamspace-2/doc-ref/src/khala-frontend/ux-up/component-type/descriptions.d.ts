import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { Slot } from 'vue';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly border: BooleanConstructor;
readonly column: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly extra: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly border: BooleanConstructor;
readonly column: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly extra: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}>>, {
readonly title: string;
readonly direction: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly border: boolean;
readonly column: number;
readonly labelWidth: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly extra: string;
}>;

declare function __VLS_template(): {
    title?(_: {}): any;
    extra?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type DescriptionInstance = InstanceType<typeof _default> & unknown;

declare const DescriptionItem: DefineComponent<    {
label: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
span: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
rowspan: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
width: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
minWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
labelWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
align: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
labelAlign: EpPropFinalized<StringConstructor, unknown, unknown, readonly ["left", "center", "right"], boolean>;
className: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
labelClassName: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
label: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
span: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
rowspan: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
width: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
minWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
labelWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
align: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
labelAlign: EpPropFinalized<StringConstructor, unknown, unknown, readonly ["left", "center", "right"], boolean>;
className: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
labelClassName: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}>>, {
label: string;
span: number;
width: EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>;
minWidth: EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>;
className: string;
labelWidth: EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>;
align: string;
rowspan: number;
labelAlign: string;
labelClassName: string;
}>;

export declare type DescriptionItemProps = ExtractPropTypes<typeof descriptionItemProps>;

export declare const descriptionItemProps: {
    label: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    span: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    rowspan: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    width: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    minWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    labelWidth: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    align: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    labelAlign: EpPropFinalized<StringConstructor, unknown, unknown, readonly ["left", "center", "right"], boolean>;
    className: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    labelClassName: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
};

export declare type DescriptionItemVNode = VNode & {
    children: {
        [name: string]: Slot;
    } | null;
    props: Partial<DescriptionItemProps> | null;
};

export declare type DescriptionProps = ExtractPropTypes<typeof descriptionProps>;

export declare const descriptionProps: {
    readonly border: BooleanConstructor;
    readonly column: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly labelWidth: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
};

declare const UxDescriptions: SFCWithInstall<typeof _default> & {
    DescriptionsItem: typeof DescriptionItem;
};
export { UxDescriptions }
export default UxDescriptions;

export declare const UxDescriptionsItem: SFCWithInstall<typeof DescriptionItem>;

export { }
