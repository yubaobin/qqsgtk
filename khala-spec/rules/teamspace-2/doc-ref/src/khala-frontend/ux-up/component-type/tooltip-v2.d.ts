import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Placement } from '@floating-ui/utils';
import type { Placement as Placement_2 } from '@floating-ui/dom';
import { PopperEffect } from 'ux-up';
import type { PopperEffect as PopperEffect_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import type { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { Strategy } from '@floating-ui/utils';
import type { Strategy as Strategy_2 } from '@floating-ui/dom';
import { TransitionProps } from 'vue';
import type { UseNamespaceReturn } from 'ux-up/es/hooks';
import { VirtualElement } from '@floating-ui/dom';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly alwaysOn: BooleanConstructor;
readonly fullTransition: BooleanConstructor;
readonly transitionProps: EpPropFinalized<(new (...args: any[]) => TransitionProps) | (() => TransitionProps | null) | ((new (...args: any[]) => TransitionProps) | (() => TransitionProps | null))[], unknown, unknown, null, boolean>;
readonly teleported: BooleanConstructor;
readonly to: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
readonly ariaLabel: StringConstructor;
readonly arrowPadding: EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 5, boolean>;
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly contentClass: StringConstructor;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, "bottom", boolean>;
readonly reference: EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
readonly strategy: EpPropFinalized<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy))[], "fixed" | "absolute", unknown, "absolute", boolean>;
readonly showArrow: BooleanConstructor;
readonly onBlur: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onClick: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onFocus: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseDown: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseEnter: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseLeave: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
readonly style: EpPropFinalized<(new (...args: any[]) => CSSProperties) | (() => CSSProperties | null) | ((new (...args: any[]) => CSSProperties) | (() => CSSProperties | null))[], unknown, unknown, null, boolean>;
readonly delayDuration: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly defaultOpen: BooleanConstructor;
readonly open: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly onOpenChange: {
readonly type: PropType<(state: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly 'onUpdate:open': {
readonly type: PropType<(state: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly alwaysOn: BooleanConstructor;
readonly fullTransition: BooleanConstructor;
readonly transitionProps: EpPropFinalized<(new (...args: any[]) => TransitionProps) | (() => TransitionProps | null) | ((new (...args: any[]) => TransitionProps) | (() => TransitionProps | null))[], unknown, unknown, null, boolean>;
readonly teleported: BooleanConstructor;
readonly to: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
readonly ariaLabel: StringConstructor;
readonly arrowPadding: EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 5, boolean>;
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly contentClass: StringConstructor;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, "bottom", boolean>;
readonly reference: EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
readonly strategy: EpPropFinalized<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy))[], "fixed" | "absolute", unknown, "absolute", boolean>;
readonly showArrow: BooleanConstructor;
readonly onBlur: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onClick: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onFocus: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseDown: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseEnter: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseLeave: {
readonly type: PropType<(e: Event) => boolean | void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
readonly style: EpPropFinalized<(new (...args: any[]) => CSSProperties) | (() => CSSProperties | null) | ((new (...args: any[]) => CSSProperties) | (() => CSSProperties | null))[], unknown, unknown, null, boolean>;
readonly delayDuration: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly defaultOpen: BooleanConstructor;
readonly open: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly onOpenChange: {
readonly type: PropType<(state: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly 'onUpdate:open': {
readonly type: PropType<(state: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly style: EpPropMergeType<(new (...args: any[]) => CSSProperties) | (() => CSSProperties | null) | ((new (...args: any[]) => CSSProperties) | (() => CSSProperties | null))[], unknown, unknown>;
readonly height: number;
readonly width: number;
readonly offset: number;
readonly open: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
readonly strategy: EpPropMergeType<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy))[], "fixed" | "absolute", unknown>;
readonly reference: EpPropMergeType<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly to: EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
readonly teleported: boolean;
readonly showArrow: boolean;
readonly alwaysOn: boolean;
readonly arrowPadding: number;
readonly delayDuration: number;
readonly defaultOpen: boolean;
readonly transitionProps: EpPropMergeType<(new (...args: any[]) => TransitionProps) | (() => TransitionProps | null) | ((new (...args: any[]) => TransitionProps) | (() => TransitionProps | null))[], unknown, unknown>;
readonly fullTransition: boolean;
}>;

declare function __VLS_template(): {
    trigger?(_: {}): any;
    default?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare type StateUpdater = (state: boolean) => void;

export declare const TOOLTIP_V2_OPEN = "tooltip_v2.open";

export declare type TooltipV2ArrowProps = ExtractPropTypes<typeof tooltipV2ArrowProps>;

export declare const tooltipV2ArrowProps: {
    readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly style: EpPropFinalized<(new (...args: any[]) => CSSProperties) | (() => CSSProperties | null) | ((new (...args: any[]) => CSSProperties) | (() => CSSProperties | null))[], unknown, unknown, null, boolean>;
};

export declare const tooltipV2ArrowSpecialProps: {
    readonly side: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => TooltipV2Sides) | (() => TooltipV2Sides) | ((new (...args: any[]) => TooltipV2Sides) | (() => TooltipV2Sides))[], TooltipV2Sides, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type TooltipV2ContentContext = {
    arrowRef: Ref<HTMLElement | null>;
};

export declare const tooltipV2ContentKey: InjectionKey<TooltipV2ContentContext>;

export declare type TooltipV2ContentProps = ExtractPropTypes<typeof tooltipV2ContentProps>;

export declare const tooltipV2ContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly arrowPadding: EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 5, boolean>;
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, "light", boolean>;
    readonly contentClass: StringConstructor;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, "bottom", boolean>;
    readonly reference: EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
    readonly strategy: EpPropFinalized<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy_2) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy_2))[], "fixed" | "absolute", unknown, "absolute", boolean>;
    readonly showArrow: BooleanConstructor;
};

export declare type TooltipV2Context = {
    onClose: () => void;
    onDelayOpen: () => void;
    onOpen: () => void;
    contentId: Ref<string>;
    triggerRef: Ref<HTMLElement | null>;
    ns: UseNamespaceReturn;
};

export declare type TooltipV2Props = ExtractPropTypes<typeof tooltipV2Props>;

export declare const tooltipV2Props: {
    readonly alwaysOn: BooleanConstructor;
    readonly fullTransition: BooleanConstructor;
    readonly transitionProps: EpPropFinalized<(new (...args: any[]) => TransitionProps) | (() => TransitionProps | null) | ((new (...args: any[]) => TransitionProps) | (() => TransitionProps | null))[], unknown, unknown, null, boolean>;
    readonly teleported: BooleanConstructor;
    readonly to: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    readonly ariaLabel: StringConstructor;
    readonly arrowPadding: EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 5, boolean>;
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
    readonly contentClass: StringConstructor;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown, "bottom", boolean>;
    readonly reference: EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
    readonly strategy: EpPropFinalized<(new (...args: any[]) => "fixed" | "absolute") | (() => Strategy) | ((new (...args: any[]) => "fixed" | "absolute") | (() => Strategy))[], "fixed" | "absolute", unknown, "absolute", boolean>;
    readonly showArrow: BooleanConstructor;
    readonly onBlur: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onClick: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onFocus: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseDown: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseEnter: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseLeave: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly style: EpPropFinalized<(new (...args: any[]) => CSSProperties) | (() => CSSProperties | null) | ((new (...args: any[]) => CSSProperties) | (() => CSSProperties | null))[], unknown, unknown, null, boolean>;
    readonly delayDuration: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly onOpenChange: {
        readonly type: PropType<(state: boolean) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly 'onUpdate:open': {
        readonly type: PropType<(state: boolean) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare const tooltipV2RootKey: InjectionKey<TooltipV2Context>;

export declare type TooltipV2RootProps = ExtractPropTypes<typeof tooltipV2RootProps>;

export declare const tooltipV2RootProps: {
    readonly delayDuration: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly onOpenChange: {
        readonly type: PropType<StateUpdater>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly 'onUpdate:open': {
        readonly type: PropType<StateUpdater>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare enum TooltipV2Sides {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}

export declare type TooltipV2TriggerProps = ExtractPropTypes<typeof tooltipV2TriggerProps>;

export declare const tooltipV2TriggerProps: {
    readonly onBlur: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onClick: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onFocus: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseDown: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseEnter: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseLeave: {
        readonly type: PropType<(e: Event) => boolean | void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxTooltipV2: SFCWithInstall<typeof _default>;
export { UxTooltipV2 }
export default UxTooltipV2;

export { }
