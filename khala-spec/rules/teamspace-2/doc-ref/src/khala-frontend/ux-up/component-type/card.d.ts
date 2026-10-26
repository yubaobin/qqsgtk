import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly headerClass: StringConstructor;
readonly bodyClass: StringConstructor;
readonly footerClass: StringConstructor;
readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, undefined, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly headerClass: StringConstructor;
readonly bodyClass: StringConstructor;
readonly footerClass: StringConstructor;
readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, undefined, boolean>;
}>>, {
readonly footer: string;
readonly header: string;
readonly bodyStyle: StyleValue;
readonly shadow: EpPropMergeType<StringConstructor, "always" | "never" | "hover", unknown>;
}>;

declare function __VLS_template(): {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare interface CardConfigContext {
    shadow?: string;
}

export declare const cardContextKey: InjectionKey<CardConfigContext>;

export declare type CardInstance = InstanceType<typeof _default> & unknown;

export declare type CardProps = ExtractPropTypes<typeof cardProps>;

export declare const cardProps: {
    readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, undefined, boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxCard: SFCWithInstall<typeof _default>;
export { UxCard }
export default UxCard;

export { }
