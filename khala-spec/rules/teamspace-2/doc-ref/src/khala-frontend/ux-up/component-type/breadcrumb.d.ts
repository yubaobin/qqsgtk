import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { RouteLocationAsPathGeneric } from 'vue-router';
import { RouteLocationAsRelativeGeneric } from 'vue-router';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly separator: EpPropFinalized<StringConstructor, unknown, unknown, "/", boolean>;
readonly separatorIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly separator: EpPropFinalized<StringConstructor, unknown, unknown, "/", boolean>;
readonly separatorIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly separator: string;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly to: EpPropFinalized<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown, "", boolean>;
readonly replace: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly to: EpPropFinalized<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown, "", boolean>;
readonly replace: BooleanConstructor;
}>>, {
readonly replace: boolean;
readonly to: EpPropMergeType<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
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

export declare type BreadcrumbInstance = InstanceType<typeof _default> & unknown;

export declare type BreadcrumbItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;

export declare const breadcrumbItemProps: {
    readonly to: EpPropFinalized<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown, "", boolean>;
    readonly replace: BooleanConstructor;
};

export declare const breadcrumbKey: InjectionKey<BreadcrumbProps>;

export declare type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;

export declare const breadcrumbProps: {
    readonly separator: EpPropFinalized<StringConstructor, unknown, unknown, "/", boolean>;
    readonly separatorIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const UxBreadcrumb: SFCWithInstall<typeof _default> & {
    BreadcrumbItem: typeof _default_2;
};
export { UxBreadcrumb }
export default UxBreadcrumb;

export declare const UxBreadcrumbItem: SFCWithInstall<typeof _default_2>;

export { }
