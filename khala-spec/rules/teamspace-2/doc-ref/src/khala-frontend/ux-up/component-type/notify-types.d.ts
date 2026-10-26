import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
readonly closable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly showIcon: BooleanConstructor;
readonly center: BooleanConstructor;
readonly effect: EpPropFinalized<StringConstructor, "dark" | "light", unknown, "light", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
open: () => void;
close: (evt?: Event | undefined) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
readonly closable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly showIcon: BooleanConstructor;
readonly center: BooleanConstructor;
readonly effect: EpPropFinalized<StringConstructor, "dark" | "light", unknown, "light", boolean>;
}>> & {
onOpen?: (() => any) | undefined;
onClose?: ((evt?: Event | undefined) => any) | undefined;
}, {
readonly title: string;
readonly center: boolean;
readonly type: EpPropMergeType<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown>;
readonly description: string;
readonly effect: EpPropMergeType<StringConstructor, "dark" | "light", unknown>;
readonly showAfter: number;
readonly hideAfter: number;
readonly autoClose: number;
readonly closable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly closeText: string;
readonly showIcon: boolean;
}>;

declare function __VLS_template(): {
    icon?(_: {}): any;
    title?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const alertEffects: readonly ["light", "dark"];

export declare type AlertEmits = typeof alertEmits;

export declare const alertEmits: {
    open: () => boolean;
    close: (evt?: Event) => boolean;
};

export declare type AlertInstance = InstanceType<typeof _default> & unknown;

export declare type AlertProps = ExtractPropTypes<typeof alertProps>;

export declare const alertProps: {
    readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
    readonly closable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeText: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly showIcon: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly effect: EpPropFinalized<StringConstructor, "dark" | "light", unknown, "light", boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxAlert: SFCWithInstall<typeof _default>;
export { UxAlert }
export default UxAlert;

export { }
