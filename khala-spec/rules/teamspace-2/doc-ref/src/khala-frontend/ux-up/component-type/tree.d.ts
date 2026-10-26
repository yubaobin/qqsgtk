import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { h } from 'vue';
import type { Nullable } from 'ux-up/es/utils';
import type { PropType } from 'vue';
import { Ref } from 'vue';
import type { SetupContext } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { Translator } from 'ux-up/es/hooks';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare type AllowDragFunction = (node: Node_2) => boolean;

export declare type AllowDropFunction = (draggingNode: Node_2, dropNode: Node_2, type: AllowDropType) => boolean;

export declare type AllowDropType = 'inner' | 'prev' | 'next';

declare const _default: DefineComponent<    {
data: {
type: PropType<TreeData>;
default: () => never[];
};
emptyText: {
type: StringConstructor;
};
renderAfterExpand: {
type: BooleanConstructor;
default: boolean;
};
nodeKey: StringConstructor;
checkStrictly: BooleanConstructor;
setStrictly: BooleanConstructor;
defaultExpandAll: BooleanConstructor;
expandOnClickNode: {
type: BooleanConstructor;
default: boolean;
};
checkOnClickNode: BooleanConstructor;
checkOnClickLeaf: {
type: BooleanConstructor;
default: boolean;
};
checkDescendants: BooleanConstructor;
autoExpandParent: {
type: BooleanConstructor;
default: boolean;
};
defaultCheckedKeys: PropType<TreeComponentProps["defaultCheckedKeys"]>;
defaultExpandedKeys: PropType<TreeComponentProps["defaultExpandedKeys"]>;
currentNodeKey: PropType<string | number>;
renderContent: {
type: PropType<RenderContentFunction>;
};
showCheckbox: BooleanConstructor;
draggable: BooleanConstructor;
allowDrag: {
type: PropType<AllowDragFunction>;
};
allowDrop: {
type: PropType<AllowDropFunction>;
};
props: {
type: PropType<TreeComponentProps["props"]>;
default: () => {
children: string;
label: string;
disabled: string;
};
};
lazy: BooleanConstructor;
highlightCurrent: BooleanConstructor;
load: PropType<TreeComponentProps["load"]>;
filterNodeMethod: PropType<TreeComponentProps["filterNodeMethod"]>;
accordion: BooleanConstructor;
indent: {
type: NumberConstructor;
default: number;
};
icon: {
type: PropType<string | Component>;
};
}, {
ns: {
namespace: ComputedRef<string>;
b: (blockSuffix?: string) => string;
e: (element?: string) => string;
m: (modifier?: string) => string;
be: (blockSuffix?: string, element?: string) => string;
em: (element?: string, modifier?: string) => string;
bm: (blockSuffix?: string, modifier?: string) => string;
bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
is: {
(name: string, state: boolean | undefined): string;
(name: string): string;
};
cssVar: (object: Record<string, string>) => Record<string, string>;
cssVarName: (name: string) => string;
cssVarBlock: (object: Record<string, string>) => Record<string, string>;
cssVarBlockName: (name: string) => string;
};
store: Ref<    {
currentNode: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
} | null;
currentNodeKey: TreeKey | null;
nodesMap: TreeStoreNodesMap;
root: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
data: TreeNodeData[];
lazy: boolean;
load?: LoadFunction | undefined;
filterNodeMethod?: FilterNodeMethodFunction | undefined;
key: TreeKey;
defaultCheckedKeys?: TreeKey[] | undefined;
checkStrictly: boolean;
setStrictly: boolean;
defaultExpandedKeys?: TreeKey[] | undefined;
autoExpandParent: boolean;
defaultExpandAll: boolean;
checkDescendants: boolean;
props: {
children?: string | undefined;
label?: (string | ((data: TreeNodeData, node: Node_2) => string)) | undefined;
disabled?: (string | ((data: TreeNodeData, node: Node_2) => boolean)) | undefined;
isLeaf?: (string | ((data: TreeNodeData, node: Node_2) => boolean)) | undefined;
class?: ((data: TreeNodeData, node: Node_2) => string | {
[key: string]: boolean;
}) | undefined;
};
initialize: () => void;
filter: (value: FilterValue) => void;
setData: (newVal: TreeData) => void;
getNode: (data: TreeKey | TreeNodeData | Node_2) => Node_2;
insertBefore: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2) => void;
insertAfter: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2) => void;
remove: (data: TreeNodeData | Node_2) => void;
append: (data: TreeNodeData, parentData: TreeNodeData | TreeKey | Node_2) => void;
_initDefaultCheckedNodes: () => void;
_initDefaultCheckedNode: (node: Node_2) => void;
setDefaultCheckedKey: (newVal: TreeKey[]) => void;
registerNode: (node: Node_2) => void;
deregisterNode: (node: Node_2) => void;
getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
getCheckedKeys: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeKey[];
getHalfCheckedNodes: () => TreeNodeData[];
getHalfCheckedKeys: () => TreeKey[];
_getAllNodes: () => Node_2[];
updateChildren: (key: TreeKey, data: TreeData) => void;
_setCheckedKeys: (key: TreeKey, leafOnly: boolean | undefined, checkedKeys: {
[key: string]: boolean;
}) => void;
setCheckedNodes: (array: Node_2[], leafOnly?: boolean) => void;
setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
setDefaultExpandedKeys: (keys: TreeKey[]) => void;
setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
getCurrentNode: () => Node_2 | null;
setCurrentNode: (currentNode: Node_2) => void;
setUserCurrentNode: (node: Node_2, shouldAutoExpandParent?: boolean) => void;
setCurrentNodeKey: (key: TreeKey | null, shouldAutoExpandParent?: boolean) => void;
}, TreeStore | {
currentNode: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
} | null;
currentNodeKey: TreeKey | null;
nodesMap: TreeStoreNodesMap;
root: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
data: TreeNodeData[];
lazy: boolean;
load?: LoadFunction | undefined;
filterNodeMethod?: FilterNodeMethodFunction | undefined;
key: TreeKey;
defaultCheckedKeys?: TreeKey[] | undefined;
checkStrictly: boolean;
setStrictly: boolean;
defaultExpandedKeys?: TreeKey[] | undefined;
autoExpandParent: boolean;
defaultExpandAll: boolean;
checkDescendants: boolean;
props: {
children?: string | undefined;
label?: (string | ((data: TreeNodeData, node: Node_2) => string)) | undefined;
disabled?: (string | ((data: TreeNodeData, node: Node_2) => boolean)) | undefined;
isLeaf?: (string | ((data: TreeNodeData, node: Node_2) => boolean)) | undefined;
class?: ((data: TreeNodeData, node: Node_2) => string | {
[key: string]: boolean;
}) | undefined;
};
initialize: () => void;
filter: (value: FilterValue) => void;
setData: (newVal: TreeData) => void;
getNode: (data: TreeKey | TreeNodeData | Node_2) => Node_2;
insertBefore: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2) => void;
insertAfter: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2) => void;
remove: (data: TreeNodeData | Node_2) => void;
append: (data: TreeNodeData, parentData: TreeNodeData | TreeKey | Node_2) => void;
_initDefaultCheckedNodes: () => void;
_initDefaultCheckedNode: (node: Node_2) => void;
setDefaultCheckedKey: (newVal: TreeKey[]) => void;
registerNode: (node: Node_2) => void;
deregisterNode: (node: Node_2) => void;
getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
getCheckedKeys: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeKey[];
getHalfCheckedNodes: () => TreeNodeData[];
getHalfCheckedKeys: () => TreeKey[];
_getAllNodes: () => Node_2[];
updateChildren: (key: TreeKey, data: TreeData) => void;
_setCheckedKeys: (key: TreeKey, leafOnly: boolean | undefined, checkedKeys: {
[key: string]: boolean;
}) => void;
setCheckedNodes: (array: Node_2[], leafOnly?: boolean) => void;
setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
setDefaultExpandedKeys: (keys: TreeKey[]) => void;
setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
getCurrentNode: () => Node_2 | null;
setCurrentNode: (currentNode: Node_2) => void;
setUserCurrentNode: (node: Node_2, shouldAutoExpandParent?: boolean) => void;
setCurrentNodeKey: (key: TreeKey | null, shouldAutoExpandParent?: boolean) => void;
}>;
root: Ref<    {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
}, Node_2 | {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
}>;
currentNode: Ref<    {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
} | null, Node_2 | {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
} | null>;
dragState: Ref<    {
allowDrop: boolean;
dropType: NodeDropType | null;
draggingNode: {
node: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
$el?: HTMLElement | undefined;
} | null;
showDropIndicator: boolean;
dropNode: {
node: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
$el?: HTMLElement | undefined;
} | null;
}, {
allowDrop: boolean;
dropType: NodeDropType | null;
draggingNode: TreeNode | null;
showDropIndicator: boolean;
dropNode: TreeNode | null;
} | {
allowDrop: boolean;
dropType: NodeDropType | null;
draggingNode: {
node: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
$el?: HTMLElement | undefined;
} | null;
showDropIndicator: boolean;
dropNode: {
node: {
id: number;
text: string | null;
checked: boolean;
indeterminate: boolean;
data: TreeNodeData;
expanded: boolean;
parent: any | null;
visible: boolean;
isCurrent: boolean;
store: any;
isLeafByUser: boolean | undefined;
isLeaf: boolean | undefined;
canFocus: boolean;
level: number;
loaded: boolean;
childNodes: any[];
loading: boolean;
initialize: () => void;
setData: (data: TreeNodeData) => void;
readonly label: string;
readonly key: TreeKey | null | undefined;
readonly disabled: boolean;
readonly nextSibling: any | null;
readonly previousSibling: any | null;
contains: (target: Node_2, deep?: boolean) => boolean;
remove: () => void;
insertChild: (child?: FakeNode | Node_2, index?: number, batch?: boolean) => void;
insertBefore: (child: FakeNode | Node_2, ref: Node_2) => void;
insertAfter: (child: FakeNode | Node_2, ref: Node_2) => void;
removeChild: (child: Node_2) => void;
removeChildByData: (data: TreeNodeData | null) => void;
expand: (callback?: (() => void) | null, expandParent?: boolean) => void;
doCreateChildren: (array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps) => void;
collapse: () => void;
shouldLoadData: () => boolean;
updateLeafState: () => void;
setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any) => void;
getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[] | null;
updateChildren: () => void;
loadData: (callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps) => void;
eachNode: (callback: (node: Node_2) => void) => void;
reInitChecked: () => void;
};
$el?: HTMLElement | undefined;
} | null;
}>;
el$: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
dropIndicator$: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
isEmpty: ComputedRef<boolean>;
filter: (value: FilterValue) => void;
getNodeKey: (node: Node_2) => any;
getNodePath: (data: TreeKey | TreeNodeData) => TreeNodeData[];
getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
getCheckedKeys: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeKey[];
getCurrentNode: () => TreeNodeData | null;
getCurrentKey: () => TreeKey | null;
setCheckedNodes: (nodes: Node_2[], leafOnly?: boolean) => void;
setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
getHalfCheckedNodes: () => TreeNodeData[];
getHalfCheckedKeys: () => TreeKey[];
setCurrentNode: (node: Node_2, shouldAutoExpandParent?: boolean) => void;
setCurrentKey: (key?: TreeKey, shouldAutoExpandParent?: boolean) => void;
t: Translator;
getNode: (data: TreeKey | TreeNodeData) => Node_2;
remove: (data: TreeNodeData | Node_2) => void;
append: (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node_2) => void;
insertBefore: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node_2) => void;
insertAfter: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node_2) => void;
handleNodeExpand: (nodeData: TreeNodeData, node: Node_2, instance: ComponentInternalInstance) => void;
updateKeyChildren: (key: TreeKey, data: TreeData) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, string[], string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
data: {
type: PropType<TreeData>;
default: () => never[];
};
emptyText: {
type: StringConstructor;
};
renderAfterExpand: {
type: BooleanConstructor;
default: boolean;
};
nodeKey: StringConstructor;
checkStrictly: BooleanConstructor;
setStrictly: BooleanConstructor;
defaultExpandAll: BooleanConstructor;
expandOnClickNode: {
type: BooleanConstructor;
default: boolean;
};
checkOnClickNode: BooleanConstructor;
checkOnClickLeaf: {
type: BooleanConstructor;
default: boolean;
};
checkDescendants: BooleanConstructor;
autoExpandParent: {
type: BooleanConstructor;
default: boolean;
};
defaultCheckedKeys: PropType<TreeComponentProps["defaultCheckedKeys"]>;
defaultExpandedKeys: PropType<TreeComponentProps["defaultExpandedKeys"]>;
currentNodeKey: PropType<string | number>;
renderContent: {
type: PropType<RenderContentFunction>;
};
showCheckbox: BooleanConstructor;
draggable: BooleanConstructor;
allowDrag: {
type: PropType<AllowDragFunction>;
};
allowDrop: {
type: PropType<AllowDropFunction>;
};
props: {
type: PropType<TreeComponentProps["props"]>;
default: () => {
children: string;
label: string;
disabled: string;
};
};
lazy: BooleanConstructor;
highlightCurrent: BooleanConstructor;
load: PropType<TreeComponentProps["load"]>;
filterNodeMethod: PropType<TreeComponentProps["filterNodeMethod"]>;
accordion: BooleanConstructor;
indent: {
type: NumberConstructor;
default: number;
};
icon: {
type: PropType<string | Component>;
};
}>> & {
[x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
data: TreeData;
props: TreeOptionProps;
checkStrictly: boolean;
lazy: boolean;
checkOnClickNode: boolean;
checkOnClickLeaf: boolean;
accordion: boolean;
draggable: boolean;
defaultExpandAll: boolean;
indent: number;
setStrictly: boolean;
autoExpandParent: boolean;
checkDescendants: boolean;
renderAfterExpand: boolean;
showCheckbox: boolean;
expandOnClickNode: boolean;
highlightCurrent: boolean;
}>;

export declare interface FakeNode {
    data: TreeNodeData;
}

export declare type FilterNodeMethodFunction = (value: FilterValue, data: TreeNodeData, child: Node_2) => boolean;

export declare type FilterValue = any;

export declare type hType = typeof h;

export declare type LoadFunction = (rootNode: Node_2, loadedCallback: (data: TreeData) => void, stopLoading: () => void) => void;

declare class Node_2 {
    id: number;
    text: string | null;
    checked: boolean;
    indeterminate: boolean;
    data: TreeNodeData;
    expanded: boolean;
    parent: Node_2 | null;
    visible: boolean;
    isCurrent: boolean;
    store: TreeStore;
    isLeafByUser: boolean | undefined;
    isLeaf: boolean | undefined;
    canFocus: boolean;
    level: number;
    loaded: boolean;
    childNodes: Node_2[];
    loading: boolean;
    constructor(options: TreeNodeOptions);
    initialize(): void;
    setData(data: TreeNodeData): void;
    get label(): string;
    get key(): TreeKey | null | undefined;
    get disabled(): boolean;
    get nextSibling(): Nullable<Node_2>;
    get previousSibling(): Nullable<Node_2>;
    contains(target: Node_2, deep?: boolean): boolean;
    remove(): void;
    insertChild(child?: FakeNode | Node_2, index?: number, batch?: boolean): void;
    insertBefore(child: FakeNode | Node_2, ref: Node_2): void;
    insertAfter(child: FakeNode | Node_2, ref: Node_2): void;
    removeChild(child: Node_2): void;
    removeChildByData(data: TreeNodeData | null): void;
    expand(callback?: (() => void) | null, expandParent?: boolean): void;
    doCreateChildren(array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps): void;
    collapse(): void;
    shouldLoadData(): boolean;
    updateLeafState(): void;
    setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean, evt?: any): void;
    getChildren(forceInit?: boolean): TreeNodeData | TreeNodeData[] | null;
    updateChildren(): void;
    loadData(callback: (data?: TreeNodeData[]) => void, defaultProps?: TreeNodeLoadedDefaultProps): void;
    eachNode(callback: (node: Node_2) => void): void;
    reInitChecked(): void;
}

