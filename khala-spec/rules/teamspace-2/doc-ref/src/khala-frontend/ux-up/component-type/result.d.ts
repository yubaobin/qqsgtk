import { AllowedComponentProps } from 'vue';
import type { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly subTitle: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icon: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly subTitle: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icon: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
}>>, {
readonly title: string;
readonly icon: EpPropMergeType<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown>;
readonly subTitle: string;
}>;

declare function __VLS_template(): {
    icon?(_: {}): any;
    title?(_: {}): any;
    "sub-title"?(_: {}): any;
    extra?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const IconComponentMap: Record<(typeof IconMap)[keyof typeof IconMap], Component>;

export declare const IconMap: {
    readonly primary: "icon-primary";
    readonly success: "icon-success";
    readonly warning: "icon-warning";
    readonly error: "icon-error";
    readonly info: "icon-info";
};

export declare type ResultInstance = InstanceType<typeof _default> & unknown;

export declare type ResultProps = ExtractPropTypes<typeof resultProps>;

export declare const resultProps: {
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly subTitle: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icon: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
};

declare const UxResult: SFCWithInstall<typeof _default>;
export { UxResult }
export default UxResult;

export { }
