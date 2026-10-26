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
container: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null) | ((new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
bound: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
duration: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
marker: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
type: EpPropFinalized<(new (...args: any[]) => "default" | "underline") | (() => "default" | "underline") | ((new (...args: any[]) => "default" | "underline") | (() => "default" | "underline"))[], unknown, unknown, string, boolean>;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
selectScrollTop: BooleanConstructor;
}, {
scrollTo: (href?: string) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (e: MouseEvent, href?: string | undefined) => void;
change: (href: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
container: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null) | ((new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
bound: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
duration: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
marker: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
type: EpPropFinalized<(new (...args: any[]) => "default" | "underline") | (() => "default" | "underline") | ((new (...args: any[]) => "default" | "underline") | (() => "default" | "underline"))[], unknown, unknown, string, boolean>;
direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
selectScrollTop: BooleanConstructor;
}>> & {
onChange?: ((href: string) => any) | undefined;
onClick?: ((e: MouseEvent, href?: string | undefined) => any) | undefined;
}, {
marker: EpPropMergeType<BooleanConstructor, unknown, unknown>;
direction: EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
offset: number;
type: EpPropMergeType<(new (...args: any[]) => "default" | "underline") | (() => "default" | "underline") | ((new (...args: any[]) => "default" | "underline") | (() => "default" | "underline"))[], unknown, unknown>;
duration: number;
bound: number;
selectScrollTop: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
title: StringConstructor;
href: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
title: StringConstructor;
href: StringConstructor;
}>>, {}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
    "sub-link"?(_: {}): any;
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

export declare type AnchorEmits = typeof anchorEmits;

export declare const anchorEmits: {
    change: (href: string) => boolean;
    click: (e: MouseEvent, href?: string) => boolean;
};

export declare type AnchorInstance = InstanceType<typeof _default> & unknown;

export declare type AnchorProps = ExtractPropTypes<typeof anchorProps>;

export declare const anchorProps: {
    container: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null) | ((new (...args: any[]) => string | HTMLElement | Window) | (() => string | HTMLElement | Window | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    bound: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    duration: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    marker: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    type: EpPropFinalized<(new (...args: any[]) => "default" | "underline") | (() => "default" | "underline") | ((new (...args: any[]) => "default" | "underline") | (() => "default" | "underline"))[], unknown, unknown, string, boolean>;
    direction: EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    selectScrollTop: BooleanConstructor;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const UxAnchor: SFCWithInstall<typeof _default> & {
    AnchorLink: typeof _default_2;
};
export { UxAnchor }
export default UxAnchor;

export declare const UxAnchorLink: SFCWithInstall<typeof _default_2>;

export { }
