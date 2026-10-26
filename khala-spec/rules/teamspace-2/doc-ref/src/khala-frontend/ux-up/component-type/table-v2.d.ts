import type { Alignment as Alignment_2 } from 'ux-up/es/components/virtual-list';
import { AllowedComponentProps } from 'vue';
import type { ColumnAlignment } from 'ux-up/es/constants';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { GridScrollOptions } from 'ux-up/es/components/virtual-list';
import { ItemSize } from 'ux-up/es/components/virtual-list';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { ResetAfterIndex } from 'ux-up/es/components/virtual-list';
import { RowEventHandlers as RowEventHandlers_2 } from 'ux-up';
import { RowExpandHandler as RowExpandHandler_2 } from 'ux-up';
import { RowExpandParams as RowExpandParams_2 } from 'ux-up';
import { RowHeightChangedParams as RowHeightChangedParams_2 } from 'ux-up';
import { RowHoverParams as RowHoverParams_2 } from 'ux-up';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { ShallowRef } from 'vue';
import { TableV2SortOrder as TableV2SortOrder_2 } from 'ux-up';
import type { UnwrapNestedRefs } from 'vue';
import type { UnwrapRef } from 'vue';
import type { UseNamespaceReturn } from 'ux-up/es/hooks';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare type Alignment = ColumnAlignment;

declare type AnyColumn = Column<any>;

declare type AnyColumns = Columns<any>;

declare type AutoResizeHandler = (event: {
    height: number;
    width: number;
}) => void;

