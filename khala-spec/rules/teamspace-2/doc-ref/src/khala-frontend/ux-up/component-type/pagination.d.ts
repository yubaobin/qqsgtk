import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import type { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';
import type { WritableComputedRef } from 'vue';

declare const _default: DefineComponent<    {
readonly pageSize: NumberConstructor;
readonly defaultPageSize: NumberConstructor;
readonly total: NumberConstructor;
readonly pageCount: NumberConstructor;
readonly pagerCount: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
readonly currentPage: NumberConstructor;
readonly defaultCurrentPage: NumberConstructor;
readonly layout: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
readonly pageSizes: EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly prevText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly prevIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly nextText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly nextIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly small: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly background: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly hideOnSinglePage: BooleanConstructor;
readonly appendSizeTo: StringConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | null, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:current-page': (val: number) => boolean;
'update:page-size': (val: number) => boolean;
'size-change': (val: number) => boolean;
change: (currentPage: number, pageSize: number) => boolean;
'current-change': (val: number) => boolean;
'prev-click': (val: number) => boolean;
'next-click': (val: number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly pageSize: NumberConstructor;
readonly defaultPageSize: NumberConstructor;
readonly total: NumberConstructor;
readonly pageCount: NumberConstructor;
readonly pagerCount: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
readonly currentPage: NumberConstructor;
readonly defaultCurrentPage: NumberConstructor;
readonly layout: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
readonly pageSizes: EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly prevText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly prevIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly nextText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly nextIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly small: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly background: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly hideOnSinglePage: BooleanConstructor;
readonly appendSizeTo: StringConstructor;
}>> & {
onChange?: ((currentPage: number, pageSize: number) => any) | undefined;
"onUpdate:current-page"?: ((val: number) => any) | undefined;
"onUpdate:page-size"?: ((val: number) => any) | undefined;
"onSize-change"?: ((val: number) => any) | undefined;
"onCurrent-change"?: ((val: number) => any) | undefined;
"onPrev-click"?: ((val: number) => any) | undefined;
"onNext-click"?: ((val: number) => any) | undefined;
}, {
readonly small: boolean;
readonly disabled: boolean;
readonly background: boolean;
readonly layout: string;
readonly popperClass: string;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly prevText: string;
readonly prevIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly nextText: string;
readonly nextIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly pageSizes: number[];
readonly pagerCount: number;
readonly hideOnSinglePage: boolean;
}>;

export declare type PaginationEmits = typeof paginationEmits;

export declare const paginationEmits: {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    change: (currentPage: number, pageSize: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
};

export declare type PaginationProps = ExtractPropTypes<typeof paginationProps>;

export declare const paginationProps: {
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly total: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly pagerCount: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    readonly currentPage: NumberConstructor;
    readonly defaultCurrentPage: NumberConstructor;
    readonly layout: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly pageSizes: EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly nextText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly nextIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly small: BooleanConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly background: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly hideOnSinglePage: BooleanConstructor;
    readonly appendSizeTo: StringConstructor;
};

declare const UxPagination: SFCWithInstall<typeof _default>;
export { UxPagination }
export default UxPagination;

export declare interface UxPaginationContext {
    currentPage?: WritableComputedRef<number>;
    pageCount?: ComputedRef<number>;
    disabled?: ComputedRef<boolean>;
    changeEvent?: (val: number) => void;
    handleSizeChange?: (val: number) => void;
}

export declare const uxPaginationKey: InjectionKey<UxPaginationContext>;

export { }
