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
readonly checked: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: boolean) => void;
"update:checked": (value: boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly checked: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
}>> & {
onChange?: ((value: boolean) => any) | undefined;
"onUpdate:checked"?: ((value: boolean) => any) | undefined;
}, {
readonly disabled: boolean;
readonly type: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly checked: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type CheckTagEmits = typeof checkTagEmits;

export declare const checkTagEmits: {
    'update:checked': (value: boolean) => boolean;
    change: (value: boolean) => boolean;
};

export declare type CheckTagInstance = InstanceType<typeof _default> & unknown;

export declare type CheckTagProps = ExtractPropTypes<typeof checkTagProps>;

export declare const checkTagProps: {
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxCheckTag: SFCWithInstall<typeof _default>;
export { UxCheckTag }
export default UxCheckTag;

export { }
