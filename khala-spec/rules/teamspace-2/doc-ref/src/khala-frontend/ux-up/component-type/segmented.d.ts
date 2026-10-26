import { AllowedComponentProps } from 'vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { DebuggerEvent } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { nextTick } from 'vue';
import { PropType } from 'vue';
import { SFCWithInstall } from 'ux-up/es/utils';
import { ShallowUnwrapRef } from 'vue';
import { Slots } from 'vue';
import { VNodeProps } from 'vue';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

declare const __VLS_component: DefineComponent<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: any) => void;
change: (val: any) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
}, {
disabled: boolean;
direction: EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
block: boolean;
props: Props;
modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
options: Option_2[];
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {
        item: Option_2;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const defaultProps: Required<Props>;

declare type Option_2 = Record<string, any> | string | number | boolean;

export declare interface Props {
    label?: string;
    value?: string;
    disabled?: string;
}

export declare type SegmentedEmits = typeof segmentedEmits;

export declare const segmentedEmits: {
    "update:modelValue": (val: any) => val is string | number | boolean;
    change: (val: any) => val is string | number | boolean;
};

export declare type SegmentedInstance = InstanceType<typeof _default> & unknown;

export declare type SegmentedProps = ExtractPropTypes<typeof segmentedProps>;

export declare const segmentedProps: {
    ariaLabel: StringConstructor;
    direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
    modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
    block: BooleanConstructor;
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    id: StringConstructor;
    name: StringConstructor;
};

declare const UxSegmented: SFCWithInstall<    {
new (...args: any[]): {
$: ComponentInternalInstance;
$data: {};
$props: Partial<{
disabled: boolean;
direction: EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
block: boolean;
props: Props;
modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
options: Option_2[];
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}> & Omit<Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
} & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "direction" | "block" | "props" | "modelValue" | "options" | "validateEvent">;
$attrs: {
[x: string]: unknown;
};
$refs: {
[x: string]: unknown;
};
$slots: Slots;
$root: ComponentPublicInstance | null;
$parent: ComponentPublicInstance | null;
$emit: ((event: "update:modelValue", val: any) => void) & ((event: "change", val: any) => void);
$el: any;
$options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: any) => void;
change: (val: any) => void;
}, string, {
disabled: boolean;
direction: EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
block: boolean;
props: Props;
modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
options: Option_2[];
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string> & {
beforeCreate?: (() => void) | (() => void)[];
created?: (() => void) | (() => void)[];
beforeMount?: (() => void) | (() => void)[];
mounted?: (() => void) | (() => void)[];
beforeUpdate?: (() => void) | (() => void)[];
updated?: (() => void) | (() => void)[];
activated?: (() => void) | (() => void)[];
deactivated?: (() => void) | (() => void)[];
beforeDestroy?: (() => void) | (() => void)[];
beforeUnmount?: (() => void) | (() => void)[];
destroyed?: (() => void) | (() => void)[];
unmounted?: (() => void) | (() => void)[];
renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
};
$forceUpdate: () => void;
$nextTick: nextTick;
$watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R]) => any : (...args: any) => any, options?: WatchOptions): WatchStopHandle;
} & Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
} & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties & {};
__isFragment?: never;
__isTeleport?: never;
__isSuspense?: never;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
options: EpPropFinalized<(new (...args: any[]) => Option_2[]) | (() => Option_2[]) | ((new (...args: any[]) => Option_2[]) | (() => Option_2[]))[], unknown, unknown, () => never[], boolean>;
modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
block: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
disabled: BooleanConstructor;
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
id: StringConstructor;
name: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: any) => void;
change: (val: any) => void;
}, string, {
disabled: boolean;
direction: EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
block: boolean;
props: Props;
modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
options: Option_2[];
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
$slots: {
default?(_: {
item: Option_2;
}): any;
};
})> & Record<string, any>;
export { UxSegmented }
export default UxSegmented;

export { }
