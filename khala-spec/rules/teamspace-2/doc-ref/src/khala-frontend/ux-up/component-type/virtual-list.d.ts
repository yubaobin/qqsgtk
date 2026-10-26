import { Alignment as Alignment_2 } from 'ux-up';
import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { GridItemKeyGetter as GridItemKeyGetter_2 } from 'ux-up';
import { ItemSize as ItemSize_2 } from 'ux-up';
import { MemoizedFn } from 'memoize-one';
import { MemoizedFunction } from 'lodash';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { StyleValue } from 'vue';
import type { UnwrapRef } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare type Alignment = 'auto' | 'smart' | 'center' | 'start' | 'end';

declare const BACKWARD = "backward";

declare const createGrid: ({ name, clearCache, getColumnPosition, getColumnStartIndexForOffset, getColumnStopIndexForStartIndex, getEstimatedTotalHeight, getEstimatedTotalWidth, getColumnOffset, getRowOffset, getRowPosition, getRowStartIndexForOffset, getRowStopIndexForStartIndex, initCache, injectToInstance, validateProps }: GridConstructorProps<VirtualizedGridProps>) => DefineComponent<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
readonly data: any[];
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl", never>;
readonly className: string;
readonly containerElement: EpPropMergeType<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown>;
readonly innerElement: EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly itemKey: GridItemKeyGetter;
readonly columnCache: number;
readonly initScrollLeft: number;
readonly initScrollTop: number;
readonly rowCache: number;
readonly hScrollbarSize: number;
readonly vScrollbarSize: number;
readonly scrollbarStartGap: number;
readonly scrollbarEndGap: number;
}>;

declare type Dir = typeof FORWARD | typeof BACKWARD;

export declare type Direction = 'ltr' | 'rtl';

export declare const DynamicSizeGrid: DefineComponent<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
(): GridItemKeyGetter;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
readonly data: any[];
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl", never>;
readonly className: string;
readonly containerElement: EpPropMergeType<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown>;
readonly innerElement: EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly itemKey: GridItemKeyGetter;
readonly columnCache: number;
readonly initScrollLeft: number;
readonly initScrollTop: number;
readonly rowCache: number;
readonly hScrollbarSize: number;
readonly vScrollbarSize: number;
readonly scrollbarStartGap: number;
readonly scrollbarEndGap: number;
}>;

export declare type DynamicSizeGridInstance = GridInstance & {
    resetAfterColumnIndex: ResetAfterIndex;
    resetAfterRowIndex: ResetAfterIndex;
    resetAfter: ResetAfterIndices;
};

export declare const DynamicSizeList: DefineComponent<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedItemSize: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
readonly initScrollOffset: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly total: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly itemSize: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
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
clientSize: ComputedRef<string | number | undefined>;
estimatedTotalSize: ComputedRef<number>;
windowStyle: ComputedRef<(string | CSSProperties | StyleValue[] | {
[x: string]: string;
position: string;
WebkitOverflowScrolling: string;
willChange: string;
} | undefined)[]>;
windowRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
innerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
innerStyle: ComputedRef<    {
height: string;
pointerEvents: string | undefined;
width: string;
}>;
itemsToRender: ComputedRef<number[]>;
scrollbarRef: Ref<any, any>;
states: Ref<    {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
}, {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
} | {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
}>;
getItemStyle: (idx: number) => CSSProperties;
onScroll: (e: Event) => void;
onScrollbarScroll: (distanceToGo: number, totalSteps: number) => void;
onWheel: (e: WheelEvent) => void;
scrollTo: (offset: number) => void;
scrollToItem: (idx: number, alignment?: Alignment) => void;
resetScrollTop: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedItemSize: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
readonly initScrollOffset: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly total: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly itemSize: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
readonly data: any[];
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl", never>;
readonly layout: EpPropMergeType<StringConstructor, "horizontal" | "vertical", never>;
readonly className: string;
readonly containerElement: EpPropMergeType<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown>;
readonly innerElement: EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly cache: number;
readonly initScrollOffset: number;
}>;

export declare type DynamicSizeListInstance = InstanceType<typeof DynamicSizeList> & unknown;

export declare type ExposesStates = {
    isScrolling: boolean;
    updateRequested: boolean;
};

