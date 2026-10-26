import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentSize } from 'ux-up/es/constants';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DebouncedFunc } from 'lodash';
import { DefineComponent } from 'vue';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { Nullable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { Translator } from 'ux-up/es/hooks';
import { UxTooltipProps } from 'ux-up/es/components/tooltip';
import { UxTooltipProps as UxTooltipProps_2 } from 'ux-up';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare type CellCls<T extends DefaultRow> = string | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => string);

export declare type CellStyle<T extends DefaultRow> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => CSSProperties);

declare type CI<T extends DefaultRow> = {
    column: TableColumnCtx<T>;
    $index: number;
    store: Store<T>;
    _self: any;
};

export declare type ColumnCls<T> = string | ((data: {
    row: T;
    rowIndex: number;
}) => string);

export declare type ColumnStyle<T> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
}) => CSSProperties);

declare const _default: DefineComponent<    {
data: {
type: PropType<any[]>;
default: () => never[];
};
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
width: (NumberConstructor | StringConstructor)[];
height: (NumberConstructor | StringConstructor)[];
maxHeight: (NumberConstructor | StringConstructor)[];
fit: {
type: BooleanConstructor;
default: boolean;
};
stripe: BooleanConstructor;
border: BooleanConstructor;
rowKey: PropType<TableProps<any>["rowKey"]>;
showHeader: {
type: BooleanConstructor;
default: boolean;
};
showSummary: BooleanConstructor;
sumText: StringConstructor;
summaryMethod: PropType<TableProps<any>["summaryMethod"]>;
rowClassName: PropType<TableProps<any>["rowClassName"]>;
rowStyle: PropType<TableProps<any>["rowStyle"]>;
cellClassName: PropType<TableProps<any>["cellClassName"]>;
cellStyle: PropType<TableProps<any>["cellStyle"]>;
headerRowClassName: PropType<TableProps<any>["headerRowClassName"]>;
headerRowStyle: PropType<TableProps<any>["headerRowStyle"]>;
headerCellClassName: PropType<TableProps<any>["headerCellClassName"]>;
headerCellStyle: PropType<TableProps<any>["headerCellStyle"]>;
highlightCurrentRow: BooleanConstructor;
currentRowKey: (NumberConstructor | StringConstructor)[];
emptyText: StringConstructor;
expandRowKeys: PropType<TableProps<any>["expandRowKeys"]>;
defaultExpandAll: BooleanConstructor;
defaultSort: PropType<TableProps<any>["defaultSort"]>;
tooltipEffect: StringConstructor;
tooltipOptions: PropType<TableProps<any>["tooltipOptions"]>;
spanMethod: PropType<TableProps<any>["spanMethod"]>;
selectOnIndeterminate: {
type: BooleanConstructor;
default: boolean;
};
indent: {
type: NumberConstructor;
default: number;
};
treeProps: {
type: PropType<TableProps<any>["treeProps"]>;
default: () => {
hasChildren: string;
children: string;
checkStrictly: boolean;
};
};
lazy: BooleanConstructor;
load: PropType<TableProps<any>["load"]>;
style: {
type: PropType<CSSProperties>;
default: () => {};
};
className: {
type: StringConstructor;
default: string;
};
tableLayout: {
type: PropType<"fixed" | "auto">;
default: string;
};
scrollbarAlwaysOn: BooleanConstructor;
flexible: BooleanConstructor;
showOverflowTooltip: PropType<TableProps<any>["showOverflowTooltip"]>;
tooltipFormatter: PropType<TableProps<any>["tooltipFormatter"]>;
appendFilterPanelTo: StringConstructor;
scrollbarTabindex: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
allowDragLastColumn: {
type: BooleanConstructor;
default: boolean;
};
preserveExpandedContent: BooleanConstructor;
nativeScrollbar: BooleanConstructor;
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
layout: TableLayout<any>;
store: {
mutations: {
setData(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, data: any[]): void;
insertColumn(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, column: TableColumnCtx<any>, parent: TableColumnCtx<any>, updateColumnOrder: () => void): void;
updateColumnOrder(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, column: TableColumnCtx<any>): void;
removeColumn(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, column: TableColumnCtx<any>, parent: TableColumnCtx<any>, updateColumnOrder: () => void): void;
sort(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, options: Sort): void;
changeSortCondition(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, options: Sort): void;
filterChange(_states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, options: Filter<any>): void;
toggleAllSelection(): void;
rowSelectedChanged(_states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, row: any): void;
setHoverRow(states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, row: any): void;
setCurrentRow(_states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
}, row: any): void;
};
commit: (name: "sort" | "setData" | "insertColumn" | "updateColumnOrder" | "removeColumn" | "changeSortCondition" | "filterChange" | "toggleAllSelection" | "rowSelectedChanged" | "setHoverRow" | "setCurrentRow", ...args: any[]) => void;
updateTableScrollY: () => void;
assertRowKey: () => void;
updateColumns: () => void;
scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void;
isSelected: (row: any) => boolean;
clearSelection: () => void;
cleanSelection: () => void;
getSelectionRows: () => any[];
toggleRowSelection: (row: any, selected?: boolean, emitChange?: boolean, ignoreSelectable?: boolean) => void;
_toggleAllSelection: () => void;
toggleAllSelection: (() => void) | null;
updateAllSelected: () => void;
updateFilters: (column: TableColumnCtx<any>, values: string[]) => Record<string, string[]>;
updateCurrentRow: (_currentRow: any) => void;
updateSort: (column: TableColumnCtx<any> | null, prop: string | null, order: TableSortOrder | null) => void;
execFilter: () => void;
execSort: () => void;
execQuery: (ignore?: {
filter: boolean;
} | undefined) => void;
clearFilter: (columnKeys?: string[] | string) => void;
clearSort: () => void;
toggleRowExpansion: (row: any, expanded?: boolean) => void;
setExpandRowKeysAdapter: (val: string[]) => void;
setCurrentRowKey: (key: string) => void;
toggleRowExpansionAdapter: (row: any, expanded?: boolean) => void;
isRowExpanded: (row: any) => boolean;
updateExpandRows: () => void;
updateCurrentRowData: () => void;
loadOrToggle: (row: any) => void;
updateTreeData: (ifChangeExpandRowKeys?: boolean, ifExpandAll?: boolean) => void;
updateKeyChildren: (key: string, data: any[]) => void;
states: {
_currentRowKey: Ref<string | null, string | null>;
currentRow: Ref<any, any>;
expandRowKeys: Ref<string[], string[]>;
treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
indent: Ref<number, number>;
lazy: Ref<boolean, boolean>;
lazyTreeNodeMap: Ref<Record<string, any[]>, Record<string, any[]>>;
lazyColumnIdentifier: Ref<string, string>;
childrenColumnName: Ref<string, string>;
checkStrictly: Ref<boolean, boolean>;
expandRows: Ref<any[], any[]>;
defaultExpandAll: Ref<boolean, boolean>;
tableSize: Ref<any, any>;
rowKey: Ref<string | null, string | null>;
data: Ref<any[], any[]>;
_data: Ref<any[], any[]>;
isComplex: Ref<boolean, boolean>;
_columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
originColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
columns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
leafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
fixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
rightFixedLeafColumns: Ref<TableColumnCtx<any>[], TableColumnCtx<any>[]>;
updateOrderFns: (() => void)[];
leafColumnsLength: Ref<number, number>;
fixedLeafColumnsLength: Ref<number, number>;
rightFixedLeafColumnsLength: Ref<number, number>;
isAllSelected: Ref<boolean, boolean>;
selection: Ref<any[], any[]>;
reserveSelection: Ref<boolean, boolean>;
selectOnIndeterminate: Ref<boolean, boolean>;
selectable: Ref<((row: any, index: number) => boolean) | null, ((row: any, index: number) => boolean) | null>;
filters: Ref<StoreFilter, StoreFilter>;
filteredData: Ref<any[] | null, any[] | null>;
sortingColumn: Ref<TableColumnCtx<any> | null, TableColumnCtx<any> | null>;
sortProp: Ref<string | null, string | null>;
sortOrder: Ref<string | number | null, string | number | null>;
hoverRow: Ref<any, any>;
};
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
};
columns: ComputedRef<TableColumnCtx<any>[]>;
handleHeaderFooterMousewheel: (_event: WheelEvent, data: any) => void;
handleMouseLeave: () => void;
tableId: string;
tableSize: ComputedRef<"" | "small" | "default" | "large" | "mini">;
isHidden: Ref<boolean, boolean>;
isEmpty: ComputedRef<boolean>;
renderExpanded: Ref<RenderExpanded<any> | null, RenderExpanded<any> | null>;
resizeProxyVisible: Ref<boolean, boolean>;
resizeState: Ref<    {
width: null | number;
height: null | number;
headerHeight: null | number;
}, {
width: null | number;
height: null | number;
headerHeight: null | number;
} | {
width: null | number;
height: null | number;
headerHeight: null | number;
}>;
isGroup: Ref<boolean, boolean>;
bodyWidth: ComputedRef<string>;
tableBodyStyles: ComputedRef<    {
width: string;
}>;
emptyBlockStyle: ComputedRef<    {
width: string;
height: string;
} | undefined>;
debouncedUpdateLayout: DebouncedFunc<() => void>;
/**
* @description used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection
*/
setCurrentRow: (row: any) => void;
/**
* @description returns the currently selected rows
*/
getSelectionRows: () => any[];
/**
* @description used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected
*/
toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
/**
* @description used in multiple selection Table, clear user selection
*/
clearSelection: () => void;
/**
* @description clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters
*/
clearFilter: (columnKeys?: string[] | string) => void;
/**
* @description used in multiple selection Table, toggle select all and deselect all
*/
toggleAllSelection: () => void;
/**
* @description used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed
*/
toggleRowExpansion: (row: any, expanded?: boolean) => void;
/**
* @description clear sorting, restore data to the original order
*/
clearSort: () => void;
/**
* @description refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout
*/
doLayout: () => void;
/**
* @description sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order
*/
sort: (prop: string, order: string) => void;
/**
* @description used in lazy Table, must set `rowKey`, update key children
*/
updateKeyChildren: (key: string, data: any[]) => void;
t: Translator;
setDragVisible: (visible: boolean) => void;
context: Table<any>;
computedSumText: ComputedRef<string>;
computedEmptyText: ComputedRef<string>;
tableLayout: ComputedRef<("fixed" | "auto") | undefined>;
scrollbarViewStyle: {
display: string;
verticalAlign: string;
};
scrollbarStyle: ComputedRef<    {
height: string;
maxHeight?: undefined;
} | {
maxHeight: string;
height?: undefined;
} | {
height?: undefined;
maxHeight?: undefined;
}>;
scrollBarRef: Ref<any, any>;
/**
* @description scrolls to a particular set of coordinates
*/
scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
/**
* @description set horizontal scroll position
*/
setScrollLeft: (left?: number) => void;
/**
* @description set vertical scroll position
*/
setScrollTop: (top?: number) => void;
/**
* @description whether to allow drag the last column
*/
allowDragLastColumn: boolean;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("select" | "scroll" | "select-all" | "expand-change" | "current-change" | "header-click" | "header-contextmenu" | "header-dragend" | "selection-change" | "sort-change" | "filter-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick")[], "select" | "scroll" | "select-all" | "expand-change" | "current-change" | "header-click" | "header-contextmenu" | "header-dragend" | "selection-change" | "sort-change" | "filter-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
data: {
type: PropType<any[]>;
default: () => never[];
};
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
width: (NumberConstructor | StringConstructor)[];
height: (NumberConstructor | StringConstructor)[];
maxHeight: (NumberConstructor | StringConstructor)[];
fit: {
type: BooleanConstructor;
default: boolean;
};
stripe: BooleanConstructor;
border: BooleanConstructor;
rowKey: PropType<TableProps<any>["rowKey"]>;
showHeader: {
type: BooleanConstructor;
default: boolean;
};
showSummary: BooleanConstructor;
sumText: StringConstructor;
summaryMethod: PropType<TableProps<any>["summaryMethod"]>;
rowClassName: PropType<TableProps<any>["rowClassName"]>;
rowStyle: PropType<TableProps<any>["rowStyle"]>;
cellClassName: PropType<TableProps<any>["cellClassName"]>;
cellStyle: PropType<TableProps<any>["cellStyle"]>;
headerRowClassName: PropType<TableProps<any>["headerRowClassName"]>;
headerRowStyle: PropType<TableProps<any>["headerRowStyle"]>;
headerCellClassName: PropType<TableProps<any>["headerCellClassName"]>;
headerCellStyle: PropType<TableProps<any>["headerCellStyle"]>;
highlightCurrentRow: BooleanConstructor;
currentRowKey: (NumberConstructor | StringConstructor)[];
emptyText: StringConstructor;
expandRowKeys: PropType<TableProps<any>["expandRowKeys"]>;
defaultExpandAll: BooleanConstructor;
defaultSort: PropType<TableProps<any>["defaultSort"]>;
tooltipEffect: StringConstructor;
tooltipOptions: PropType<TableProps<any>["tooltipOptions"]>;
spanMethod: PropType<TableProps<any>["spanMethod"]>;
selectOnIndeterminate: {
type: BooleanConstructor;
default: boolean;
};
indent: {
type: NumberConstructor;
default: number;
};
treeProps: {
type: PropType<TableProps<any>["treeProps"]>;
default: () => {
hasChildren: string;
children: string;
checkStrictly: boolean;
};
};
lazy: BooleanConstructor;
load: PropType<TableProps<any>["load"]>;
style: {
type: PropType<CSSProperties>;
default: () => {};
};
className: {
type: StringConstructor;
default: string;
};
tableLayout: {
type: PropType<"fixed" | "auto">;
default: string;
};
scrollbarAlwaysOn: BooleanConstructor;
flexible: BooleanConstructor;
showOverflowTooltip: PropType<TableProps<any>["showOverflowTooltip"]>;
tooltipFormatter: PropType<TableProps<any>["tooltipFormatter"]>;
appendFilterPanelTo: StringConstructor;
scrollbarTabindex: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
allowDragLastColumn: {
type: BooleanConstructor;
default: boolean;
};
preserveExpandedContent: BooleanConstructor;
nativeScrollbar: BooleanConstructor;
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onSelect?: ((...args: any[]) => any) | undefined;
"onExpand-change"?: ((...args: any[]) => any) | undefined;
"onCurrent-change"?: ((...args: any[]) => any) | undefined;
"onSelect-all"?: ((...args: any[]) => any) | undefined;
"onHeader-click"?: ((...args: any[]) => any) | undefined;
"onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
"onHeader-dragend"?: ((...args: any[]) => any) | undefined;
"onSelection-change"?: ((...args: any[]) => any) | undefined;
"onSort-change"?: ((...args: any[]) => any) | undefined;
"onFilter-change"?: ((...args: any[]) => any) | undefined;
"onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
"onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
"onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
"onCell-click"?: ((...args: any[]) => any) | undefined;
"onCell-dblclick"?: ((...args: any[]) => any) | undefined;
"onRow-click"?: ((...args: any[]) => any) | undefined;
"onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
"onRow-dblclick"?: ((...args: any[]) => any) | undefined;
}, {
data: any[];
style: CSSProperties;
tableLayout: "fixed" | "auto";
border: boolean;
className: string;
fit: boolean;
lazy: boolean;
scrollbarAlwaysOn: boolean;
allowDragLastColumn: boolean;
treeProps: TreeProps | undefined;
defaultExpandAll: boolean;
selectOnIndeterminate: boolean;
indent: number;
stripe: boolean;
showHeader: boolean;
showSummary: boolean;
highlightCurrentRow: boolean;
flexible: boolean;
scrollbarTabindex: string | number;
nativeScrollbar: boolean;
preserveExpandedContent: boolean;
}>;

