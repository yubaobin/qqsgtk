import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { ObjectFitProperty } from 'csstype';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly size: EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large" | "mini", number, "", boolean>;
readonly shape: EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly alt: StringConstructor;
readonly srcSet: StringConstructor;
readonly fit: EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (evt: Event) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly size: EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large" | "mini", number, "", boolean>;
readonly shape: EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly alt: StringConstructor;
readonly srcSet: StringConstructor;
readonly fit: EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
}>> & {
onError?: ((evt: Event) => any) | undefined;
}, {
readonly size: EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large" | "mini", number>;
readonly shape: EpPropMergeType<StringConstructor, "circle" | "square", unknown>;
readonly src: string;
readonly fit: EpPropMergeType<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty))[], unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type AvatarEmits = typeof avatarEmits;

export declare const avatarEmits: {
    error: (evt: Event) => boolean;
};

export declare type AvatarInstance = InstanceType<typeof _default> & unknown;

export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;

export declare const avatarProps: {
    readonly size: EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large" | "mini", number, "", boolean>;
    readonly shape: EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly alt: StringConstructor;
    readonly srcSet: StringConstructor;
    readonly fit: EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxAvatar: SFCWithInstall<typeof _default>;
export { UxAvatar }
export default UxAvatar;

export { }
