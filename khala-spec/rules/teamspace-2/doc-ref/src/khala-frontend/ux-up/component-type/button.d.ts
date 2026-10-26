import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly nativeType: EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
readonly loading: BooleanConstructor;
readonly loadingIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly text: BooleanConstructor;
readonly isText: BooleanConstructor;
readonly link: BooleanConstructor;
readonly isLink: BooleanConstructor;
readonly bg: BooleanConstructor;
readonly isBg: BooleanConstructor;
readonly autofocus: BooleanConstructor;
readonly round: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly circle: BooleanConstructor;
readonly color: StringConstructor;
readonly dark: BooleanConstructor;
readonly autoInsertSpace: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly tag: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
}, {
/** @description button html element */
ref: Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
/** @description button size */
size: ComputedRef<"" | "small" | "default" | "large" | "mini">;
/** @description button type */
type: ComputedRef<string>;
/** @description button disabled */
disabled: ComputedRef<boolean>;
/** @description whether adding space */
shouldAddSpace: ComputedRef<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly nativeType: EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
readonly loading: BooleanConstructor;
readonly loadingIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly text: BooleanConstructor;
readonly isText: BooleanConstructor;
readonly link: BooleanConstructor;
readonly isLink: BooleanConstructor;
readonly bg: BooleanConstructor;
readonly isBg: BooleanConstructor;
readonly autofocus: BooleanConstructor;
readonly round: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly circle: BooleanConstructor;
readonly color: StringConstructor;
readonly dark: BooleanConstructor;
readonly autoInsertSpace: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly tag: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
readonly link: boolean;
readonly circle: boolean;
readonly text: boolean;
readonly disabled: boolean;
readonly round: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly dark: boolean;
readonly type: EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly loading: boolean;
readonly autofocus: boolean;
readonly tag: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly plain: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly autoInsertSpace: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly nativeType: EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
readonly loadingIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly isText: boolean;
readonly isLink: boolean;
readonly bg: boolean;
readonly isBg: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
}>>, {
readonly type: EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
}>;

declare function __VLS_template(): {
    loading?(_: {}): any;
    icon?(_: {}): any;
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

export declare interface ButtonConfigContext {
    type?: string;
    plain?: boolean;
    round?: boolean;
    autoInsertSpace?: boolean;
}

export declare type ButtonEmits = typeof buttonEmits;

export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};

export declare interface ButtonGroupContext {
    size?: ButtonProps['size'];
    type?: ButtonProps['type'];
}

export declare const buttonGroupContextKey: InjectionKey<ButtonGroupContext>;

export declare type ButtonGroupInstance = InstanceType<typeof _default_2> & unknown;

export declare type ButtonInstance = InstanceType<typeof _default> & unknown;

export declare type ButtonNativeType = ButtonProps['nativeType'];

export declare const buttonNativeTypes: readonly ["button", "submit", "reset"];

export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export declare const buttonProps: {
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly type: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly nativeType: EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly text: BooleanConstructor;
    readonly isText: BooleanConstructor;
    readonly link: BooleanConstructor;
    readonly isLink: BooleanConstructor;
    readonly bg: BooleanConstructor;
    readonly isBg: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly dark: BooleanConstructor;
    readonly autoInsertSpace: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly tag: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
};

export declare type ButtonType = ButtonProps['type'];

export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const UxButton: SFCWithInstall<typeof _default> & {
    ButtonGroup: typeof _default_2;
};
export { UxButton }
export default UxButton;

export declare const UxButtonGroup: SFCWithInstall<typeof _default_2>;

export { }