declare const _default_2: DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
label: StringConstructor;
className: StringConstructor;
labelClassName: StringConstructor;
property: StringConstructor;
prop: StringConstructor;
width: {
type: (NumberConstructor | StringConstructor)[];
default: string;
};
minWidth: {
type: (NumberConstructor | StringConstructor)[];
default: string;
};
renderHeader: PropType<TableColumnCtx<any>["renderHeader"]>;
sortable: {
type: (BooleanConstructor | StringConstructor)[];
default: boolean;
};
sortMethod: PropType<TableColumnCtx<any>["sortMethod"]>;
sortBy: PropType<TableColumnCtx<any>["sortBy"]>;
resizable: {
type: BooleanConstructor;
default: boolean;
};
columnKey: StringConstructor;
align: StringConstructor;
headerAlign: StringConstructor;
showOverflowTooltip: {
type: PropType<TableColumnCtx<any>["showOverflowTooltip"]>;
default: undefined;
};
tooltipFormatter: PropType<TableColumnCtx<any>["tooltipFormatter"]>;
fixed: (BooleanConstructor | StringConstructor)[];
formatter: PropType<TableColumnCtx<any>["formatter"]>;
selectable: PropType<TableColumnCtx<any>["selectable"]>;
reserveSelection: BooleanConstructor;
filterMethod: PropType<TableColumnCtx<any>["filterMethod"]>;
filteredValue: PropType<TableColumnCtx<any>["filteredValue"]>;
filters: PropType<TableColumnCtx<any>["filters"]>;
filterPlacement: StringConstructor;
filterMultiple: {
type: BooleanConstructor;
default: boolean;
};
filterClassName: StringConstructor;
index: PropType<TableColumnCtx<any>["index"]>;
sortOrders: {
type: PropType<TableColumnCtx<any>["sortOrders"]>;
default: () => (string | null)[];
validator: (val: TableColumnCtx<any>["sortOrders"]) => boolean;
};
}, void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
label: StringConstructor;
className: StringConstructor;
labelClassName: StringConstructor;
property: StringConstructor;
prop: StringConstructor;
width: {
type: (NumberConstructor | StringConstructor)[];
default: string;
};
minWidth: {
type: (NumberConstructor | StringConstructor)[];
default: string;
};
renderHeader: PropType<TableColumnCtx<any>["renderHeader"]>;
sortable: {
type: (BooleanConstructor | StringConstructor)[];
default: boolean;
};
sortMethod: PropType<TableColumnCtx<any>["sortMethod"]>;
sortBy: PropType<TableColumnCtx<any>["sortBy"]>;
resizable: {
type: BooleanConstructor;
default: boolean;
};
columnKey: StringConstructor;
align: StringConstructor;
headerAlign: StringConstructor;
showOverflowTooltip: {
type: PropType<TableColumnCtx<any>["showOverflowTooltip"]>;
default: undefined;
};
tooltipFormatter: PropType<TableColumnCtx<any>["tooltipFormatter"]>;
fixed: (BooleanConstructor | StringConstructor)[];
formatter: PropType<TableColumnCtx<any>["formatter"]>;
selectable: PropType<TableColumnCtx<any>["selectable"]>;
reserveSelection: BooleanConstructor;
filterMethod: PropType<TableColumnCtx<any>["filterMethod"]>;
filteredValue: PropType<TableColumnCtx<any>["filteredValue"]>;
filters: PropType<TableColumnCtx<any>["filters"]>;
filterPlacement: StringConstructor;
filterMultiple: {
type: BooleanConstructor;
default: boolean;
};
filterClassName: StringConstructor;
index: PropType<TableColumnCtx<any>["index"]>;
sortOrders: {
type: PropType<TableColumnCtx<any>["sortOrders"]>;
default: () => (string | null)[];
validator: (val: TableColumnCtx<any>["sortOrders"]) => boolean;
};
}>>, {
width: string | number;
minWidth: string | number;
type: string;
showOverflowTooltip: boolean | Partial<Pick<UxTooltipProps_2, "offset" | "transition" | "placement" | "effect" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "popperClass" | "appendTo" | "showArrow">> | undefined;
sortOrders: (TableSortOrder | null)[];
sortable: string | boolean;
resizable: boolean;
reserveSelection: boolean;
filterMultiple: boolean;
}>;

