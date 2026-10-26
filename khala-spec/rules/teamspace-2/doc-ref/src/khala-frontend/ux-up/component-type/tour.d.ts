import { AllowedComponentProps } from 'vue';
import type { ButtonProps } from 'ux-up/es/components/button';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { Placement } from '@floating-ui/utils';
import type { Placement as Placement_2 } from '@floating-ui/dom';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { Strategy } from '@floating-ui/dom';
import { TourGap as TourGap_2 } from 'ux-up';
import { TourMask as TourMask_2 } from 'ux-up';
import type { VirtualElement } from '@floating-ui/dom';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
modelValue: BooleanConstructor;
current: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
contentStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
mask: EpPropFinalized<(new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask_2) | ((new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask_2))[], unknown, unknown, boolean, boolean>;
gap: EpPropFinalized<(new (...args: any[]) => TourGap_2) | (() => TourGap_2) | ((new (...args: any[]) => TourGap_2) | (() => TourGap_2))[], unknown, unknown, () => {
offset: number;
radius: number;
}, boolean>;
zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, () => {
block: string;
}, boolean>;
type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, string, boolean>;
closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
targetAreaClickable: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => void;
change: (current: number) => void;
close: (current: number) => void;
finish: () => void;
"update:current": (current: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
modelValue: BooleanConstructor;
current: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
contentStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
mask: EpPropFinalized<(new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask_2) | ((new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask_2))[], unknown, unknown, boolean, boolean>;
gap: EpPropFinalized<(new (...args: any[]) => TourGap_2) | (() => TourGap_2) | ((new (...args: any[]) => TourGap_2) | (() => TourGap_2))[], unknown, unknown, () => {
offset: number;
radius: number;
}, boolean>;
zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, () => {
block: string;
}, boolean>;
type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, string, boolean>;
closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
targetAreaClickable: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
onChange?: ((current: number) => any) | undefined;
onClose?: ((current: number) => any) | undefined;
onFinish?: (() => any) | undefined;
"onUpdate:current"?: ((current: number) => any) | undefined;
}, {
mask: TourMask_2;
gap: TourGap_2;
modelValue: boolean;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
scrollIntoViewOptions: EpPropMergeType<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown>;
appendTo: EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>;
showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
showClose: EpPropMergeType<BooleanConstructor, unknown, unknown>;
current: number;
closeOnPressEscape: EpPropMergeType<BooleanConstructor, unknown, unknown>;
targetAreaClickable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
target: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null) | ((new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
title: StringConstructor;
description: StringConstructor;
showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
mask: EpPropFinalized<(new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask) | ((new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask))[], unknown, unknown, undefined, boolean>;
contentStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
prevButtonProps: {
readonly type: PropType<TourBtnProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
nextButtonProps: {
readonly type: PropType<TourBtnProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, undefined, boolean>;
type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
target: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null) | ((new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
title: StringConstructor;
description: StringConstructor;
showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
mask: EpPropFinalized<(new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask) | ((new (...args: any[]) => boolean | {
style?: CSSProperties;
color?: string;
}) | (() => TourMask))[], unknown, unknown, undefined, boolean>;
contentStyle: {
readonly type: PropType<CSSProperties>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
prevButtonProps: {
readonly type: PropType<TourBtnProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
nextButtonProps: {
readonly type: PropType<TourBtnProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, undefined, boolean>;
type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onClose?: (() => any) | undefined;
}, {
mask: TourMask;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
scrollIntoViewOptions: EpPropMergeType<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown>;
showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
showClose: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
    indicators?(_: {
        current: number;
        total: number;
    }): any;
};

declare function __VLS_template_2(): {
    header?(_: {}): any;
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

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

export declare type TourBtnProps = {
    children?: VNode | string;
    onClick?: () => void;
} & Partial<ButtonProps> & Record<string, any>;

export declare type TourContentEmits = typeof tourContentEmits;

export declare const tourContentEmits: {
    close: () => boolean;
};

export declare type TourContentProps = ExtractPropTypes<typeof tourContentProps>;

export declare const tourContentProps: {
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
    reference: EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
    strategy: EpPropFinalized<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy))[], "fixed" | "absolute", unknown, string, boolean>;
    offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    showArrow: BooleanConstructor;
    zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
};

export declare type TourEmits = typeof tourEmits;

export declare const tourEmits: {
    "update:modelValue": (value: boolean) => boolean;
    "update:current": (current: number) => boolean;
    close: (current: number) => boolean;
    finish: () => boolean;
    change: (current: number) => boolean;
};

export declare interface TourGap {
    offset?: number | [number, number];
    radius?: number;
}

export declare type TourInstance = InstanceType<typeof _default> & unknown;

export declare type TourMask = boolean | {
    style?: CSSProperties;
    color?: string;
};

export declare const tourPlacements: readonly ["top-start", "top-end", "top", "bottom-start", "bottom-end", "bottom", "left-start", "left-end", "left", "right-start", "right-end", "right"];

export declare type TourProps = ExtractPropTypes<typeof tourProps>;

export declare const tourProps: {
    modelValue: BooleanConstructor;
    current: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    closeIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
    contentStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    mask: EpPropFinalized<(new (...args: any[]) => boolean | {
    style?: CSSProperties;
    color?: string;
    }) | (() => TourMask) | ((new (...args: any[]) => boolean | {
    style?: CSSProperties;
    color?: string;
    }) | (() => TourMask))[], unknown, unknown, boolean, boolean>;
    gap: EpPropFinalized<(new (...args: any[]) => TourGap) | (() => TourGap) | ((new (...args: any[]) => TourGap) | (() => TourGap))[], unknown, unknown, () => {
    offset: number;
    radius: number;
    }, boolean>;
    zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, () => {
    block: string;
    }, boolean>;
    type: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, string, boolean>;
    closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    targetAreaClickable: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
};

export declare type TourStepEmits = typeof tourStepEmits;

export declare const tourStepEmits: {
    close: () => boolean;
};

export declare type TourStepProps = ExtractPropTypes<typeof tourStepProps>;

export declare const tourStepProps: {
    target: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null) | ((new (...args: any[]) => string | HTMLElement | (() => HTMLElement | null)) | (() => string | HTMLElement | (() => HTMLElement | null) | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: StringConstructor;
    description: StringConstructor;
    showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    closeIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, string, boolean>;
    mask: EpPropFinalized<(new (...args: any[]) => boolean | {
    style?: CSSProperties;
    color?: string;
    }) | (() => TourMask) | ((new (...args: any[]) => boolean | {
    style?: CSSProperties;
    color?: string;
    }) | (() => TourMask))[], unknown, unknown, undefined, boolean>;
    contentStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prevButtonProps: {
        readonly type: PropType<TourBtnProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nextButtonProps: {
        readonly type: PropType<TourBtnProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollIntoViewOptions: EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, undefined, boolean>;
    type: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "default" | "primary") | (() => "default" | "primary") | ((new (...args: any[]) => "default" | "primary") | (() => "default" | "primary"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare const tourStrategies: readonly ["absolute", "fixed"];

declare const UxTour: SFCWithInstall<typeof _default> & {
    TourStep: typeof _default_2;
};
export { UxTour }
export default UxTour;

export declare const UxTourStep: SFCWithInstall<typeof _default_2>;

export { }