export declare const FixedSizeGrid: DefineComponent<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter_2) | (() => GridItemKeyGetter_2) | {
(): GridItemKeyGetter_2;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter_2) | (() => GridItemKeyGetter_2) | {
(): GridItemKeyGetter_2;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly columnWidth: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedColumnWidth: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly estimatedRowHeight: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter_2) | (() => GridItemKeyGetter_2) | {
(): GridItemKeyGetter_2;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => GridItemKeyGetter_2) | (() => GridItemKeyGetter_2) | {
(): GridItemKeyGetter_2;
new (): any;
readonly prototype: any;
})[], unknown, unknown, ({ columnIndex, rowIndex }: {
columnIndex: number;
rowIndex: number;
}) => string, boolean>;
readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly rowHeight: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalColumn: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly totalRow: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
readonly role: StringConstructor;
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
readonly data: any[];
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl", never>;
readonly className: string;
readonly containerElement: EpPropMergeType<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown>;
readonly innerElement: EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly itemKey: GridItemKeyGetter_2;
readonly columnCache: number;
readonly initScrollLeft: number;
readonly initScrollTop: number;
readonly rowCache: number;
readonly hScrollbarSize: number;
readonly vScrollbarSize: number;
readonly scrollbarStartGap: number;
readonly scrollbarEndGap: number;
}>;

export declare const FixedSizeList: DefineComponent<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedItemSize: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
readonly initScrollOffset: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly total: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly itemSize: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
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
clientSize: ComputedRef<string | number | undefined>;
estimatedTotalSize: ComputedRef<number>;
windowStyle: ComputedRef<(string | CSSProperties | StyleValue[] | {
[x: string]: string;
position: string;
WebkitOverflowScrolling: string;
willChange: string;
} | undefined)[]>;
windowRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
innerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
innerStyle: ComputedRef<    {
height: string;
pointerEvents: string | undefined;
width: string;
}>;
itemsToRender: ComputedRef<number[]>;
scrollbarRef: Ref<any, any>;
states: Ref<    {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
}, {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
} | {
isScrolling: boolean;
scrollDir: string;
scrollOffset: number;
updateRequested: boolean;
isScrollbarDragging: boolean;
scrollbarAlwaysOn: boolean;
}>;
getItemStyle: (idx: number) => CSSProperties;
onScroll: (e: Event) => void;
onScrollbarScroll: (distanceToGo: number, totalSteps: number) => void;
onWheel: (e: WheelEvent) => void;
scrollTo: (offset: number) => void;
scrollToItem: (idx: number, alignment?: Alignment_2) => void;
resetScrollTop: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
readonly height: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly useIsScrolling: BooleanConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
readonly estimatedItemSize: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
readonly initScrollOffset: EpPropFinalized<NumberConstructor, never, never, 0, false>;
readonly total: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly itemSize: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2) | ((new (...args: any[]) => number | ItemSize_2) | (() => number | ItemSize_2))[], never, never>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
readonly data: any[];
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl", never>;
readonly layout: EpPropMergeType<StringConstructor, "horizontal" | "vertical", never>;
readonly className: string;
readonly containerElement: EpPropMergeType<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown>;
readonly innerElement: EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
readonly perfMode: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly useIsScrolling: boolean;
readonly scrollbarAlwaysOn: boolean;
readonly cache: number;
readonly initScrollOffset: number;
}>;

export declare type FixedSizeListInstance = InstanceType<typeof FixedSizeList> & unknown;

declare const FORWARD = "forward";

export declare type GetEstimatedTotalSize<T, P extends InitCacheFunc<T, GridCache | ListCache>> = (props: T, cache: ReturnType<P>) => number;

export declare type GetGridOffset<T, P extends InitGridCacheFunc<T>> = (props: T, index: number, alignment: Alignment, offset: number, cache: ReturnType<P>, scrollbarWidth: number) => number;

export declare type GetOffset<T, P extends InitListCacheFunc<T>> = (props: T, idx: number, alignment: Alignment, offset: number, cache: ReturnType<P>) => number;

export declare type GetPosition<T, P extends InitGridCacheFunc<T>> = (props: T, index: number, cache: ReturnType<P>) => [number, number];

export declare type GetStartIndexForOffset<T, P extends InitCacheFunc<T, GridCache | ListCache>> = (props: T, offset: number, cache: ReturnType<P>) => number;

export declare type GetStopIndexForStartIndex<T, P extends InitCacheFunc<T, GridCache | ListCache>> = (props: T, startIndex: number, scrollOffset: number, cache: ReturnType<P>) => number;