declare const AutoResizer: DefineComponent<    {
readonly disableWidth: BooleanConstructor;
readonly disableHeight: BooleanConstructor;
readonly onResize: {
readonly type: PropType<(event: {
height: number;
width: number;
}) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly disableWidth: BooleanConstructor;
readonly disableHeight: BooleanConstructor;
readonly onResize: {
readonly type: PropType<(event: {
height: number;
width: number;
}) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly disableWidth: boolean;
readonly disableHeight: boolean;
}>;

export declare type AutoResizerProps = ExtractPropTypes<typeof autoResizerProps>;

export declare const autoResizerProps: {
    readonly disableWidth: BooleanConstructor;
    readonly disableHeight: BooleanConstructor;
    readonly onResize: {
        readonly type: PropType<AutoResizeHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

/**
 * Renderer/Getter types
 */
declare type CellRenderer<T> = (params: CellRendererParams<T>) => VNode;

/**
 * Param types
 */
declare type CellRendererParams<T> = {
    cellData: T;
} & RowCommonParams & ColumnCommonParams<T>;

declare type ClassNameGetter<T> = (params: ClassNameGetterParams<T>) => string;

declare type ClassNameGetterParams<T> = {
    cellData: T;
} & RowCommonParams & ColumnCommonParams<T>;

export declare type Column<T = any> = {
    /**
     * Attributes
     */
    align?: Alignment;
    class?: string | ClassNameGetter<T>;
    key?: KeyType_2;
    dataKey?: KeyType_2;
    fixed?: true | FixedDirection;
    flexGrow?: CSSProperties['flexGrow'];
    flexShrink?: CSSProperties['flexShrink'];
    title?: string;
    hidden?: boolean;
    headerClass?: HeaderClassGetter<T> | string;
    maxWidth?: number;
    minWidth?: number;
    style?: CSSProperties;
    sortable?: boolean;
    width: number;
    /**
     * Renderers
     */
    cellRenderer?: CellRenderer<T>;
    headerCellRenderer?: HeaderCellRenderer<T>;
    /**
     * Extendable sections
     */
    [key: string]: any;
};

declare type ColumnCommonParams<T> = {
    columns: Column<T>[];
    column: Column<T>;
    columnIndex: number;
};

export declare type ColumnResizeHandler<T> = (column: Column<T>, width: number) => void;

export declare type Columns<T> = Column<T>[];

/**
 * Handler types
 */
export declare type ColumnSortHandler<T> = (params: ColumnSortParams<T>) => void;

/**
 * Param types
 */
export declare type ColumnSortParams<T> = {
    column: Column<T>;
    key: KeyType_2;
    order: TableV2SortOrder;
};

declare type DataGetter<T> = (params: DataGetterParams<T>) => T;

declare type DataGetterParams<T> = {
    columns: Column<T>[];
    column: Column<T>;
    columnIndex: number;
} & RowCommonParams;

export declare type ExpandedRowsChangeHandler = (expandedRowKeys: KeyType_2[]) => void;

/**
 * Renderer/Getter types
 */
export declare type ExtraCellPropGetter<T> = (params: ColumnCommonParams<T> & RowCommonParams & {
    cellData: T;
    rowData: any;
}) => any;

export declare type ExtractHeaderCellPropGetter<T> = (params: ColumnCommonParams<T> & {
    headerIndex: number;
}) => any;

export declare type ExtractHeaderPropGetter<T> = (params: {
    columns: Column<T>[];
    headerIndex: number;
}) => any;

export declare type ExtractRowPropGetter<T> = (params: {
    columns: Column<T>[];
} & RowCommonParams) => any;

declare type FixedDirection = TableV2FixedDir;

declare type HeaderCellRenderer<T> = (params: HeaderCellRendererParams<T>) => VNode;

declare type HeaderCellRendererParams<T> = {
    headerIndex: number;
} & ColumnCommonParams<T>;

declare type HeaderCellRendererProps = TableV2HeaderRowCellRendererParams & UnwrapNestedRefs<Pick<UseTableReturn, 'onColumnSorted'>> & Pick<TableV2Props, 'sortBy' | 'sortState' | 'headerCellProps'> & {
    ns: UseNamespaceReturn;
};

export declare type HeaderCellSlotProps = HeaderCellRendererProps & {
    class: string;
};

declare type HeaderClassGetter<T> = (params: ColumnCommonParams<T> & {
    headerIndex: number;
}) => string;

export declare type HeaderClassNameGetter<T> = (params: {
    columns: Column<T>[];
    headerIndex: number;
}) => string;

declare type KeyType_2 = string | number | symbol;

declare type onRowRenderedParams = {
    rowCacheStart: number;
    rowCacheEnd: number;
    rowVisibleStart: number;
    rowVisibleEnd: number;
};

export declare type RowClassNameGetter<T> = (params: {
    columns: Column<T>[];
} & RowCommonParams) => string;

declare type RowCommonParams = {
    rowData: any;
    rowIndex: number;
};

export declare type RowEventHandler = (params: RowEventHandlerParams) => void;

export declare type RowEventHandlerParams = {
    rowKey: KeyType_2;
    event: Event;
} & RowCommonParams;

export declare type RowEventHandlers = {
    onClick?: RowEventHandler;
    onContextmenu?: RowEventHandler;
    onDblclick?: RowEventHandler;
    onMouseenter?: RowEventHandler;
    onMouseleave?: RowEventHandler;
};

export declare type RowExpandHandler = (params: RowExpandParams) => void;

export declare type RowExpandParams = {
    expanded: boolean;
    rowKey: KeyType_2;
} & RowCommonParams;

export declare type RowHeightChangedParams = {
    rowKey: KeyType_2;
    height: number;
    rowIndex: number;
};

export declare type RowHeightChangeHandler = (row: RowHeightChangedParams, fixedDirection: boolean | FixedDirection | undefined) => void;

export declare type RowHoverHandler = (params: RowHoverParams) => void;

export declare type RowHoverParams = {
    event?: MouseEvent;
    hovered: boolean;
    rowKey: KeyType_2;
} & Partial<RowCommonParams>;

declare type ScrollPos = {
    scrollLeft: number;
    scrollTop: number;
};

export declare type SortBy = {
    key: KeyType_2;
    order: TableV2SortOrder;
};

export declare type SortState = {
    [key: KeyType_2]: TableV2SortOrder;
};

declare const TableGrid: DefineComponent<    {
readonly columns: {
readonly type: PropType<AnyColumn[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly data: {
readonly type: PropType<any[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fixedData: {
readonly type: PropType<any[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly default: undefined;
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly width: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerWidth: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerHeight: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown, 48, boolean>;
readonly bodyWidth: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowHeight: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly useIsScrolling: BooleanConstructor;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly class: StringConstructor;
readonly style: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly getRowHeight: {
readonly type: PropType<ItemSize>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
readonly onRowsRendered: {
readonly type: PropType<(params: onRowRenderedParams) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onScroll: {
readonly type: PropType<(...args: any[]) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly columns: {
readonly type: PropType<AnyColumn[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly data: {
readonly type: PropType<any[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fixedData: {
readonly type: PropType<any[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly default: undefined;
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly width: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerWidth: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerHeight: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown, 48, boolean>;
readonly bodyWidth: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowHeight: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly useIsScrolling: BooleanConstructor;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly class: StringConstructor;
readonly style: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly getRowHeight: {
readonly type: PropType<ItemSize>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
readonly onRowsRendered: {
readonly type: PropType<(params: onRowRenderedParams) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onScroll: {
readonly type: PropType<(...args: any[]) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly rowKey: EpPropMergeType<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly cache: number;
readonly estimatedRowHeight: number;
readonly scrollbarStartGap: number;
readonly scrollbarEndGap: number;
readonly headerHeight: EpPropMergeType<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown>;
}>;

declare type TableGridInstance = InstanceType<typeof TableGrid> & UnwrapRef<{
    forceUpdate: () => void;
    /**
     * @description fetch total height
     */
    totalHeight: number;
    /**
     * @description scrollTo a position
     * @param { number | ScrollToOptions } arg1
     * @param { number } arg2
     */
    scrollTo(leftOrOptions: number | GridScrollOptions, top?: number): void;
    /**
     * @description scroll vertically to position y
     */
    scrollToTop(scrollTop: number): void;
    /**
     * @description scroll to a given row
     * @params row {Number} which row to scroll to
     * @params @optional strategy {ScrollStrategy} use what strategy to scroll to
     */
    scrollToRow(row: number, strategy: Alignment_2): void;
    /**
     * @description reset rendered state after row index
     * @param { number } rowIndex
     * @param { boolean } forceUpdate
     */
    resetAfterRowIndex: ResetAfterIndex;
}>;

export declare const TableV2: DefineComponent<    {
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedRowHeight: {
readonly default: undefined;
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
readonly headerClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>) | ((new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerCellProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerHeight: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown, 48, boolean>;
readonly footerHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly rowClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>) | ((new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 48, boolean>;
readonly cellProps: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>) | ((new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly columns: {
readonly type: PropType<AnyColumn[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly data: {
readonly type: PropType<any[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly dataGetter: {
readonly type: PropType<DataGetter<any>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fixedData: {
readonly type: PropType<any[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandColumnKey: StringConstructor;
readonly expandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
readonly defaultExpandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
readonly class: StringConstructor;
readonly fixed: BooleanConstructor;
readonly style: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly maxHeight: NumberConstructor;
readonly useIsScrolling: BooleanConstructor;
readonly indentSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly iconSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly sortBy: EpPropFinalized<(new (...args: any[]) => SortBy) | (() => SortBy) | ((new (...args: any[]) => SortBy) | (() => SortBy))[], unknown, unknown, () => {
key: KeyType_2;
order: TableV2SortOrder_2;
}, boolean>;
readonly sortState: EpPropFinalized<(new (...args: any[]) => SortState) | (() => SortState) | ((new (...args: any[]) => SortState) | (() => SortState))[], unknown, unknown, undefined, boolean>;
readonly onColumnSort: {
readonly type: PropType<ColumnSortHandler<any>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onExpandedRowsChange: {
readonly type: PropType<ExpandedRowsChangeHandler>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onEndReached: {
readonly type: PropType<(remainDistance: number) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRowExpand: {
readonly type: PropType<RowExpandHandler_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onScroll: {
readonly type: PropType<(...args: any[]) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRowsRendered: {
readonly type: PropType<(params: onRowRenderedParams) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowEventHandlers: {
readonly type: PropType<RowEventHandlers_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedRowHeight: {
readonly default: undefined;
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
readonly headerClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>) | ((new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerCellProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly headerHeight: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown, 48, boolean>;
readonly footerHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly rowClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>) | ((new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowProps: {
readonly type: PropType<any>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 48, boolean>;
readonly cellProps: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>) | ((new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly columns: {
readonly type: PropType<AnyColumn[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly data: {
readonly type: PropType<any[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly dataGetter: {
readonly type: PropType<DataGetter<any>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fixedData: {
readonly type: PropType<any[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandColumnKey: StringConstructor;
readonly expandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
readonly defaultExpandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
readonly class: StringConstructor;
readonly fixed: BooleanConstructor;
readonly style: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly maxHeight: NumberConstructor;
readonly useIsScrolling: BooleanConstructor;
readonly indentSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly iconSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly sortBy: EpPropFinalized<(new (...args: any[]) => SortBy) | (() => SortBy) | ((new (...args: any[]) => SortBy) | (() => SortBy))[], unknown, unknown, () => {
key: KeyType_2;
order: TableV2SortOrder_2;
}, boolean>;
readonly sortState: EpPropFinalized<(new (...args: any[]) => SortState) | (() => SortState) | ((new (...args: any[]) => SortState) | (() => SortState))[], unknown, unknown, undefined, boolean>;
readonly onColumnSort: {
readonly type: PropType<ColumnSortHandler<any>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onExpandedRowsChange: {
readonly type: PropType<ExpandedRowsChangeHandler>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onEndReached: {
readonly type: PropType<(remainDistance: number) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRowExpand: {
readonly type: PropType<RowExpandHandler_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onScroll: {
readonly type: PropType<(...args: any[]) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRowsRendered: {
readonly type: PropType<(params: onRowRenderedParams) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly rowEventHandlers: {
readonly type: PropType<RowEventHandlers_2>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly fixed: boolean;
readonly rowKey: EpPropMergeType<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly cache: number;
readonly estimatedRowHeight: number;
readonly rowHeight: number;
readonly hScrollbarSize: number;
readonly vScrollbarSize: number;
readonly sortBy: SortBy;
readonly headerHeight: EpPropMergeType<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown>;
readonly footerHeight: number;
readonly indentSize: number;
readonly iconSize: number;
readonly sortState: SortState;
readonly expandedRowKeys: KeyType_2[];
readonly defaultExpandedRowKeys: KeyType_2[];
}>;

export declare enum TableV2Alignment {
    CENTER = "center",
    RIGHT = "right"
}

export declare type TableV2CustomizedHeaderSlotParam<T = any> = {
    cells: VNode[];
    columns: Columns<T>;
    headerIndex: number;
};

export declare enum TableV2FixedDir {
    LEFT = "left",
    RIGHT = "right"
}

declare type TableV2HeaderRowCellRendererParams = {
    columns: TableV2HeaderRowProps['columns'];
    column: TableV2HeaderRowProps['columns'][number];
    columnIndex: number;
    headerIndex: number;
    style: CSSProperties;
};

declare type TableV2HeaderRowProps = ExtractPropTypes<typeof tableV2HeaderRowProps>;

declare const tableV2HeaderRowProps: {
    readonly class: StringConstructor;
    readonly columns: {
        readonly type: PropType<AnyColumn[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columnsStyles: {
        readonly type: PropType<Record<KeyType_2, CSSProperties>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerIndex: NumberConstructor;
    readonly style: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type TableV2Instance = InstanceType<typeof TableV2> & {
    /**
     * @description scroll to a given position
     * @params params {{ scrollLeft?: number, scrollTop?: number }} where to scroll to.
     */
    scrollTo: (param: {
        scrollLeft?: number;
        scrollTop?: number;
    }) => void;
    /**
     * @description scroll to a given position horizontally
     * @params scrollLeft {Number} where to scroll to.
     */
    scrollToLeft: (scrollLeft: number) => void;
    /**
     * @description scroll to a given position vertically
     * @params scrollTop { Number } where to scroll to.
     */
    scrollToTop: (scrollTop: number) => void;
    /**
     * @description scroll to a given row
     * @params row {Number} which row to scroll to
     * @params strategy {ScrollStrategy} use what strategy to scroll to
     */
    scrollToRow(row: number, strategy?: Alignment_2): void;
};

export declare const TableV2Placeholder: unique symbol;

export declare type TableV2Props = ExtractPropTypes<typeof tableV2Props>;

export declare const tableV2Props: {
    readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
    readonly headerClass: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>) | ((new (...args: any[]) => string | HeaderClassNameGetter<any>) | (() => string | HeaderClassNameGetter<any>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerProps: {
        readonly type: PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerCellProps: {
        readonly type: PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerHeight: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => number | number[]) | ((new (...args: any[]) => number | number[]) | (() => number | number[]))[], unknown, unknown, 48, boolean>;
    readonly footerHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly rowClass: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>) | ((new (...args: any[]) => string | RowClassNameGetter<any>) | (() => string | RowClassNameGetter<any>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowProps: {
        readonly type: PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 48, boolean>;
    readonly cellProps: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>) | ((new (...args: any[]) => Record<string, any> | ExtraCellPropGetter<any>) | (() => Record<string, any> | ExtraCellPropGetter<any>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columns: {
        readonly type: PropType<AnyColumn[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly data: {
        readonly type: PropType<any[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dataGetter: {
        readonly type: PropType<DataGetter<any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fixedData: {
        readonly type: PropType<any[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly expandColumnKey: StringConstructor;
    readonly expandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
    readonly defaultExpandedRowKeys: EpPropFinalized<(new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]) | ((new (...args: any[]) => KeyType_2[]) | (() => KeyType_2[]))[], unknown, unknown, () => never[], boolean>;
    readonly class: StringConstructor;
    readonly fixed: BooleanConstructor;
    readonly style: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly maxHeight: NumberConstructor;
    readonly useIsScrolling: BooleanConstructor;
    readonly indentSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly iconSize: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
    readonly sortBy: EpPropFinalized<(new (...args: any[]) => SortBy) | (() => SortBy) | ((new (...args: any[]) => SortBy) | (() => SortBy))[], unknown, unknown, () => {
    key: KeyType_2;
    order: TableV2SortOrder;
    }, boolean>;
    readonly sortState: EpPropFinalized<(new (...args: any[]) => SortState) | (() => SortState) | ((new (...args: any[]) => SortState) | (() => SortState))[], unknown, unknown, undefined, boolean>;
    readonly onColumnSort: {
        readonly type: PropType<ColumnSortHandler<any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onExpandedRowsChange: {
        readonly type: PropType<ExpandedRowsChangeHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onEndReached: {
        readonly type: PropType<(remainDistance: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onRowExpand: {
        readonly type: PropType<RowExpandHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onScroll: {
        readonly type: PropType<(...args: any[]) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onRowsRendered: {
        readonly type: PropType<(params: onRowRenderedParams) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowEventHandlers: {
        readonly type: PropType<RowEventHandlers>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type TableV2RowProps = ExtractPropTypes<typeof tableV2RowProps>;

export declare const tableV2RowProps: {
    readonly class: StringConstructor;
    readonly columns: {
        readonly type: PropType<AnyColumn[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columnsStyles: {
        readonly type: PropType<Record<KeyType_2, CSSProperties>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly depth: NumberConstructor;
    readonly expandColumnKey: StringConstructor;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly isScrolling: BooleanConstructor;
    readonly onRowExpand: {
        readonly type: PropType<RowExpandHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onRowHover: {
        readonly type: PropType<RowHoverHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onRowHeightChange: {
        readonly type: PropType<RowHeightChangeHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowData: {
        readonly type: PropType<any>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowEventHandlers: {
        readonly type: PropType<RowEventHandlers>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowIndex: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rowKey: EpPropFinalized<(new (...args: any[]) => string | number | symbol) | (() => KeyType_2) | ((new (...args: any[]) => string | number | symbol) | (() => KeyType_2))[], unknown, unknown, "id", boolean>;
    readonly style: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare enum TableV2SortOrder {
    ASC = "asc",
    DESC = "desc"
}

declare function useTable(props: TableV2Props): {
    columns: ComputedRef<    {
    key: KeyType_2;
    align?: Alignment;
    class?: string | ClassNameGetter<any> | undefined;
    dataKey?: KeyType_2;
    fixed?: true | FixedDirection;
    flexGrow?: CSSProperties["flexGrow"];
    flexShrink?: CSSProperties["flexShrink"];
    title?: string;
    hidden?: boolean;
    headerClass?: string | HeaderClassGetter<any> | undefined;
    maxWidth?: number;
    minWidth?: number;
    style?: CSSProperties;
    sortable?: boolean;
    width: number;
    cellRenderer?: CellRenderer<any> | undefined;
    headerCellRenderer?: HeaderCellRenderer<any> | undefined;
    }[]>;
    containerRef: Ref<any, any>;
    mainTableRef: Ref<TableGridInstance | undefined, TableGridInstance | undefined>;
    leftTableRef: Ref<TableGridInstance | undefined, TableGridInstance | undefined>;
    rightTableRef: Ref<TableGridInstance | undefined, TableGridInstance | undefined>;
    isDynamic: ComputedRef<boolean>;
    isResetting: ShallowRef<boolean, boolean>;
    isScrolling: ShallowRef<boolean, boolean>;
    hasFixedColumns: ComputedRef<number>;
    columnsStyles: ComputedRef<Record<KeyType_2, CSSProperties>>;
    columnsTotalWidth: ComputedRef<number>;
    data: ComputedRef<any[]>;
    expandedRowKeys: Ref<KeyType_2[], KeyType_2[]>;
    depthMap: Ref<Record<KeyType_2, number>, Record<KeyType_2, number>>;
    fixedColumnsOnLeft: ComputedRef<    {
    key: KeyType_2;
    align?: Alignment;
    class?: string | ClassNameGetter<any> | undefined;
    dataKey?: KeyType_2;
    fixed?: true | FixedDirection;
    flexGrow?: CSSProperties["flexGrow"];
    flexShrink?: CSSProperties["flexShrink"];
    title?: string;
    hidden?: boolean;
    headerClass?: string | HeaderClassGetter<any> | undefined;
    maxWidth?: number;
    minWidth?: number;
    style?: CSSProperties;
    sortable?: boolean;
    width: number;
    cellRenderer?: CellRenderer<any> | undefined;
    headerCellRenderer?: HeaderCellRenderer<any> | undefined;
    }[]>;
    fixedColumnsOnRight: ComputedRef<    {
    key: KeyType_2;
    align?: Alignment;
    class?: string | ClassNameGetter<any> | undefined;
    dataKey?: KeyType_2;
    fixed?: true | FixedDirection;
    flexGrow?: CSSProperties["flexGrow"];
    flexShrink?: CSSProperties["flexShrink"];
    title?: string;
    hidden?: boolean;
    headerClass?: string | HeaderClassGetter<any> | undefined;
    maxWidth?: number;
    minWidth?: number;
    style?: CSSProperties;
    sortable?: boolean;
    width: number;
    cellRenderer?: CellRenderer<any> | undefined;
    headerCellRenderer?: HeaderCellRenderer<any> | undefined;
    }[]>;
    mainColumns: ComputedRef<AnyColumns>;
    bodyWidth: ComputedRef<number>;
    emptyStyle: ComputedRef<CSSProperties>;
    rootStyle: ComputedRef<CSSProperties>;
    footerHeight: ComputedRef<CSSProperties>;
    mainTableHeight: ComputedRef<number>;
    fixedTableHeight: ComputedRef<number>;
    leftTableWidth: ComputedRef<number>;
    rightTableWidth: ComputedRef<number>;
    showEmpty: ComputedRef<boolean>;
    getRowHeight: (rowIndex: number) => number;
    onColumnSorted: (e: MouseEvent) => void;
    onRowHovered: ({ hovered, rowKey }: RowHoverParams_2) => void;
    onRowExpanded: ({ expanded, rowData, rowIndex, rowKey }: RowExpandParams_2) => void;
    onRowsRendered: (params: onRowRenderedParams) => void;
    onRowHeightChange: ({ rowKey, height, rowIndex }: RowHeightChangedParams_2, fixedDir: FixedDirection) => void;
    scrollTo: (params: ScrollPos) => void;
    scrollToLeft: (scrollLeft: number) => void;
    scrollToTop: (scrollTop: number) => void;
    scrollToRow: (row: number, strategy?: Alignment_2) => void;
    onScroll: (params: ScrollPos) => void;
    onVerticalScroll: ({ scrollTop }: ScrollPos) => void;
};

declare type UseTableReturn = ReturnType<typeof useTable>;

export declare const UxAutoResizer: SFCWithInstall<typeof AutoResizer>;

export declare const UxTableV2: SFCWithInstall<typeof TableV2>;

export { }
