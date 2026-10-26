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
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly contentPosition: EpPropFinalized<StringConstructor, "center" | "left" | "right", unknown, "center", boolean>;
readonly borderStyle: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "solid", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly contentPosition: EpPropFinalized<StringConstructor, "center" | "left" | "right", unknown, "center", boolean>;
readonly borderStyle: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "solid", boolean>;
}>>, {
readonly direction: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly borderStyle: string;
readonly contentPosition: EpPropMergeType<StringConstructor, "center" | "left" | "right", unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type BorderStyle = CSSStyleDeclaration['borderStyle'];

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type DividerInstance = InstanceType<typeof _default> & unknown;

export declare type DividerProps = ExtractPropTypes<typeof dividerProps>;

export declare const dividerProps: {
    readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    readonly contentPosition: EpPropFinalized<StringConstructor, "center" | "left" | "right", unknown, "center", boolean>;
    readonly borderStyle: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "solid", boolean>;
};

declare const UxDivider: SFCWithInstall<typeof _default>;
export { UxDivider }
export default UxDivider;

export { }
