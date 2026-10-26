import { AllowedComponentProps } from 'vue';
import type { App } from 'vue';
import { ButtonConfigContext } from 'ux-up';
import type { ButtonConfigContext as ButtonConfigContext_2 } from 'ux-up/es/components/button';
import { CardConfigContext } from 'ux-up';
import type { CardConfigContext as CardConfigContext_2 } from 'ux-up/es/components/card';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { ConfigProviderProps as ConfigProviderProps_2 } from 'ux-up';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Language } from 'ux-up/es/locale';
import { LinkConfigContext } from 'ux-up';
import type { LinkConfigContext as LinkConfigContext_2 } from 'ux-up/es/components/link';
import { LocaleContext } from 'ux-up/es/hooks';
import type { MaybeRef } from '@vueuse/core';
import type { MessageConfigContext } from 'ux-up/es/components/message';
import { PropType } from 'vue';
import type { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const ConfigProvider: DefineComponent<    {
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly a11y: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly locale: {
readonly type: PropType<Language>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly button: {
readonly type: PropType<ButtonConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly card: {
readonly type: PropType<CardConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly link: {
readonly type: PropType<LinkConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly experimentalFeatures: {
readonly type: PropType<ExperimentalFeatures>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly keyboardNavigation: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly message: {
readonly type: PropType<MessageConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: NumberConstructor;
readonly namespace: EpPropFinalized<StringConstructor, unknown, unknown, "ux", boolean>;
readonly iconPrefix: StringConstructor;
readonly pageScale: NumberConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly a11y: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly locale: {
readonly type: PropType<Language>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly button: {
readonly type: PropType<ButtonConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly card: {
readonly type: PropType<CardConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly link: {
readonly type: PropType<LinkConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly experimentalFeatures: {
readonly type: PropType<ExperimentalFeatures>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly keyboardNavigation: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly message: {
readonly type: PropType<MessageConfigContext>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: NumberConstructor;
readonly namespace: EpPropFinalized<StringConstructor, unknown, unknown, "ux", boolean>;
readonly iconPrefix: StringConstructor;
readonly pageScale: NumberConstructor;
}>>, {
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly a11y: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly keyboardNavigation: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly namespace: string;
}>;

export declare type ConfigProviderContext = Partial<ConfigProviderProps>;

export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;

export declare type ConfigProviderInstance = InstanceType<typeof ConfigProvider> & unknown;

export declare type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

export declare const configProviderProps: {
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    readonly a11y: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly locale: {
        readonly type: PropType<Language>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly button: {
        readonly type: PropType<ButtonConfigContext_2>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly card: {
        readonly type: PropType<CardConfigContext_2>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly link: {
        readonly type: PropType<LinkConfigContext_2>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: PropType<ExperimentalFeatures>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly keyboardNavigation: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly message: {
        readonly type: PropType<MessageConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: NumberConstructor;
    readonly namespace: EpPropFinalized<StringConstructor, unknown, unknown, "ux", boolean>;
    readonly iconPrefix: StringConstructor;
    readonly pageScale: NumberConstructor;
};

export declare type ExperimentalFeatures = {};

export declare const messageConfig: MessageConfigContext;

export declare const provideGlobalConfig: (config: MaybeRef<ConfigProviderContext>, app?: App, global?: boolean) => ComputedRef<Partial<ConfigProviderProps_2>> | undefined;

export declare function useGlobalComponentSettings(block: string, sizeFallback?: MaybeRef<ConfigProviderContext['size']>): {
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
    locale: LocaleContext;
    zIndex: {
        initialZIndex: ComputedRef<number>;
        currentZIndex: ComputedRef<number>;
        nextZIndex: () => number;
    };
    size: ComputedRef<"small" | "" | "default" | "large" | "mini">;
};

export declare function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(key: K, defaultValue?: D): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;

export declare function useGlobalConfig(): Ref<ConfigProviderContext>;

declare const UxConfigProvider: SFCWithInstall<typeof ConfigProvider>;
export { UxConfigProvider }
export default UxConfigProvider;

export { }