declare type DefaultRow = Record<PropertyKey, any>;

export declare interface Filter<T extends DefaultRow> {
    column: TableColumnCtx<T>;
    values: string[];
    silent: any;
}

declare type FilterMethods<T extends DefaultRow> = (value: string, row: T, column: TableColumnCtx<T>) => void;

declare type Filters = {
    text: string;
    value: string;
}[];

declare class HelperStore<T extends DefaultRow> {
    Return: {
        mutations: {
            setData(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, data: T[]): void;
            insertColumn(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>, updateColumnOrder: () => void): void;
            updateColumnOrder(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, column: TableColumnCtx<T>): void;
            removeColumn(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>, updateColumnOrder: () => void): void;
            sort(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, options: Sort): void;
            changeSortCondition(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, options: Sort): void;
            filterChange(_states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, options: Filter<T>): void;
            toggleAllSelection(): void;
            rowSelectedChanged(_states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, row: T): void;
            setHoverRow(states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, row: T): void;
            setCurrentRow(_states: {
                _currentRowKey: Ref<string | null, string | null>;
                currentRow: Ref<T | null, T | null>;
                expandRowKeys: Ref<string[], string[]>;
                treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
                indent: Ref<number, number>;
                lazy: Ref<boolean, boolean>;
                lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
                lazyColumnIdentifier: Ref<string, string>;
                childrenColumnName: Ref<string, string>;
                checkStrictly: Ref<boolean, boolean>;
                expandRows: Ref<T[], T[]>;
                defaultExpandAll: Ref<boolean, boolean>;
                tableSize: Ref<any, any>;
                rowKey: Ref<string | null, string | null>;
                data: Ref<T[], T[]>;
                _data: Ref<T[], T[]>;
                isComplex: Ref<boolean, boolean>;
                _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
                updateOrderFns: (() => void)[];
                leafColumnsLength: Ref<number, number>;
                fixedLeafColumnsLength: Ref<number, number>;
                rightFixedLeafColumnsLength: Ref<number, number>;
                isAllSelected: Ref<boolean, boolean>;
                selection: Ref<T[], T[]>;
                reserveSelection: Ref<boolean, boolean>;
                selectOnIndeterminate: Ref<boolean, boolean>;
                selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
                filters: Ref<StoreFilter, StoreFilter>;
                filteredData: Ref<T[] | null, T[] | null>;
                sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
                sortProp: Ref<string | null, string | null>;
                sortOrder: Ref<string | number | null, string | number | null>;
                hoverRow: Ref<T | null, T | null>;
            }, row: T): void;
        };
        commit: (name: "sort" | "setData" | "insertColumn" | "updateColumnOrder" | "removeColumn" | "changeSortCondition" | "filterChange" | "toggleAllSelection" | "rowSelectedChanged" | "setHoverRow" | "setCurrentRow", ...args: any[]) => void;
        updateTableScrollY: () => void;
        assertRowKey: () => void;
        updateColumns: () => void;
        scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void;
        isSelected: (row: T) => boolean;
        clearSelection: () => void;
        cleanSelection: () => void;
        getSelectionRows: () => T[];
        toggleRowSelection: (row: T, selected?: boolean, emitChange?: boolean, ignoreSelectable?: boolean) => void;
        _toggleAllSelection: () => void;
        toggleAllSelection: (() => void) | null;
        updateAllSelected: () => void;
        updateFilters: (column: TableColumnCtx<T>, values: string[]) => Record<string, string[]>;
        updateCurrentRow: (_currentRow: T) => void;
        updateSort: (column: TableColumnCtx<T> | null, prop: string | null, order: TableSortOrder | null) => void;
        execFilter: () => void;
        execSort: () => void;
        execQuery: (ignore?: {
            filter: boolean;
        } | undefined) => void;
        clearFilter: (columnKeys?: string[] | string) => void;
        clearSort: () => void;
        toggleRowExpansion: (row: T, expanded?: boolean) => void;
        setExpandRowKeysAdapter: (val: string[]) => void;
        setCurrentRowKey: (key: string) => void;
        toggleRowExpansionAdapter: (row: T, expanded?: boolean) => void;
        isRowExpanded: (row: T) => boolean;
        updateExpandRows: () => void;
        updateCurrentRowData: () => void;
        loadOrToggle: (row: T) => void;
        updateTreeData: (ifChangeExpandRowKeys?: boolean, ifExpandAll?: boolean) => void;
        updateKeyChildren: (key: string, data: T[]) => void;
        states: {
            _currentRowKey: Ref<string | null, string | null>;
            currentRow: Ref<T | null, T | null>;
            expandRowKeys: Ref<string[], string[]>;
            treeData: Ref<Record<string, TreeData>, Record<string, TreeData>>;
            indent: Ref<number, number>;
            lazy: Ref<boolean, boolean>;
            lazyTreeNodeMap: Ref<Record<string, T[]>, Record<string, T[]>>;
            lazyColumnIdentifier: Ref<string, string>;
            childrenColumnName: Ref<string, string>;
            checkStrictly: Ref<boolean, boolean>;
            expandRows: Ref<T[], T[]>;
            defaultExpandAll: Ref<boolean, boolean>;
            tableSize: Ref<any, any>;
            rowKey: Ref<string | null, string | null>;
            data: Ref<T[], T[]>;
            _data: Ref<T[], T[]>;
            isComplex: Ref<boolean, boolean>;
            _columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[], TableColumnCtx<T>[]>;
            updateOrderFns: (() => void)[];
            leafColumnsLength: Ref<number, number>;
            fixedLeafColumnsLength: Ref<number, number>;
            rightFixedLeafColumnsLength: Ref<number, number>;
            isAllSelected: Ref<boolean, boolean>;
            selection: Ref<T[], T[]>;
            reserveSelection: Ref<boolean, boolean>;
            selectOnIndeterminate: Ref<boolean, boolean>;
            selectable: Ref<((row: T, index: number) => boolean) | null, ((row: T, index: number) => boolean) | null>;
            filters: Ref<StoreFilter, StoreFilter>;
            filteredData: Ref<T[] | null, T[] | null>;
            sortingColumn: Ref<TableColumnCtx<T> | null, TableColumnCtx<T> | null>;
            sortProp: Ref<string | null, string | null>;
            sortOrder: Ref<string | number | null, string | number | null>;
            hoverRow: Ref<T | null, T | null>;
        };
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
    };
}

