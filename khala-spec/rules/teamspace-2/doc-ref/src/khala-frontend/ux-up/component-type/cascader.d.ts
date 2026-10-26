import { AllowedComponentProps } from 'vue';
import type { CascaderNode } from 'ux-up/es/components/cascader-panel';
import { CascaderOption } from 'ux-up/es/components/cascader-panel';
import type { CascaderPanelInstance } from 'ux-up/es/components/cascader-panel';
import { CascaderProps } from 'ux-up/es/components/cascader-panel';
import type { CascaderValue as CascaderValue_2 } from 'ux-up/es/components/cascader-panel';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { Placement } from 'ux-up/es/components/popper';
import { PopperEffect } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import type { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { Tag } from 'ux-up/es/components/cascader-panel';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placeholder: StringConstructor;
disabled: BooleanConstructor;
clearable: BooleanConstructor;
filterable: BooleanConstructor;
filterMethod: EpPropFinalized<(new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
(): (node: CascaderNode, keyword: string) => boolean;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
(): (node: CascaderNode, keyword: string) => boolean;
new (): any;
readonly prototype: any;
})[], unknown, unknown, (node: CascaderNode, keyword: string) => boolean, boolean>;
separator: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
showAllLevels: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
collapseTags: BooleanConstructor;
maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
collapseTagsTooltip: BooleanConstructor;
maxCollapseTagsTooltipHeight: {
readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
debounce: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
beforeFilter: EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
(): (value: string) => boolean | Promise<any>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
(): (value: string) => boolean | Promise<any>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => true, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, string, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, string[], boolean>;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, string, boolean>;
tagType: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagEffect: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
showCheckedStrategy: EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
checkOnClickNode: BooleanConstructor;
showPrefix: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
}, {
/**
* @description get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false`
*/
getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
/**
* @description cascader panel ref
*/
cascaderPanelRef: Ref<CascaderPanelInstance | null, CascaderPanelInstance | null>;
/**
* @description toggle the visible of popper
*/
togglePopperVisible: (visible?: boolean) => void;
/**
* @description cascader content ref
*/
contentRef: ComputedRef<HTMLElement | undefined>;
/**
* @description selected content text
*/
presentText: ComputedRef<string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
clear: () => void;
"update:modelValue": (value: CascaderValue_2 | null | undefined) => void;
change: (value: CascaderValue_2 | null | undefined) => void;
blur: (evt: FocusEvent) => void;
focus: (evt: FocusEvent) => void;
visibleChange: (val: boolean) => void;
expandChange: (val: CascaderValue_2) => void;
removeTag: (val: CascaderNodeValue | CascaderNodePathValue) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placeholder: StringConstructor;
disabled: BooleanConstructor;
clearable: BooleanConstructor;
filterable: BooleanConstructor;
filterMethod: EpPropFinalized<(new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
(): (node: CascaderNode, keyword: string) => boolean;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
(): (node: CascaderNode, keyword: string) => boolean;
new (): any;
readonly prototype: any;
})[], unknown, unknown, (node: CascaderNode, keyword: string) => boolean, boolean>;
separator: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
showAllLevels: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
collapseTags: BooleanConstructor;
maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
collapseTagsTooltip: BooleanConstructor;
maxCollapseTagsTooltipHeight: {
readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
debounce: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
beforeFilter: EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
(): (value: string) => boolean | Promise<any>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
(): (value: string) => boolean | Promise<any>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => true, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, string, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, string[], boolean>;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, string, boolean>;
tagType: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagEffect: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
showCheckedStrategy: EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
checkOnClickNode: BooleanConstructor;
showPrefix: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: CascaderValue_2 | null | undefined) => any) | undefined;
onChange?: ((value: CascaderValue_2 | null | undefined) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onClear?: (() => any) | undefined;
onVisibleChange?: ((val: boolean) => any) | undefined;
onExpandChange?: ((val: CascaderValue_2) => any) | undefined;
onRemoveTag?: ((val: CascaderNodeValue | CascaderNodePathValue) => any) | undefined;
}, {
disabled: boolean;
separator: string;
props: CascaderProps;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown>;
options: CascaderOption[];
effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
clearable: boolean;
fallbackPlacements: Placement[];
popperClass: string;
teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
debounce: number;
checkOnClickNode: boolean;
showPrefix: EpPropMergeType<BooleanConstructor, unknown, unknown>;
filterable: boolean;
filterMethod: (node: CascaderNode, keyword: string) => boolean;
showAllLevels: EpPropMergeType<BooleanConstructor, unknown, unknown>;
collapseTags: boolean;
maxCollapseTags: number;
collapseTagsTooltip: boolean;
beforeFilter: (value: string) => boolean | Promise<any>;
tagType: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
tagEffect: EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
showCheckedStrategy: string;
}>;

declare function __VLS_template(): {
    prefix?(_: {}): any;
    tag?(_: {
        data: Tag[];
        deleteTag: (tag: Tag) => void;
    }): any;
    header?(_: {}): any;
    empty?(_: {}): any;
    empty?(_: {}): any;
    "suggestion-item"?(_: {
        item: CascaderNode;
    }): any;
    footer?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type CascaderEmits = typeof cascaderEmits;

export declare const cascaderEmits: {
    "update:modelValue": (value: CascaderValue_2 | null | undefined) => boolean;
    change: (value: CascaderValue_2 | null | undefined) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    visibleChange: (val: boolean) => boolean;
    expandChange: (val: CascaderValue_2) => boolean;
    removeTag: (val: CascaderNode["valueByOption"]) => boolean;
};

export declare type CascaderInstance = InstanceType<typeof _default> & unknown;

declare type CascaderNodePathValue = CascaderNodeValue[];

declare type CascaderNodeValue = string | number;

export declare const cascaderProps: {
    emptyValues: ArrayConstructor;
    valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: EpPropFinalized<(new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
    (): (node: CascaderNode, keyword: string) => boolean;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (node: CascaderNode, keyword: string) => boolean) | (() => (node: CascaderNode, keyword: string) => boolean) | {
    (): (node: CascaderNode, keyword: string) => boolean;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, (node: CascaderNode, keyword: string) => boolean, boolean>;
    separator: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showAllLevels: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    collapseTags: BooleanConstructor;
    maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    collapseTagsTooltip: BooleanConstructor;
    maxCollapseTagsTooltipHeight: {
        readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    debounce: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    beforeFilter: EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
    (): (value: string) => boolean | Promise<any>;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
    (): (value: string) => boolean | Promise<any>;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, string, boolean>;
    fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, string[], boolean>;
    popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, string, boolean>;
    tagType: {
        default: string;
        type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    showCheckedStrategy: EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    checkOnClickNode: BooleanConstructor;
    showPrefix: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]) | (() => CascaderValue | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
    props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
};

declare type CascaderValue = CascaderNodeValue | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[];

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxCascader: SFCWithInstall<typeof _default>;
export { UxCascader }
export default UxCascader;

export { }