export declare const NODE_INSTANCE_INJECTION_KEY = "NodeInstance";

export declare type NodeDropType = 'before' | 'after' | 'inner' | 'none';

export declare interface RenderContentContext {
    _self: ComponentInternalInstance;
    node: Node_2;
    data: TreeNodeData;
    store: TreeStore;
}

export declare type RenderContentFunction = (h: hType, context: RenderContentContext) => VNode | VNode[];

export declare const ROOT_TREE_INJECTION_KEY = "RootTree";

export declare interface RootTreeType {
    ctx: SetupContext<any>;
    props: TreeComponentProps;
    store: Ref<TreeStore>;
    root: Ref<Node_2>;
    currentNode: Ref<Node_2>;
    instance: ComponentInternalInstance;
}

export declare const TREE_NODE_MAP_INJECTION_KEY = "TreeNodeMap";

export declare interface TreeComponentProps {
    data: TreeData;
    emptyText: string;
    renderAfterExpand: boolean;
    nodeKey: string;
    checkStrictly: boolean;
    expandOnClickNode: boolean;
    defaultExpandAll: boolean;
    checkOnClickNode: boolean;
    checkOnClickLeaf: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    defaultCheckedKeys: TreeKey[];
    defaultExpandedKeys: TreeKey[];
    currentNodeKey: TreeKey;
    renderContent: RenderContentFunction;
    showCheckbox: boolean;
    draggable: boolean;
    allowDrag: AllowDragFunction;
    allowDrop: AllowDropFunction;
    props: TreeOptionProps;
    lazy: boolean;
    highlightCurrent: boolean;
    load: LoadFunction;
    filterNodeMethod: FilterNodeMethodFunction;
    accordion: boolean;
    indent: number;
    icon: string | Component;
}

