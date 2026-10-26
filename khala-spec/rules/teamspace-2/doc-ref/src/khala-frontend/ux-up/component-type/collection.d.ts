import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DebuggerEvent } from 'vue';
import { DeprecationTypes } from 'vue';
import { Directive } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { MethodOptions } from 'vue';
import { NavigationGuard } from 'vue-router';
import { NavigationGuardWithThis } from 'vue-router';
import type { Ref } from 'vue';
import { RuntimeCompilerOptions } from 'vue';
import type { SetupContext } from 'vue';
import { TypesConfig } from 'vue-router';
import { VNode } from 'vue';
import { VNodeRef } from 'vue';
import { WatchCallback } from 'vue';
import { WatchOptions } from 'vue';

export declare const COLLECTION_ITEM_SIGN = "data-ux-collection-item";

export declare type CollectionItem<T = Record<string, any>> = {
    ref: HTMLElement | null;
} & T;

export declare const createCollectionWithScope: (name: string) => {
    COLLECTION_INJECTION_KEY: InjectionKey<UxCollectionInjectionContext>;
    COLLECTION_ITEM_INJECTION_KEY: InjectionKey<UxCollectionItemInjectionContext>;
    UxCollection: {
        name: string;
        setup(): void;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
        template?: string | object;
        render?: Function;
        components?: Record<string, Component>;
        directives?: Record<string, Directive>;
        inheritAttrs?: boolean;
        emits?: ThisType<void> | (string[] & ThisType<void>) | undefined;
        expose?: string[];
        serverPrefetch?(): void | Promise<any>;
        compilerOptions?: RuntimeCompilerOptions;
        call?: (this: unknown, ...args: unknown[]) => never;
        __defaults?: {} | undefined;
        compatConfig?: Partial<Record<DeprecationTypes, boolean | "suppress-warning">> & {
            MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);
        };
        data?: ((this: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>, vm: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>) => {}) | undefined;
        computed?: {} | undefined;
        methods?: {} | undefined;
        watch?: {
            [x: string]: (string | WatchCallback<any, any> | ({
                handler: WatchCallback | string;
            } & WatchOptions<boolean>)) | (string | WatchCallback<any, any> | ({
                handler: WatchCallback | string;
            } & WatchOptions<boolean>))[];
        };
        provide?: ComponentProvideOptions;
        inject?: {} | string[] | undefined;
        filters?: Record<string, Function>;
        mixins?: ComponentOptionsMixin[] | undefined;
        extends?: ComponentOptionsMixin | undefined;
        beforeCreate?(): void;
        created?(): void;
        beforeMount?(): void;
        mounted?(): void;
        beforeUpdate?(): void;
        updated?(): void;
        activated?(): void;
        deactivated?(): void;
        beforeDestroy?(): void;
        beforeUnmount?(): void;
        destroyed?(): void;
        unmounted?(): void;
        renderTracked?: (e: DebuggerEvent) => void;
        renderTriggered?: (e: DebuggerEvent) => void;
        errorCaptured?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void;
        delimiters?: [string, string];
        __differentiator?: undefined;
        __isBuiltIn?: boolean;
        __file?: string;
        __name?: string;
        beforeRouteEnter?: TypesConfig extends Record<"beforeRouteEnter", infer T> ? T : NavigationGuardWithThis<undefined>;
        beforeRouteUpdate?: TypesConfig extends Record<"beforeRouteUpdate", infer T> ? T : NavigationGuard;
        beforeRouteLeave?: TypesConfig extends Record<"beforeRouteLeave", infer T> ? T : NavigationGuard;
        key?: string | number | symbol;
        ref?: VNodeRef;
        ref_for?: boolean;
        ref_key?: string;
        onVnodeBeforeMount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeMounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeBeforeUpdate?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
        onVnodeUpdated?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
        onVnodeBeforeUnmount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeUnmounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        class?: unknown;
        style?: unknown;
    };
    UxCollectionItem: {
        name: string;
        setup(_: unknown, { attrs }: SetupContext): void;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
        template?: string | object;
        render?: Function;
        components?: Record<string, Component>;
        directives?: Record<string, Directive>;
        inheritAttrs?: boolean;
        emits?: ThisType<void> | (string[] & ThisType<void>) | undefined;
        expose?: string[];
        serverPrefetch?(): void | Promise<any>;
        compilerOptions?: RuntimeCompilerOptions;
        call?: (this: unknown, ...args: unknown[]) => never;
        __defaults?: {} | undefined;
        compatConfig?: Partial<Record<DeprecationTypes, boolean | "suppress-warning">> & {
            MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);
        };
        data?: ((this: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>, vm: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>) => {}) | undefined;
        computed?: {} | undefined;
        methods?: {} | undefined;
        watch?: {
            [x: string]: (string | WatchCallback<any, any> | ({
                handler: WatchCallback | string;
            } & WatchOptions<boolean>)) | (string | WatchCallback<any, any> | ({
                handler: WatchCallback | string;
            } & WatchOptions<boolean>))[];
        };
        provide?: ComponentProvideOptions;
        inject?: {} | string[] | undefined;
        filters?: Record<string, Function>;
        mixins?: ComponentOptionsMixin[] | undefined;
        extends?: ComponentOptionsMixin | undefined;
        beforeCreate?(): void;
        created?(): void;
        beforeMount?(): void;
        mounted?(): void;
        beforeUpdate?(): void;
        updated?(): void;
        activated?(): void;
        deactivated?(): void;
        beforeDestroy?(): void;
        beforeUnmount?(): void;
        destroyed?(): void;
        unmounted?(): void;
        renderTracked?: (e: DebuggerEvent) => void;
        renderTriggered?: (e: DebuggerEvent) => void;
        errorCaptured?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void;
        delimiters?: [string, string];
        __differentiator?: undefined;
        __isBuiltIn?: boolean;
        __file?: string;
        __name?: string;
        beforeRouteEnter?: TypesConfig extends Record<"beforeRouteEnter", infer T> ? T : NavigationGuardWithThis<undefined>;
        beforeRouteUpdate?: TypesConfig extends Record<"beforeRouteUpdate", infer T> ? T : NavigationGuard;
        beforeRouteLeave?: TypesConfig extends Record<"beforeRouteLeave", infer T> ? T : NavigationGuard;
        key?: string | number | symbol;
        ref?: VNodeRef;
        ref_for?: boolean;
        ref_key?: string;
        onVnodeBeforeMount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeMounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeBeforeUpdate?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
        onVnodeUpdated?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
        onVnodeBeforeUnmount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        onVnodeUnmounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
        class?: unknown;
        style?: unknown;
    };
};

export declare type UxCollectionInjectionContext = {
    itemMap: Map<HTMLElement, CollectionItem>;
    getItems: <T>() => CollectionItem<T>[];
    collectionRef: Ref<HTMLElement | undefined>;
};

export declare type UxCollectionItemInjectionContext = {
    collectionItemRef: Ref<HTMLElement | undefined>;
};

export { }
