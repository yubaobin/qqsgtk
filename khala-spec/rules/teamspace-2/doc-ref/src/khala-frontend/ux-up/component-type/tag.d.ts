import { AllowedComponentProps } from 'vue';
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
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
readonly closable: BooleanConstructor;
readonly disableTransitions: BooleanConstructor;
readonly hit: BooleanConstructor;
readonly color: StringConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
readonly round: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => void;
close: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
readonly closable: BooleanConstructor;
readonly disableTransitions: BooleanConstructor;
readonly hit: BooleanConstructor;
readonly color: StringConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
readonly round: BooleanConstructor;
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
readonly round: boolean;
readonly type: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly effect: EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
readonly closable: boolean;
readonly disableTransitions: boolean;
readonly hit: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type TagEmits = typeof tagEmits;

export declare const tagEmits: {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
};

export declare type TagInstance = InstanceType<typeof _default> & unknown;

export declare type TagProps = ExtractPropTypes<typeof tagProps>;

export declare const tagProps: {
    readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "primary", boolean>;
    readonly closable: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly hit: BooleanConstructor;
    readonly color: StringConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly effect: EpPropFinalized<StringConstructor, "dark" | "light" | "plain", unknown, "light", boolean>;
    readonly round: BooleanConstructor;
};

declare const UxTag: SFCWithInstall<typeof _default>;
export { UxTag }
export default UxTag;

export { }
