import { AllowedComponentProps } from 'vue';
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
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
border: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
renderLabel: {
readonly type: PropType<RenderLabel_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
}, {
menuList: Ref<CascaderMenuInstance[], CascaderMenuInstance[]>;
menus: Ref<    {
readonly uid: number;
readonly level: number;
readonly value: CascaderNodeValue_2;
readonly label: string;
readonly pathNodes: any[];
readonly pathValues: CascaderNodeValue_2[];
readonly pathLabels: string[];
childrenData: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
}[] | undefined;
children: any[];
text: string;
loaded: boolean;
checked: boolean;
indeterminate: boolean;
loading: boolean;
readonly data: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
};
readonly config: {
expandTrigger: ExpandTrigger;
multiple: boolean;
checkStrictly: boolean;
emitPath: boolean;
lazy: boolean;
lazyLoad: LazyLoad_2;
value: string;
label: string;
children: string;
disabled: string | isDisabled_2;
leaf: string | isLeaf_2;
hoverThreshold: number;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
showPrefix: boolean;
};
readonly parent?: any | undefined;
readonly root: boolean;
readonly isDisabled: boolean;
readonly isLeaf: boolean;
readonly valueByOption: CascaderNodeValue_2 | CascaderNodeValue_2[];
appendChild: (childData: CascaderOption) => CascaderNode;
calcText: (allLevels: boolean, separator: string) => string;
broadcast: (checked: boolean) => void;
emit: () => void;
onParentCheck: (checked: boolean) => void;
onChildCheck: () => void;
setCheckState: (checked: boolean) => void;
doCheck: (checked: boolean) => void;
}[][], CascaderNode[][] | {
readonly uid: number;
readonly level: number;
readonly value: CascaderNodeValue_2;
readonly label: string;
readonly pathNodes: any[];
readonly pathValues: CascaderNodeValue_2[];
readonly pathLabels: string[];
childrenData: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
}[] | undefined;
children: any[];
text: string;
loaded: boolean;
checked: boolean;
indeterminate: boolean;
loading: boolean;
readonly data: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
};
readonly config: {
expandTrigger: ExpandTrigger;
multiple: boolean;
checkStrictly: boolean;
emitPath: boolean;
lazy: boolean;
lazyLoad: LazyLoad_2;
value: string;
label: string;
children: string;
disabled: string | isDisabled_2;
leaf: string | isLeaf_2;
hoverThreshold: number;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
showPrefix: boolean;
};
readonly parent?: any | undefined;
readonly root: boolean;
readonly isDisabled: boolean;
readonly isLeaf: boolean;
readonly valueByOption: CascaderNodeValue_2 | CascaderNodeValue_2[];
appendChild: (childData: CascaderOption) => CascaderNode;
calcText: (allLevels: boolean, separator: string) => string;
broadcast: (checked: boolean) => void;
emit: () => void;
onParentCheck: (checked: boolean) => void;
onChildCheck: () => void;
setCheckState: (checked: boolean) => void;
doCheck: (checked: boolean) => void;
}[][]>;
checkedNodes: Ref<    {
readonly uid: number;
readonly level: number;
readonly value: CascaderNodeValue_2;
readonly label: string;
readonly pathNodes: any[];
readonly pathValues: CascaderNodeValue_2[];
readonly pathLabels: string[];
childrenData: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
}[] | undefined;
children: any[];
text: string;
loaded: boolean;
checked: boolean;
indeterminate: boolean;
loading: boolean;
readonly data: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
};
readonly config: {
expandTrigger: ExpandTrigger;
multiple: boolean;
checkStrictly: boolean;
emitPath: boolean;
lazy: boolean;
lazyLoad: LazyLoad_2;
value: string;
label: string;
children: string;
disabled: string | isDisabled_2;
leaf: string | isLeaf_2;
hoverThreshold: number;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
showPrefix: boolean;
};
readonly parent?: any | undefined;
readonly root: boolean;
readonly isDisabled: boolean;
readonly isLeaf: boolean;
readonly valueByOption: CascaderNodeValue_2 | CascaderNodeValue_2[];
appendChild: (childData: CascaderOption) => CascaderNode;
calcText: (allLevels: boolean, separator: string) => string;
broadcast: (checked: boolean) => void;
emit: () => void;
onParentCheck: (checked: boolean) => void;
onChildCheck: () => void;
setCheckState: (checked: boolean) => void;
doCheck: (checked: boolean) => void;
}[], CascaderNode[] | {
readonly uid: number;
readonly level: number;
readonly value: CascaderNodeValue_2;
readonly label: string;
readonly pathNodes: any[];
readonly pathValues: CascaderNodeValue_2[];
readonly pathLabels: string[];
childrenData: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
}[] | undefined;
children: any[];
text: string;
loaded: boolean;
checked: boolean;
indeterminate: boolean;
loading: boolean;
readonly data: {
[x: string]: unknown;
label?: string | undefined;
value?: CascaderNodeValue_2 | undefined;
children?: any[] | undefined;
disabled?: boolean | undefined;
leaf?: boolean | undefined;
};
readonly config: {
expandTrigger: ExpandTrigger;
multiple: boolean;
checkStrictly: boolean;
emitPath: boolean;
lazy: boolean;
lazyLoad: LazyLoad_2;
value: string;
label: string;
children: string;
disabled: string | isDisabled_2;
leaf: string | isLeaf_2;
hoverThreshold: number;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
showPrefix: boolean;
};
readonly parent?: any | undefined;
readonly root: boolean;
readonly isDisabled: boolean;
readonly isLeaf: boolean;
readonly valueByOption: CascaderNodeValue_2 | CascaderNodeValue_2[];
appendChild: (childData: CascaderOption) => CascaderNode;
calcText: (allLevels: boolean, separator: string) => string;
broadcast: (checked: boolean) => void;
emit: () => void;
onParentCheck: (checked: boolean) => void;
onChildCheck: () => void;
setCheckState: (checked: boolean) => void;
doCheck: (checked: boolean) => void;
}[]>;
handleKeyDown: (e: KeyboardEvent) => void;
handleCheckChange: (node: CascaderNode, checked: boolean, emitClose?: boolean) => void;
getFlattedNodes: (leafOnly: boolean) => CascaderNode[];
/**
* @description get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false`
*/
getCheckedNodes: (leafOnly: boolean) => CascaderNode[];
/**
* @description clear checked nodes
*/
clearCheckedNodes: () => void;
calculateCheckedValue: () => void;
scrollToExpandingNode: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: CascaderValue_2 | null | undefined) => void;
change: (value: CascaderValue_2 | null | undefined) => void;
close: () => void;
"expand-change": (value: CascaderNodePathValue_2) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
border: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
renderLabel: {
readonly type: PropType<RenderLabel_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
modelValue: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: CascaderValue_2 | null | undefined) => any) | undefined;
onChange?: ((value: CascaderValue_2 | null | undefined) => any) | undefined;
onClose?: (() => any) | undefined;
"onExpand-change"?: ((value: CascaderNodePathValue_2) => any) | undefined;
}, {
border: EpPropMergeType<BooleanConstructor, unknown, unknown>;
props: CascaderProps;
options: CascaderOption[];
}>;