declare type HoverState<T extends DefaultRow> = Nullable<{
    cell: HTMLElement;
    column: TableColumnCtx<T>;
    row: T;
}>;

declare type Layout = 'fixed' | 'auto';

declare type RenderExpanded<T extends DefaultRow> = ({ row, $index, store, expanded }: RIS<T>) => VNode[] | undefined;

export declare interface RenderRowData<T extends DefaultRow> {
    store: Store<T>;
    _self: Table<T>;
    column: TableColumnCtx<T>;
    row: T;
    $index: number;
    cellIndex: number;
    treeNode?: TreeNode;
    expanded: boolean;
}

declare type RIS<T extends DefaultRow> = {
    row: T;
    $index: number;
    store: Store<T>;
    expanded: boolean;
};

export declare interface Sort {
    prop: string;
    order: TableSortOrder;
    init?: any;
    silent?: any;
}

declare type Store<T extends DefaultRow> = HelperStore<T>['Return'];

declare type StoreFilter = Record<string, string[]>;

export declare type SummaryMethod<T extends DefaultRow> = (data: {
    columns: TableColumnCtx<T>[];
    data: T[];
}) => (string | VNode)[];

export declare interface Table<T extends DefaultRow = any> extends ComponentInternalInstance {
    $ready: boolean;
    hoverState?: HoverState<T> | null;
    renderExpanded: RenderExpanded<T>;
    store: Store<T>;
    layout: TableLayout<T>;
    refs: TableRefs;
    tableId: string;
    state: TableState;
}

