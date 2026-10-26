import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { h } from 'vue';
import { Mutable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { TransferDataItem as TransferDataItem_2 } from 'ux-up';
import { TransferFormat as TransferFormat_2 } from 'ux-up';
import { TransferKey as TransferKey_2 } from 'ux-up';
import { TransferPropsAlias as TransferPropsAlias_2 } from 'ux-up';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]) | ((new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
readonly titles: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
readonly buttonTexts: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
readonly filterPlaceholder: StringConstructor;
readonly filterMethod: {
readonly type: PropType<(query: string, item: TransferDataItem) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly leftDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly rightDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly renderContent: {
readonly type: PropType<renderContent>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly modelValue: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly format: EpPropFinalized<(new (...args: any[]) => TransferFormat) | (() => TransferFormat) | ((new (...args: any[]) => TransferFormat) | (() => TransferFormat))[], unknown, unknown, () => {}, boolean>;
readonly filterable: BooleanConstructor;
readonly props: EpPropFinalized<(new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias) | ((new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias))[], unknown, unknown, () => Mutable<    {
readonly label: "label";
readonly key: "key";
readonly disabled: "disabled";
}>, boolean>;
readonly targetOrder: EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly buttonSize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description clear the filter keyword of a certain panel */
clearQuery: (which: TransferDirection) => void;
/** @description left panel ref */
leftPanel: Ref<TransferPanelInstance | undefined, TransferPanelInstance | undefined>;
/** @description right panel ref */
rightPanel: Ref<TransferPanelInstance | undefined, TransferPanelInstance | undefined>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: TransferKey[]) => void;
change: (value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void;
"left-check-change": (value: TransferKey[], movedKeys?: TransferKey[] | undefined) => void;
"right-check-change": (value: TransferKey[], movedKeys?: TransferKey[] | undefined) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]) | ((new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
readonly titles: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
readonly buttonTexts: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
readonly filterPlaceholder: StringConstructor;
readonly filterMethod: {
readonly type: PropType<(query: string, item: TransferDataItem) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly leftDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly rightDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly renderContent: {
readonly type: PropType<renderContent>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly modelValue: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
readonly format: EpPropFinalized<(new (...args: any[]) => TransferFormat) | (() => TransferFormat) | ((new (...args: any[]) => TransferFormat) | (() => TransferFormat))[], unknown, unknown, () => {}, boolean>;
readonly filterable: BooleanConstructor;
readonly props: EpPropFinalized<(new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias) | ((new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias))[], unknown, unknown, () => Mutable<    {
readonly label: "label";
readonly key: "key";
readonly disabled: "disabled";
}>, boolean>;
readonly targetOrder: EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly buttonSize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((value: TransferKey[]) => any) | undefined;
onChange?: ((value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => any) | undefined;
"onLeft-check-change"?: ((value: TransferKey[], movedKeys?: TransferKey[] | undefined) => any) | undefined;
"onRight-check-change"?: ((value: TransferKey[], movedKeys?: TransferKey[] | undefined) => any) | undefined;
}, {
readonly data: TransferDataItem[];
readonly props: TransferPropsAlias;
readonly titles: [string, string];
readonly modelValue: TransferKey[];
readonly format: TransferFormat;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly filterable: boolean;
readonly buttonTexts: [string, string];
readonly leftDefaultChecked: TransferKey[];
readonly rightDefaultChecked: TransferKey[];
readonly targetOrder: EpPropMergeType<StringConstructor, "push" | "unshift" | "original", unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TransferDataItem_2[]) | (() => TransferDataItem_2[]) | ((new (...args: any[]) => TransferDataItem_2[]) | (() => TransferDataItem_2[]))[], unknown, unknown, () => never[], boolean>;
readonly optionRender: {
readonly type: PropType<(option: TransferDataItem_2) => VNode | VNode[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: StringConstructor;
readonly title: StringConstructor;
readonly filterable: BooleanConstructor;
readonly format: EpPropFinalized<(new (...args: any[]) => TransferFormat_2) | (() => TransferFormat_2) | ((new (...args: any[]) => TransferFormat_2) | (() => TransferFormat_2))[], unknown, unknown, () => {}, boolean>;
readonly filterMethod: {
readonly type: PropType<(query: string, item: TransferDataItem_2) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly defaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey_2[]) | (() => TransferKey_2[]) | ((new (...args: any[]) => TransferKey_2[]) | (() => TransferKey_2[]))[], unknown, unknown, () => never[], boolean>;
readonly props: EpPropFinalized<(new (...args: any[]) => TransferPropsAlias_2) | (() => TransferPropsAlias_2) | ((new (...args: any[]) => TransferPropsAlias_2) | (() => TransferPropsAlias_2))[], unknown, unknown, () => Mutable<    {
readonly label: "label";
readonly key: "key";
readonly disabled: "disabled";
}>, boolean>;
}, {
/** @description filter keyword */
query: Ref<string, string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"checked-change": (value: TransferKey_2[], movedKeys?: TransferKey_2[] | undefined) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TransferDataItem_2[]) | (() => TransferDataItem_2[]) | ((new (...args: any[]) => TransferDataItem_2[]) | (() => TransferDataItem_2[]))[], unknown, unknown, () => never[], boolean>;
readonly optionRender: {
readonly type: PropType<(option: TransferDataItem_2) => VNode | VNode[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: StringConstructor;
readonly title: StringConstructor;
readonly filterable: BooleanConstructor;
readonly format: EpPropFinalized<(new (...args: any[]) => TransferFormat_2) | (() => TransferFormat_2) | ((new (...args: any[]) => TransferFormat_2) | (() => TransferFormat_2))[], unknown, unknown, () => {}, boolean>;
readonly filterMethod: {
readonly type: PropType<(query: string, item: TransferDataItem_2) => boolean>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly defaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey_2[]) | (() => TransferKey_2[]) | ((new (...args: any[]) => TransferKey_2[]) | (() => TransferKey_2[]))[], unknown, unknown, () => never[], boolean>;
readonly props: EpPropFinalized<(new (...args: any[]) => TransferPropsAlias_2) | (() => TransferPropsAlias_2) | ((new (...args: any[]) => TransferPropsAlias_2) | (() => TransferPropsAlias_2))[], unknown, unknown, () => Mutable<    {
readonly label: "label";
readonly key: "key";
readonly disabled: "disabled";
}>, boolean>;
}>> & {
"onChecked-change"?: ((value: TransferKey_2[], movedKeys?: TransferKey_2[] | undefined) => any) | undefined;
}, {
readonly data: TransferDataItem_2[];
readonly props: TransferPropsAlias_2;
readonly format: TransferFormat_2;
readonly filterable: boolean;
readonly defaultChecked: TransferKey_2[];
}>;

declare function __VLS_template(): {
    empty?(_: {}): any;
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    "left-empty"?(_: {}): any;
    "left-footer"?(_: {}): any;
    "right-empty"?(_: {}): any;
    "right-footer"?(_: {}): any;
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

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template_2>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template>>;

export declare const LEFT_CHECK_CHANGE_EVENT = "left-check-change";

export declare type renderContent = (h: typeof h, option: TransferDataItem) => VNode | VNode[];

export declare const RIGHT_CHECK_CHANGE_EVENT = "right-check-change";

export declare const transferCheckedChangeFn: (value: TransferKey[], movedKeys?: TransferKey[]) => boolean;

export declare interface TransferCheckedState {
    leftChecked: TransferKey[];
    rightChecked: TransferKey[];
}

export declare type TransferDataItem = Record<string, any>;

export declare type TransferDirection = 'left' | 'right';

export declare type TransferEmits = typeof transferEmits;

export declare const transferEmits: {
    change: (value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => boolean;
    "update:modelValue": (value: TransferKey[]) => boolean;
    "left-check-change": (value: TransferKey[], movedKeys?: TransferKey[]) => boolean;
    "right-check-change": (value: TransferKey[], movedKeys?: TransferKey[]) => boolean;
};

export declare interface TransferFormat {
    noChecked?: string;
    hasChecked?: string;
}

export declare type TransferInstance = InstanceType<typeof _default> & unknown;

export declare type TransferKey = string | number;

declare type TransferPanelInstance = InstanceType<typeof _default_2> & unknown;

export declare type TransferProps = ExtractPropTypes<typeof transferProps>;

export declare const transferProps: {
    readonly data: EpPropFinalized<(new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]) | ((new (...args: any[]) => TransferDataItem[]) | (() => TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
    readonly titles: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly buttonTexts: EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly filterPlaceholder: StringConstructor;
    readonly filterMethod: {
        readonly type: PropType<(query: string, item: TransferDataItem) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly leftDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly rightDefaultChecked: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly renderContent: {
        readonly type: PropType<renderContent>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => TransferKey[]) | (() => TransferKey[]) | ((new (...args: any[]) => TransferKey[]) | (() => TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly format: EpPropFinalized<(new (...args: any[]) => TransferFormat) | (() => TransferFormat) | ((new (...args: any[]) => TransferFormat) | (() => TransferFormat))[], unknown, unknown, () => {}, boolean>;
    readonly filterable: BooleanConstructor;
    readonly props: EpPropFinalized<(new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias) | ((new (...args: any[]) => TransferPropsAlias) | (() => TransferPropsAlias))[], unknown, unknown, () => Mutable<    {
    readonly label: "label";
    readonly key: "key";
    readonly disabled: "disabled";
    }>, boolean>;
    readonly targetOrder: EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly buttonSize: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare interface TransferPropsAlias {
    label?: string;
    key?: string;
    disabled?: string;
}

declare const UxTransfer: SFCWithInstall<typeof _default>;
export { UxTransfer }
export default UxTransfer;

export { }
