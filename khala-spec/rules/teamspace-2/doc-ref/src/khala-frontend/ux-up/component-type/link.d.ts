import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly type: EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, undefined, boolean>;
readonly underline: EpPropFinalized<readonly [BooleanConstructor, StringConstructor], boolean | "always" | "never" | "hover", unknown, undefined, boolean>;
readonly disabled: BooleanConstructor;
readonly href: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly target: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "_self", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly type: EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, undefined, boolean>;
readonly underline: EpPropFinalized<readonly [BooleanConstructor, StringConstructor], boolean | "always" | "never" | "hover", unknown, undefined, boolean>;
readonly disabled: BooleanConstructor;
readonly href: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly target: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "_self", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
readonly disabled: boolean;
readonly underline: EpPropMergeType<readonly [BooleanConstructor, StringConstructor], boolean | "always" | "never" | "hover", unknown>;
readonly type: EpPropMergeType<StringConstructor, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly target: string;
readonly href: string;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
    icon?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare interface LinkConfigContext {
    type?: string;
    underline?: string | boolean;
}

export declare type LinkEmits = typeof linkEmits;

export declare const linkEmits: {
    click: (evt: MouseEvent) => boolean;
};

export declare type LinkInstance = InstanceType<typeof _default> & unknown;

export declare type LinkProps = ExtractPropTypes<typeof linkProps>;

export declare const linkProps: {
    readonly type: EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, undefined, boolean>;
    readonly underline: EpPropFinalized<readonly [BooleanConstructor, StringConstructor], boolean | "always" | "never" | "hover", unknown, undefined, boolean>;
    readonly disabled: BooleanConstructor;
    readonly href: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly target: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "_self", boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxLink: SFCWithInstall<typeof _default>;
export { UxLink }
export default UxLink;

export { }