export declare type GridCache = {
    column: Record<string, ListItem>;
    row: Record<string, ListItem>;
    estimatedColumnWidth: number;
    estimatedRowHeight: number;
    lastVisitedColumnIndex: number;
    lastVisitedRowIndex: number;
};

export declare type GridConstructorProps<T, P extends InitGridCacheFunc<T> = InitGridCacheFunc<T>> = {
    name?: string;
    getColumnOffset: GetGridOffset<T, P>;
    getColumnPosition: GetPosition<T, P>;
    getColumnStartIndexForOffset: GetStartIndexForOffset<T, P>;
    getColumnStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>;
    getEstimatedTotalHeight: GetEstimatedTotalSize<T, P>;
    getEstimatedTotalWidth: GetEstimatedTotalSize<T, P>;
    getRowOffset: GetGridOffset<T, P>;
    getRowPosition: GetPosition<T, P>;
    getRowStartIndexForOffset: GetStartIndexForOffset<T, P>;
    getRowStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>;
    initCache: P;
    injectToInstance?: (instance: Instance, cache: Ref<ReturnType<P>>) => void;
    clearCache: boolean;
    validateProps: PropValidator<T>;
};

/**
 * Instance methods and emits
 */
export declare type GridDefaultSlotParams = {
    columnIndex: number;
    rowIndex: number;
    data: any;
    key: number | string;
    isScrolling?: boolean;
    style: CSSProperties;
};

export declare type GridExposes = {
    states: {
        scrollLeft: number;
        scrollTop: number;
        xAxisScrollDir: Direction;
        yAxisScrollDir: Direction;
    } & ExposesStates;
    scrollTo: (props: {
        scrollLeft: number;
        scrollTop: number;
    }) => void;
    scrollToItem: (columnIndex?: number, rowIndex?: number, alignment?: Alignment) => void;
} & SharedExposes;

export declare type GridInstance = InstanceType<ReturnType<typeof createGrid>> & UnwrapRef<{
    windowRef: Ref<HTMLElement>;
    innerRef: Ref<HTMLElement>;
    getItemStyleCache: ReturnType<typeof useCache>;
    scrollTo: (scrollOptions: GridScrollOptions) => void;
    scrollToItem: (rowIndex: number, columnIndex: number, alignment: Alignment) => void;
    states: Ref<{
        isScrolling: boolean;
        scrollLeft: number;
        scrollTop: number;
        updateRequested: boolean;
        xAxisScrollDir: Dir;
        yAxisScrollDir: Dir;
    }>;
}>;

export declare type GridItemKeyGetter = <T extends {
    [key: string | number]: any;
}>(args: {
    columnIndex: number;
    data: T;
    rowIndex: number;
}) => string | number;

export declare type GridItemRenderedEvtParams = {
    columnCacheStart: number;
    columnCacheEnd: number;
    rowCacheStart: number;
    rowCacheEnd: number;
    columnVisibleStart: number;
    columnVisibleEnd: number;
    rowVisibleStart: number;
    rowVisibleEnd: number;
};

export declare type GridScrollOptions = {
    scrollLeft?: number;
    scrollTop?: number;
};

declare type Indices = {
    columnIndex?: number;
    rowIndex?: number;
};

export declare type InitCacheFunc<T, P> = (props: T, cache: Instance) => P;

export declare type InitGridCacheFunc<T> = InitCacheFunc<T, GridCache>;

export declare type InitListCacheFunc<T> = InitCacheFunc<T, ListCache>;

export declare type Instance = ComponentInternalInstance;

export declare type ItemProps<T> = {
    data: T;
    style: CSSProperties;
    scrolling?: boolean;
    index: number;
};

export declare type ItemSize = (idx: number) => number;

export declare type LayoutDirection = 'horizontal' | 'vertical';

export declare type ListCache = {
    items: Record<string, ListItem>;
    estimatedItemSize: number;
    lastVisitedIndex: number;
    clearCacheAfterIndex: (idx: number, forceUpdate?: boolean) => void;
};

export declare type ListConstructorProps<T, P extends InitListCacheFunc<T> = InitListCacheFunc<T>> = {
    name?: string;
    getItemOffset: ListItemSizer<T, P>;
    getEstimatedTotalSize: GetEstimatedTotalSize<T, P>;
    getItemSize: ListItemSizer<T, P>;
    getOffset: GetOffset<T, P>;
    getStartIndexForOffset: GetStartIndexForOffset<T, P>;
    getStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>;
    initCache: P;
    clearCache: boolean;
    validateProps: PropValidator<T>;
};

