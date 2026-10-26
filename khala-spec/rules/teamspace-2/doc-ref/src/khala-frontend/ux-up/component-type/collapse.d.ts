import { AllowedComponentProps } from 'vue';
import type { Arrayable } from 'ux-up/es/utils';
import { Awaitable } from 'ux-up/es/utils';
import { CollapseActiveName as CollapseActiveName_2 } from 'ux-up';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly accordion: BooleanConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
readonly expandIconPosition: EpPropFinalized<(new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType) | ((new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType))[], unknown, unknown, "right", boolean>;
readonly beforeCollapse: {
readonly type: PropType<(name: CollapseActiveName) => Awaitable<boolean>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description active names */
activeNames: Ref<(string | number)[], (string | number)[]>;
/** @description set active names */
setActiveNames: (_activeNames: CollapseActiveName[]) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: CollapseModelValue) => void;
change: (value: CollapseModelValue) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly accordion: BooleanConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
readonly expandIconPosition: EpPropFinalized<(new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType) | ((new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType))[], unknown, unknown, "right", boolean>;
readonly beforeCollapse: {
readonly type: PropType<(name: CollapseActiveName) => Awaitable<boolean>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((value: CollapseModelValue) => any) | undefined;
onChange?: ((value: CollapseModelValue) => any) | undefined;
}, {
readonly modelValue: EpPropMergeType<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue))[], unknown, unknown>;
readonly expandIconPosition: EpPropMergeType<(new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType) | ((new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType))[], unknown, unknown>;
readonly accordion: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: EpPropFinalized<(new (...args: any[]) => string | number) | (() => CollapseActiveName_2) | ((new (...args: any[]) => string | number) | (() => CollapseActiveName_2))[], unknown, unknown, undefined, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}, {
/** @description current collapse-item whether active */
isActive: ComputedRef<boolean | undefined>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: EpPropFinalized<(new (...args: any[]) => string | number) | (() => CollapseActiveName_2) | ((new (...args: any[]) => string | number) | (() => CollapseActiveName_2))[], unknown, unknown, undefined, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}>>, {
readonly title: string;
readonly disabled: boolean;
readonly name: EpPropMergeType<(new (...args: any[]) => string | number) | (() => CollapseActiveName_2) | ((new (...args: any[]) => string | number) | (() => CollapseActiveName_2))[], unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    title?(_: {
        isActive: boolean | undefined;
    }): any;
    icon?(_: {
        isActive: boolean | undefined;
    }): any;
    default?(_: {}): any;
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

export declare type CollapseActiveName = string | number;

export declare interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
}

export declare const collapseContextKey: InjectionKey<CollapseContext>;

export declare type CollapseEmits = typeof collapseEmits;

export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => value is string | number | CollapseActiveName[];
    change: (value: CollapseModelValue) => value is string | number | CollapseActiveName[];
};

export declare type CollapseIconPositionType = 'left' | 'right';

export declare type CollapseInstance = InstanceType<typeof _default> & unknown;

export declare type CollapseItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;

export declare const collapseItemProps: {
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: EpPropFinalized<(new (...args: any[]) => string | number) | (() => CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => CollapseActiveName))[], unknown, unknown, undefined, boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};

export declare type CollapseModelValue = Arrayable<CollapseActiveName>;

export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;

export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly expandIconPosition: EpPropFinalized<(new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType) | ((new (...args: any[]) => "left" | "right") | (() => CollapseIconPositionType))[], unknown, unknown, "right", boolean>;
    readonly beforeCollapse: {
        readonly type: PropType<(name: CollapseActiveName) => Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

export declare const emitChangeFn: (value: CollapseModelValue) => value is string | number | CollapseActiveName[];

declare const UxCollapse: SFCWithInstall<typeof _default> & {
    CollapseItem: typeof _default_2;
};
export { UxCollapse }
export default UxCollapse;

export declare const UxCollapseItem: SFCWithInstall<typeof _default_2>;

export { }
