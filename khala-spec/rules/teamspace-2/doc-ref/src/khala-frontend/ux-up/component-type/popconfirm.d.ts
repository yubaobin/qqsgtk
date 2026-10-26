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
readonly title: StringConstructor;
readonly confirmButtonText: StringConstructor;
readonly cancelButtonText: StringConstructor;
readonly confirmButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
readonly cancelButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "text", boolean>;
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly iconColor: EpPropFinalized<StringConstructor, unknown, unknown, "#f90", boolean>;
readonly hideIcon: BooleanConstructor;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: BooleanConstructor;
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "auto", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
cancel: (e: MouseEvent) => void;
confirm: (e: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly title: StringConstructor;
readonly confirmButtonText: StringConstructor;
readonly cancelButtonText: StringConstructor;
readonly confirmButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
readonly cancelButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "text", boolean>;
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly iconColor: EpPropFinalized<StringConstructor, unknown, unknown, "#f90", boolean>;
readonly hideIcon: BooleanConstructor;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: BooleanConstructor;
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "auto", boolean>;
}>> & {
onConfirm?: ((e: MouseEvent) => any) | undefined;
onCancel?: ((e: MouseEvent) => any) | undefined;
}, {
readonly width: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly icon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly hideAfter: number;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: boolean;
readonly confirmButtonType: EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly cancelButtonType: EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly iconColor: string;
readonly hideIcon: boolean;
}>;

declare function __VLS_template(): {
    actions?(_: {
        confirm: (e: MouseEvent) => void;
        cancel: (e: MouseEvent) => void;
    }): any;
    reference?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type PopconfirmEmits = typeof popconfirmEmits;

export declare const popconfirmEmits: {
    /**
     * @description triggers when click confirm button
     */
    confirm: (e: MouseEvent) => boolean;
    /**
     * @description triggers when click cancel button
     */
    cancel: (e: MouseEvent) => boolean;
};

export declare type PopconfirmInstance = InstanceType<typeof _default> & unknown;

export declare type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;

export declare const popconfirmProps: {
    readonly title: StringConstructor;
    readonly confirmButtonText: StringConstructor;
    readonly cancelButtonText: StringConstructor;
    readonly confirmButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
    readonly cancelButtonType: EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "text", boolean>;
    readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly iconColor: EpPropFinalized<StringConstructor, unknown, unknown, "#f90", boolean>;
    readonly hideIcon: BooleanConstructor;
    readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly persistent: BooleanConstructor;
    readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "auto", boolean>;
};

declare const UxPopconfirm: SFCWithInstall<typeof _default>;
export { UxPopconfirm }
export default UxPopconfirm;

export { }