export declare type TableColumnCtx<T extends DefaultRow = DefaultRow> = {
    id: string;
    realWidth: number | null;
    type: string;
    label: string;
    className: string;
    labelClassName: string;
    property: string;
    prop: string;
    width?: string | number;
    minWidth: string | number;
    renderHeader: (data: CI<T>) => VNode;
    sortable: boolean | string;
    sortMethod: (a: T, b: T) => number;
    sortBy: string | ((row: T, index: number, array?: T[]) => string) | string[];
    resizable: boolean;
    columnKey: string;
    rawColumnKey: string;
    align: string;
    headerAlign: string;
    showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
    tooltipFormatter?: TableOverflowTooltipFormatter<T>;
    fixed: boolean | string;
    formatter: (row: T, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode | string;
    selectable: (row: T, index: number) => boolean;
    reserveSelection: boolean;
    filterMethod: FilterMethods<T>;
    filteredValue: string[];
    filters: Filters;
    filterPlacement: string;
    filterMultiple: boolean;
    filterClassName: string;
    index: number | ((index: number) => number);
    sortOrders: (TableSortOrder | null)[];
    renderCell: (data: any) => VNode | VNode[];
    colSpan: number;
    rowSpan: number;
    children?: TableColumnCtx<T>[];
    level: number;
    filterable: boolean | FilterMethods<T> | Filters;
    order: TableSortOrder | null;
    isColumnGroup: boolean;
    isSubColumn: boolean;
    columns: TableColumnCtx<T>[];
    getColumnIndex: () => number;
    no: number;
    filterOpened?: boolean;
    renderFilterIcon?: (scope: any) => VNode;
    renderExpand?: (scope: any) => VNode;
};

export declare type TableColumnInstance = InstanceType<typeof _default_2> & unknown;

declare interface TableHeader extends ComponentInternalInstance {
    state: {
        onColumnsChange: (layout: TableLayout<any>) => void;
        onScrollableChange: (layout: TableLayout<any>) => void;
    };
    filterPanels: Ref<DefaultRow>;
}

export declare type TableInstance = InstanceType<typeof _default> & unknown;

declare class TableLayout<T extends DefaultRow> {
    observers: TableHeader[];
    table: Table<T>;
    store: Store<T>;
    columns: TableColumnCtx<T>[];
    fit: boolean;
    showHeader: boolean;
    height: Ref<null | number>;
    scrollX: Ref<boolean>;
    scrollY: Ref<boolean>;
    bodyWidth: Ref<null | number>;
    fixedWidth: Ref<null | number>;
    rightFixedWidth: Ref<null | number>;
    tableHeight: Ref<null | number>;
    headerHeight: Ref<null | number>;
    appendHeight: Ref<null | number>;
    footerHeight: Ref<null | number>;
    gutterWidth: number;
    constructor(options: Record<string, any>);
    updateScrollY(): boolean;
    setHeight(value: string | number | null, prop?: string): void;
    setMaxHeight(value: string | number | null): void;
    getFlattenColumns(): TableColumnCtx<T>[];
    updateElsHeight(): void;
    headerDisplayNone(elm: HTMLElement): boolean;
    updateColumnsWidth(): void;
    addObserver(observer: TableHeader): void;
    removeObserver(observer: TableHeader): void;
    notifyObservers(event: string): void;
}

declare type TableOverflowTooltipFormatter<T extends DefaultRow> = (data: {
    row: T;
    column: TableColumnCtx<T>;
    cellValue: any;
}) => VNode | string;

declare type TableOverflowTooltipOptions = Partial<Pick<UxTooltipProps, 'appendTo' | 'effect' | 'enterable' | 'hideAfter' | 'offset' | 'placement' | 'popperClass' | 'popperOptions' | 'showAfter' | 'showArrow' | 'transition'>>;

export declare interface TableProps<T extends DefaultRow> {
    data: T[];
    size?: ComponentSize;
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    fit?: boolean;
    stripe?: boolean;
    border?: boolean;
    rowKey?: string | ((row: T) => string);
    context?: Table<T>;
    showHeader?: boolean;
    showSummary?: boolean;
    sumText?: string;
    summaryMethod?: SummaryMethod<T>;
    rowClassName?: ColumnCls<T>;
    rowStyle?: ColumnStyle<T>;
    cellClassName?: CellCls<T>;
    cellStyle?: CellStyle<T>;
    headerRowClassName?: ColumnCls<T>;
    headerRowStyle?: ColumnStyle<T>;
    headerCellClassName?: CellCls<T>;
    headerCellStyle?: CellStyle<T>;
    highlightCurrentRow?: boolean;
    currentRowKey?: string | number;
    emptyText?: string;
    expandRowKeys?: Array<string>;
    defaultExpandAll?: boolean;
    defaultSort?: Sort;
    tooltipEffect?: string;
    tooltipOptions?: TableOverflowTooltipOptions;
    spanMethod?: (data: {
        row: T;
        rowIndex: number;
        column: TableColumnCtx<T>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined;
    selectOnIndeterminate?: boolean;
    indent?: number;
    treeProps?: TreeProps;
    lazy?: boolean;
    load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void;
    className?: string;
    style?: CSSProperties;
    tableLayout?: Layout;
    scrollbarAlwaysOn?: boolean;
    flexible?: boolean;
    showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
    tooltipFormatter?: TableOverflowTooltipFormatter<T>;
    appendFilterPanelTo?: string;
    scrollbarTabindex?: number | string;
    nativeScrollbar?: boolean;
}

export declare interface TableRefs {
    tableWrapper: HTMLElement;
    headerWrapper: HTMLElement;
    footerWrapper: HTMLElement;
    fixedBodyWrapper: HTMLElement;
    rightFixedBodyWrapper: HTMLElement;
    bodyWrapper: HTMLElement;
    appendWrapper: HTMLElement;
    [key: string]: any;
}

declare type TableSortOrder = 'ascending' | 'descending';

declare interface TableState {
    isGroup: Ref<boolean>;
    resizeState: Ref<{
        width: any;
        height: any;
    }>;
    doLayout: () => void;
    debouncedUpdateLayout: () => void;
}

export declare type TableTooltipData<T extends DefaultRow> = Parameters<TableOverflowTooltipFormatter<T>>[0];

declare interface TreeData extends TreeNode {
    children?: string[];
    lazy?: boolean;
    loaded?: boolean;
}

export declare interface TreeNode {
    expanded?: boolean;
    loading?: boolean;
    noLazyChildren?: boolean;
    indent?: number;
    level?: number;
    display?: boolean;
}

declare interface TreeProps {
    hasChildren?: string;
    children?: string;
    checkStrictly?: boolean;
}

declare const UxTable: SFCWithInstall<typeof _default> & {
    TableColumn: typeof _default_2;
};
export { UxTable }
export default UxTable;

export declare const UxTableColumn: SFCWithInstall<typeof _default_2>;

export { }
