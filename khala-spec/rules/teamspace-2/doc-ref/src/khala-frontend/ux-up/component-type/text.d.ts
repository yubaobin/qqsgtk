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
readonly type: EpPropFinalized<StringConstructor, "" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly size: EpPropFinalized<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown, "", boolean>;
readonly truncated: BooleanConstructor;
readonly lineClamp: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "span", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly type: EpPropFinalized<StringConstructor, "" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly size: EpPropFinalized<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown, "", boolean>;
readonly truncated: BooleanConstructor;
readonly lineClamp: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "span", boolean>;
}>>, {
readonly size: EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown>;
readonly type: EpPropMergeType<StringConstructor, "" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly tag: string;
readonly truncated: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type TextProps = ExtractPropTypes<typeof textProps>;

export declare const textProps: {
    readonly type: EpPropFinalized<StringConstructor, "" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    readonly size: EpPropFinalized<StringConstructor, "" | "small" | "default" | "large" | "mini", unknown, "", boolean>;
    readonly truncated: BooleanConstructor;
    readonly lineClamp: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "span", boolean>;
};

declare const UxText: SFCWithInstall<typeof _default>;
export { UxText }
export default UxText;

export { }