export declare type TreeData = TreeNodeData[];

export declare type TreeInstance = InstanceType<typeof _default> & unknown;

export declare type TreeKey = string | number;

declare interface TreeNode {
    node: Node_2;
    $el?: HTMLElement;
}

export declare interface TreeNodeChildState {
    all: boolean;
    none: boolean;
    allWithoutDisable: boolean;
    half: boolean;
}

export declare type TreeNodeData = Record<string, any>;

export declare interface TreeNodeLoadedDefaultProps {
    checked?: boolean;
}

export declare interface TreeNodeOptions {
    data: TreeNodeData;
    store: TreeStore;
    parent?: Node_2;
}

export declare interface TreeOptionProps {
    children?: string;
    label?: string | ((data: TreeNodeData, node: Node_2) => string);
    disabled?: string | ((data: TreeNodeData, node: Node_2) => boolean);
    isLeaf?: string | ((data: TreeNodeData, node: Node_2) => boolean);
    class?: (data: TreeNodeData, node: Node_2) => string | {
        [key: string]: boolean;
    };
}

declare class TreeStore {
    currentNode: Node_2 | null;
    currentNodeKey: TreeKey | null;
    nodesMap: TreeStoreNodesMap;
    root: Node_2;
    data: TreeData;
    lazy: boolean;
    load?: LoadFunction;
    filterNodeMethod?: FilterNodeMethodFunction;
    key: TreeKey;
    defaultCheckedKeys?: TreeKey[];
    checkStrictly: boolean;
    setStrictly: boolean;
    defaultExpandedKeys?: TreeKey[];
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    checkDescendants: boolean;
    props: TreeOptionProps;
    constructor(options: TreeStoreOptions);
    initialize(): void;
    filter(value: FilterValue): void;
    setData(newVal: TreeData): void;
    getNode(data: TreeKey | TreeNodeData | Node_2): Node_2;
    insertBefore(data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2): void;
    insertAfter(data: TreeNodeData, refData: TreeKey | TreeNodeData | Node_2): void;
    remove(data: TreeNodeData | Node_2): void;
    append(data: TreeNodeData, parentData: TreeNodeData | TreeKey | Node_2): void;
    _initDefaultCheckedNodes(): void;
    _initDefaultCheckedNode(node: Node_2): void;
    setDefaultCheckedKey(newVal: TreeKey[]): void;
    registerNode(node: Node_2): void;
    deregisterNode(node: Node_2): void;
    getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): TreeNodeData[];
    getCheckedKeys(leafOnly?: boolean, includeHalfChecked?: boolean): TreeKey[];
    getHalfCheckedNodes(): TreeNodeData[];
    getHalfCheckedKeys(): TreeKey[];
    _getAllNodes(): Node_2[];
    updateChildren(key: TreeKey, data: TreeData): void;
    _setCheckedKeys(key: TreeKey, leafOnly: boolean | undefined, checkedKeys: {
        [key: string]: boolean;
    }): void;
    setCheckedNodes(array: Node_2[], leafOnly?: boolean): void;
    setCheckedKeys(keys: TreeKey[], leafOnly?: boolean): void;
    setDefaultExpandedKeys(keys: TreeKey[]): void;
    setChecked(data: TreeKey | TreeNodeData, checked: boolean, deep: boolean): void;
    getCurrentNode(): Node_2 | null;
    setCurrentNode(currentNode: Node_2): void;
    setUserCurrentNode(node: Node_2, shouldAutoExpandParent?: boolean): void;
    setCurrentNodeKey(key: TreeKey | null, shouldAutoExpandParent?: boolean): void;
}

export declare interface TreeStoreNodesMap {
    [key: string]: Node_2;
}

export declare interface TreeStoreOptions {
    key?: TreeKey;
    data: TreeData;
    lazy: boolean;
    props: TreeOptionProps;
    load?: LoadFunction;
    currentNodeKey?: TreeKey;
    checkStrictly: boolean;
    setStrictly?: boolean;
    checkDescendants: boolean;
    defaultCheckedKeys?: TreeKey[];
    defaultExpandedKeys?: TreeKey[];
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    filterNodeMethod?: FilterNodeMethodFunction;
}

declare const UxTree: SFCWithInstall<typeof _default>;
export { UxTree }
export default UxTree;

export { }