declare const __VLS_component_2: DefineComponent<    {
nodes: {
type: PropType<CascaderNode[]>;
required: true;
};
index: {
type: NumberConstructor;
required: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
nodes: {
type: PropType<CascaderNode[]>;
required: true;
};
index: {
type: NumberConstructor;
required: true;
};
}>>, {}>;

declare function __VLS_template(): {
    empty?(_: {}): any;
};

declare function __VLS_template_2(): {
    empty?(_: {}): any;
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

export declare const CASCADER_PANEL_INJECTION_KEY: InjectionKey<UxCascaderPanelContext>;

export declare type CascaderConfig = Required<CascaderProps>;

declare type CascaderConfig_2 = Required<CascaderProps>;

export declare type CascaderMenuInstance = InstanceType<typeof _default_2> & unknown;

export declare class CascaderNode {
    readonly data: CascaderOption;
    readonly config: CascaderConfig_2;
    readonly parent?: CascaderNode | undefined;
    readonly root: boolean;
    readonly uid: number;
    readonly level: number;
    readonly value: CascaderNodeValue_2;
    readonly label: string;
    readonly pathNodes: CascaderNode[];
    readonly pathValues: CascaderNodePathValue_2;
    readonly pathLabels: string[];
    childrenData: ChildrenData;
    children: CascaderNode[];
    text: string;
    loaded: boolean;
    /**
     * Is it checked
     *
     * @default false
     */
    checked: boolean;
    /**
     * Used to indicate the intermediate state of unchecked and fully checked child nodes
     *
     * @default false
     */
    indeterminate: boolean;
    /**
     * Loading Status
     *
     * @default false
     */
    loading: boolean;
    constructor(data: CascaderOption, config: CascaderConfig_2, parent?: CascaderNode | undefined, root?: boolean);
    get isDisabled(): boolean;
    get isLeaf(): boolean;
    get valueByOption(): CascaderNodeValue_2 | CascaderNodePathValue_2;
    appendChild(childData: CascaderOption): CascaderNode;
    calcText(allLevels: boolean, separator: string): string;
    broadcast(checked: boolean): void;
    emit(): void;
    onParentCheck(checked: boolean): void;
    onChildCheck(): void;
    setCheckState(checked: boolean): void;
    doCheck(checked: boolean): void;
}

export declare type CascaderNodePathValue = CascaderNodeValue[];

declare type CascaderNodePathValue_2 = CascaderNodeValue_2[];

export declare type CascaderNodeValue = string | number;

declare type CascaderNodeValue_2 = string | number;

export declare interface CascaderOption extends Record<string, unknown> {
    label?: string;
    value?: CascaderNodeValue_2;
    children?: CascaderOption[];
    disabled?: boolean;
    leaf?: boolean;
}

export declare const cascaderPanelEmits: {
    "update:modelValue": (value: CascaderValue_2 | undefined | null) => boolean;
    change: (value: CascaderValue_2 | undefined | null) => boolean;
    close: () => boolean;
    'expand-change': (value: CascaderNodePathValue_2) => CascaderNodePathValue_2;
};

export declare type CascaderPanelInstance = InstanceType<typeof _default> & unknown;

export declare const cascaderPanelProps: {
    border: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    renderLabel: {
        readonly type: PropType<RenderLabel_2>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
    props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
};

export declare interface CascaderProps {
    expandTrigger?: ExpandTrigger;
    multiple?: boolean;
    checkStrictly?: boolean;
    emitPath?: boolean;
    lazy?: boolean;
    lazyLoad?: LazyLoad_2;
    value?: string;
    label?: string;
    children?: string;
    disabled?: string | isDisabled_2;
    leaf?: string | isLeaf_2;
    hoverThreshold?: number;
    checkOnClickNode?: boolean;
    checkOnClickLeaf?: boolean;
    showPrefix?: boolean;
}

export declare type CascaderValue = CascaderNodeValue | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[];

declare type CascaderValue_2 = CascaderNodeValue_2 | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[];

declare type ChildrenData = CascaderOption[] | undefined;

export declare const CommonProps: {
    readonly modelValue: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null) | ((new (...args: any[]) => string | number | CascaderNodePathValue_2 | (CascaderNodeValue_2 | CascaderNodePathValue_2)[]) | (() => CascaderValue_2 | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly options: EpPropFinalized<(new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]) | ((new (...args: any[]) => CascaderOption[]) | (() => CascaderOption[]))[], unknown, unknown, () => CascaderOption[], boolean>;
    readonly props: EpPropFinalized<(new (...args: any[]) => CascaderProps) | (() => CascaderProps) | ((new (...args: any[]) => CascaderProps) | (() => CascaderProps))[], unknown, unknown, () => CascaderProps, boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template_2>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template>>;

export declare const DefaultProps: CascaderConfig_2;

export declare type ExpandTrigger = 'click' | 'hover';

export declare type isDisabled = (data: CascaderOption, node: CascaderNode) => boolean;

declare type isDisabled_2 = (data: CascaderOption, node: CascaderNode) => boolean;

export declare type isLeaf = (data: CascaderOption, node: CascaderNode) => boolean;

declare type isLeaf_2 = (data: CascaderOption, node: CascaderNode) => boolean;

export declare type LazyLoad = (node: CascaderNode, resolve: Resolve) => void;

declare type LazyLoad_2 = (node: CascaderNode, resolve: Resolve_2) => void;

export declare type RenderLabel = (props: RenderLabelProps) => VNode | VNode[];

declare type RenderLabel_2 = (props: RenderLabelProps_2) => VNode | VNode[];

export declare interface RenderLabelProps {
    node: CascaderNode;
    data: CascaderOption;
}

declare interface RenderLabelProps_2 {
    node: CascaderNode;
    data: CascaderOption;
}

export declare type Resolve = (dataList?: CascaderOption[]) => void;

declare type Resolve_2 = (dataList?: CascaderOption[]) => void;

export declare interface Tag {
    node?: CascaderNode;
    key: number;
    text: string;
    hitState?: boolean;
    closable: boolean;
    isCollapseTag: boolean;
}

export declare const useCascaderConfig: (props: {
    props: CascaderProps;
}) => ComputedRef<    {
expandTrigger: ExpandTrigger;
multiple: boolean;
checkStrictly: boolean;
emitPath: boolean;
lazy: boolean;
lazyLoad: LazyLoad_2;
value: string;
label: string;
children: string;
disabled: string | isDisabled_2;
leaf: string | isLeaf_2;
hoverThreshold: number;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
showPrefix: boolean;
}>;

declare const UxCascaderPanel: SFCWithInstall<typeof _default>;
export { UxCascaderPanel }
export default UxCascaderPanel;

export declare interface UxCascaderPanelContext {
    config: CascaderConfig;
    expandingNode: CascaderNode | undefined;
    checkedNodes: CascaderNode[];
    isHoverMenu: boolean;
    initialLoaded: boolean;
    renderLabelFn: RenderLabel;
    lazyLoad: (node?: CascaderNode, cb?: (dataList: CascaderOption[]) => void) => void;
    expandNode: (node: CascaderNode, silent?: boolean) => void;
    handleCheckChange: (node: CascaderNode, checked: boolean, emitClose?: boolean) => void;
}

export { }
