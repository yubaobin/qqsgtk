import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly title: StringConstructor;
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
back: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly title: StringConstructor;
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}>> & {
onBack?: (() => any) | undefined;
}, {
readonly content: string;
readonly icon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
}>;

declare function __VLS_template(): {
    breadcrumb?(_: {}): any;
    icon?(_: {}): any;
    title?(_: {}): any;
    content?(_: {}): any;
    extra?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type PageHeaderEmits = typeof pageHeaderEmits;

export declare const pageHeaderEmits: {
    back: () => boolean;
};

export declare type PageHeaderInstance = InstanceType<typeof _default> & unknown;

export declare type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>;

export declare const pageHeaderProps: {
    readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly title: StringConstructor;
    readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
};

declare const UxPageHeader: SFCWithInstall<typeof _default>;
export { UxPageHeader }
export default UxPageHeader;

export { }
