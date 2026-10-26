import { Alignment } from 'ux-up/es/components/virtual-list';
import { AllowedComponentProps } from 'vue';
import { CheckboxValueType } from 'ux-up';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { Mutable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { TreeNodeData as TreeNodeData_2 } from 'ux-up';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TreeData) | (() => TreeData) | ((new (...args: any[]) => TreeData) | (() => TreeData))[], unknown, unknown, () => [], boolean>;
readonly emptyText: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly props: EpPropFinalized<(new (...args: any[]) => TreeOptionProps) | (() => TreeOptionProps) | ((new (...args: any[]) => TreeOptionProps) | (() => TreeOptionProps))[], unknown, unknown, () => Mutable<    {
readonly children: import("./virtual-tree").TreeOptionsEnum.CHILDREN;
readonly label: import("./virtual-tree").TreeOptionsEnum.LABEL;
readonly disabled: import("./virtual-tree").TreeOptionsEnum.DISABLED;
readonly value: import("./virtual-tree").TreeOptionsEnum.KEY;
readonly class: import("./virtual-tree").TreeOptionsEnum.CLASS;
}>, boolean>;
readonly highlightCurrent: BooleanConstructor;
readonly showCheckbox: BooleanConstructor;
readonly defaultCheckedKeys: EpPropFinalized<(new (...args: any[]) => TreeKey[]) | (() => TreeKey[]) | ((new (...args: any[]) => TreeKey[]) | (() => TreeKey[]))[], unknown, unknown, () => [], boolean>;
readonly checkStrictly: BooleanConstructor;
readonly defaultExpandedKeys: EpPropFinalized<(new (...args: any[]) => TreeKey[]) | (() => TreeKey[]) | ((new (...args: any[]) => TreeKey[]) | (() => TreeKey[]))[], unknown, unknown, () => [], boolean>;
readonly indent: EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
readonly itemSize: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandOnClickNode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly checkOnClickNode: BooleanConstructor;
readonly checkOnClickLeaf: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly currentNodeKey: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number) | (() => TreeKey) | ((new (...args: any[]) => string | number) | (() => TreeKey))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly accordion: BooleanConstructor;
readonly filterMethod: {
readonly type: PropType<FilterMethod>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
}, {
toggleCheckbox: (node: TreeNode, isChecked: CheckboxValueType, nodeClick?: boolean, immediateUpdate?: boolean) => void;
getCurrentNode: () => TreeNodeData | undefined;
getCurrentKey: () => TreeKey | undefined;
setCurrentKey: (key: TreeKey) => void;
getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
getCheckedNodes: (leafOnly?: boolean) => TreeNodeData[];
getHalfCheckedKeys: () => TreeKey[];
getHalfCheckedNodes: () => TreeNodeData[];
setChecked: (key: TreeKey, isChecked: boolean) => void;
setCheckedKeys: (keys: TreeKey[]) => void;
filter: (query: string) => void;
setData: (data: TreeData) => void;
getNode: (data: TreeKey | TreeNodeData) => TreeNode | undefined;
expandNode: (node: TreeNode) => void;
collapseNode: (node: TreeNode) => void;
setExpandedKeys: (keys: TreeKey[]) => void;
scrollToNode: (key: TreeKey, strategy?: Alignment) => void;
scrollTo: (offset: number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
check: (data: TreeNodeData_2, checkedInfo: CheckedInfo) => void;
"current-change": (data: TreeNodeData_2, node: TreeNode) => void;
"node-drop": (data: TreeNodeData_2, node: TreeNode, e: DragEvent) => void;
"node-expand": (data: TreeNodeData_2, node: TreeNode) => void;
"check-change": (data: TreeNodeData_2, checked: boolean) => void;
"node-click": (data: TreeNodeData_2, node: TreeNode, e: MouseEvent) => void;
"node-contextmenu": (evt: Event, data: TreeNodeData_2, node: TreeNode) => void;
"node-collapse": (data: TreeNodeData_2, node: TreeNode) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly data: EpPropFinalized<(new (...args: any[]) => TreeData) | (() => TreeData) | ((new (...args: any[]) => TreeData) | (() => TreeData))[], unknown, unknown, () => [], boolean>;
readonly emptyText: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly props: EpPropFinalized<(new (...args: any[]) => TreeOptionProps) | (() => TreeOptionProps) | ((new (...args: any[]) => TreeOptionProps) | (() => TreeOptionProps))[], unknown, unknown, () => Mutable<    {
readonly children: import("./virtual-tree").TreeOptionsEnum.CHILDREN;
readonly label: import("./virtual-tree").TreeOptionsEnum.LABEL;
readonly disabled: import("./virtual-tree").TreeOptionsEnum.DISABLED;
readonly value: import("./virtual-tree").TreeOptionsEnum.KEY;
readonly class: import("./virtual-tree").TreeOptionsEnum.CLASS;
}>, boolean>;
readonly highlightCurrent: BooleanConstructor;
readonly showCheckbox: BooleanConstructor;
readonly defaultCheckedKeys: EpPropFinalized<(new (...args: any[]) => TreeKey[]) | (() => TreeKey[]) | ((new (...args: any[]) => TreeKey[]) | (() => TreeKey[]))[], unknown, unknown, () => [], boolean>;
readonly checkStrictly: BooleanConstructor;
readonly defaultExpandedKeys: EpPropFinalized<(new (...args: any[]) => TreeKey[]) | (() => TreeKey[]) | ((new (...args: any[]) => TreeKey[]) | (() => TreeKey[]))[], unknown, unknown, () => [], boolean>;
readonly indent: EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
readonly itemSize: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandOnClickNode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly checkOnClickNode: BooleanConstructor;
readonly checkOnClickLeaf: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly currentNodeKey: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | number) | (() => TreeKey) | ((new (...args: any[]) => string | number) | (() => TreeKey))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly accordion: BooleanConstructor;
readonly filterMethod: {
readonly type: PropType<FilterMethod>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
}>> & {
"onCurrent-change"?: ((data: TreeNodeData_2, node: TreeNode) => any) | undefined;
"onNode-expand"?: ((data: TreeNodeData_2, node: TreeNode) => any) | undefined;
onCheck?: ((data: TreeNodeData_2, checkedInfo: CheckedInfo) => any) | undefined;
"onNode-drop"?: ((data: TreeNodeData_2, node: TreeNode, e: DragEvent) => any) | undefined;
"onCheck-change"?: ((data: TreeNodeData_2, checked: boolean) => any) | undefined;
"onNode-click"?: ((data: TreeNodeData_2, node: TreeNode, e: MouseEvent) => any) | undefined;
"onNode-contextmenu"?: ((evt: Event, data: TreeNodeData_2, node: TreeNode) => any) | undefined;
"onNode-collapse"?: ((data: TreeNodeData_2, node: TreeNode) => any) | undefined;
}, {
readonly data: TreeData;
readonly height: number;
readonly props: TreeOptionProps;
readonly checkStrictly: boolean;
readonly checkOnClickNode: boolean;
readonly checkOnClickLeaf: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly accordion: boolean;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly scrollbarAlwaysOn: boolean;
readonly itemSize: number;
readonly indent: number;
readonly defaultCheckedKeys: TreeKey[];
readonly defaultExpandedKeys: TreeKey[];
readonly showCheckbox: boolean;
readonly expandOnClickNode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly highlightCurrent: boolean;
}>;

declare function __VLS_template(): {
    empty?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface CheckedInfo {
    checkedKeys: TreeKey[];
    checkedNodes: TreeData;
    halfCheckedKeys: TreeKey[];
    halfCheckedNodes: TreeData;
}

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare type FilterMethod = (query: string, data: TreeNodeData, node: TreeNode) => boolean;

declare type TreeData = TreeNodeData[];

declare type TreeKey = string | number;

declare interface TreeNode {
    key: TreeKey;
    level: number;
    parent?: TreeNode;
    children?: TreeNode[];
    data: TreeNodeData;
    disabled?: boolean;
    label?: string;
    isLeaf?: boolean;
    expanded?: boolean;
}

declare type TreeNodeData = Record<string, any>;

declare interface TreeOptionProps {
    children?: string;
    label?: string;
    value?: string;
    disabled?: string;
    class?: (data: TreeNodeData, node: TreeNode) => string | {
        [key: string]: boolean;
    };
}

declare const UxTreeV2: SFCWithInstall<typeof _default>;
export { UxTreeV2 }
export default UxTreeV2;

export { }