export declare type ListExposes = {
    scrollTo: (offset: number) => void;
    scrollToItem: (idx: number, alignment?: Alignment) => void;
    states: {
        scrollDir: Direction;
        scrollOffset: number;
    } & ExposesStates;
} & SharedExposes;

export declare type ListItem = {
    offset: number;
    size: number;
};

export declare type ListItemSizer<T, P extends InitListCacheFunc<T>> = (props: T, index: number, cache: ReturnType<P>) => number;

export declare type PropValidator<T> = (props: T) => void;

export declare type ResetAfterIndex = (idx: number, forceUpdate: boolean) => void;

export declare type ResetAfterIndices = (indices: Indices, forceUpdate: boolean) => void;

export declare type RTLOffsetType = 'negative' | 'positive-descending' | 'positive-ascending';

export declare type ScrollbarExpose = {
    onMouseUp: () => void;
};

export declare type ScrollDir = 'forwards' | 'backwards';

export declare type SharedExposes = {
    windowRef: Ref<HTMLElement>;
    innerRef: Ref<HTMLElement>;
    getItemStyleCache: (_: any, __: any, ___: any) => CSSProperties;
};

declare const useCache: <T>() => ComputedRef<(((_: any, __: any, ___: any) => Record<string, T>) & MemoizedFunction) | MemoizedFn<(_: any, __: any, ___: any) => Record<string, T>>>;

export declare type VirtualizedGridProps = ExtractPropTypes<typeof virtualizedGridProps>;

export declare const virtualizedGridProps: {
    readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
    readonly height: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly useIsScrolling: BooleanConstructor;
    readonly width: {
        readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
    readonly columnCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
    readonly columnWidth: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly estimatedColumnWidth: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly estimatedRowHeight: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly initScrollLeft: EpPropFinalized<NumberConstructor, never, never, 0, false>;
    readonly initScrollTop: EpPropFinalized<NumberConstructor, never, never, 0, false>;
    readonly itemKey: EpPropFinalized<(new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
    (): GridItemKeyGetter;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => GridItemKeyGetter) | (() => GridItemKeyGetter) | {
    (): GridItemKeyGetter;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, ({ columnIndex, rowIndex }: {
    columnIndex: number;
    rowIndex: number;
    }) => string, boolean>;
    readonly rowCache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
    readonly rowHeight: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly totalColumn: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly totalRow: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly vScrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly scrollbarStartGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly scrollbarEndGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly role: StringConstructor;
};

export declare type VirtualizedListProps = ExtractPropTypes<typeof virtualizedListProps>;

export declare const virtualizedListProps: {
    readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
    readonly height: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly useIsScrolling: BooleanConstructor;
    readonly width: {
        readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
    readonly cache: EpPropFinalized<NumberConstructor, never, never, 2, false>;
    readonly estimatedItemSize: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
    readonly initScrollOffset: EpPropFinalized<NumberConstructor, never, never, 0, false>;
    readonly total: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly itemSize: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | ItemSize) | (() => number | ItemSize) | ((new (...args: any[]) => number | ItemSize) | (() => number | ItemSize))[], never, never>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type VirtualizedProps = ExtractPropTypes<typeof virtualizedProps>;

export declare const virtualizedProps: {
    readonly className: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly containerElement: EpPropFinalized<(new (...args: any[]) => string | Element) | (() => string | Element) | ((new (...args: any[]) => string | Element) | (() => string | Element))[], unknown, unknown, "div", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => [], boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl", never, "ltr", false>;
    readonly height: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly innerElement: EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly useIsScrolling: BooleanConstructor;
    readonly width: {
        readonly type: PropType<EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly perfMode: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
};

export declare type VirtualizedScrollbarProps = ExtractPropTypes<typeof virtualizedScrollbarProps>;

export declare const virtualizedScrollbarProps: {
    readonly alwaysOn: BooleanConstructor;
    readonly class: StringConstructor;
    readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", never, "vertical", false>;
    readonly total: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly ratio: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly clientSize: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly scrollFrom: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly scrollbarSize: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly startGap: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly endGap: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly visible: BooleanConstructor;
};

export { }
