import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Instance } from '@popperjs/core';
import { Options } from '@popperjs/core';
import { Options as Options_2 } from 'ux-up';
import { Placement } from '@popperjs/core';
import { Placement as Placement_2 } from 'ux-up';
import { PopperEffect as PopperEffect_2 } from 'ux-up';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly virtualRef: {
readonly type: PropType<Measurable>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly virtualTriggering: BooleanConstructor;
readonly onMouseenter: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseleave: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onClick: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onKeydown: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onFocus: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onBlur: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onContextmenu: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: StringConstructor;
readonly open: BooleanConstructor;
}, {
/**
* @description trigger element
*/
triggerRef: Ref<Measurable | undefined, Measurable | undefined>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly virtualRef: {
readonly type: PropType<Measurable>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly virtualTriggering: BooleanConstructor;
readonly onMouseenter: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onMouseleave: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onClick: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onKeydown: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onFocus: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onBlur: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onContextmenu: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: StringConstructor;
readonly open: BooleanConstructor;
}>>, {
readonly open: boolean;
readonly virtualTriggering: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly id: StringConstructor;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly className: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, "dark", boolean>;
readonly visible: BooleanConstructor;
readonly enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly pure: BooleanConstructor;
readonly focusOnShow: BooleanConstructor;
readonly trapping: BooleanConstructor;
readonly popperClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly referenceEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly triggerTargetEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly virtualTriggering: BooleanConstructor;
readonly zIndex: NumberConstructor;
readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, undefined, boolean>;
readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement_2, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
}, {
/**
* @description popper content element
*/
popperContentRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
/**
* @description popperjs instance
*/
popperInstanceRef: ComputedRef<Instance | undefined>;
/**
* @description method for updating popper
*/
updatePopper: (shouldUpdateZIndex?: boolean) => void;
/**
* @description content style
*/
contentStyle: ComputedRef<StyleValue[]>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: () => void;
close: () => void;
focus: () => void;
mouseenter: (evt: MouseEvent) => void;
mouseleave: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly id: StringConstructor;
readonly style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly className: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, "dark", boolean>;
readonly visible: BooleanConstructor;
readonly enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly pure: BooleanConstructor;
readonly focusOnShow: BooleanConstructor;
readonly trapping: BooleanConstructor;
readonly popperClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | (string | {
[x: string]: boolean;
} | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly referenceEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly triggerTargetEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly virtualTriggering: BooleanConstructor;
readonly zIndex: NumberConstructor;
readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, undefined, boolean>;
readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement_2, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
}>> & {
onFocus?: (() => any) | undefined;
onBlur?: (() => any) | undefined;
onMouseenter?: ((evt: MouseEvent) => any) | undefined;
onMouseleave?: ((evt: MouseEvent) => any) | undefined;
onClose?: (() => any) | undefined;
}, {
readonly offset: number;
readonly visible: boolean;
readonly placement: EpPropMergeType<StringConstructor, Placement_2, unknown>;
readonly strategy: EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown>;
readonly virtualTriggering: boolean;
readonly arrowOffset: number;
readonly boundariesPadding: number;
readonly fallbackPlacements: Placement_2[];
readonly gpuAcceleration: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly popperOptions: Partial<Options_2>;
readonly enterable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly stopPopperMouseEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly pure: boolean;
readonly focusOnShow: boolean;
readonly trapping: boolean;
}>;

declare const __VLS_component_3: DefineComponent<    {
readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
}, {
triggerRef: Ref<Measurable | undefined>;
contentRef: Ref<HTMLElement | undefined>;
popperInstanceRef: Ref<Instance | undefined>;
referenceRef: Ref<Measurable | undefined>;
role: ComputedRef<string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
}>>, {
readonly role: EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
};

declare function __VLS_template_3(): {
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

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type ClassObjectType = Record<string, boolean>;

declare type ClassType = string | ClassObjectType | ClassType[];

export declare interface CreatePopperInstanceParams {
    referenceEl: Measurable;
    popperContentEl: HTMLElement;
    arrowEl: HTMLElement | undefined;
}

declare const _default: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

export declare const Effect: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};

declare const effects: readonly ["light", "dark"];

export declare type Measurable = {
    getBoundingClientRect: () => DOMRect;
};

export { Options }

export { Placement }

export declare const POPPER_CONTENT_INJECTION_KEY: InjectionKey<UxPopperContentInjectionContext>;

export declare const POPPER_INJECTION_KEY: InjectionKey<UxPopperInjectionContext>;

export declare type PopperArrowInstance = InstanceType<typeof UxPopperArrow> & unknown;

export declare type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>;

export declare const popperArrowProps: {
    readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
};

export declare type PopperContentEmits = typeof popperContentEmits;

export declare const popperContentEmits: {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    focus: () => boolean;
    blur: () => boolean;
    close: () => boolean;
};

export declare type PopperContentInstance = InstanceType<typeof UxPopperContent> & unknown;

export declare type PopperContentProps = ExtractPropTypes<typeof popperContentProps>;

export declare const popperContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly id: StringConstructor;
    readonly style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly className: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType) | ((new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
    readonly visible: BooleanConstructor;
    readonly enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly pure: BooleanConstructor;
    readonly focusOnShow: BooleanConstructor;
    readonly trapping: BooleanConstructor;
    readonly popperClass: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType) | ((new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popperStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly referenceEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerTargetEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly virtualTriggering: BooleanConstructor;
    readonly zIndex: NumberConstructor;
    readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};

export declare type PopperCoreConfigProps = ExtractPropTypes<typeof popperCoreConfigProps>;

export declare const popperCoreConfigProps: {
    readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};

export declare type PopperEffect = (typeof effects)[number] | (string & NonNullable<unknown>);

export declare type PopperInstance = InstanceType<typeof _default> & unknown;

export declare type PopperProps = ExtractPropTypes<typeof popperProps>;

export declare const popperProps: {
    readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
};

export declare type PopperTrigger = (typeof triggers)[number];

export declare type PopperTriggerInstance = InstanceType<typeof UxPopperTrigger> & unknown;

export declare type PopperTriggerProps = typeof popperTriggerProps;

export declare const popperTriggerProps: {
    readonly virtualRef: {
        readonly type: PropType<Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseleave: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onClick: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onKeydown: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onFocus: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBlur: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onContextmenu: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
};

export declare const roleTypes: readonly ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"];

declare const triggers: readonly ["click", "contextmenu", "hover", "focus"];

/** @deprecated use `PopperArrowProps` instead, and it will be deprecated in the next major version */
export declare type UsePopperArrowProps = PopperArrowProps;

/** @deprecated use `popperArrowProps` instead, and it will be deprecated in the next major version */
export declare const usePopperArrowProps: {
    readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
};

/** @deprecated use `popperContentEmits` instead, and it will be deprecated in the next major version */
export declare const usePopperContentEmits: {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    focus: () => boolean;
    blur: () => boolean;
    close: () => boolean;
};

/** @deprecated use `PopperContentProps` instead, and it will be deprecated in the next major version */
export declare type UsePopperContentProps = PopperContentProps;

/** @deprecated use `popperContentProps` instead, and it will be deprecated in the next major version */
export declare const usePopperContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly id: StringConstructor;
    readonly style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly className: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType) | ((new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
    readonly visible: BooleanConstructor;
    readonly enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly pure: BooleanConstructor;
    readonly focusOnShow: BooleanConstructor;
    readonly trapping: BooleanConstructor;
    readonly popperClass: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType) | ((new (...args: any[]) => string | ClassObjectType | ClassType[]) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popperStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly referenceEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerTargetEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly virtualTriggering: BooleanConstructor;
    readonly zIndex: NumberConstructor;
    readonly arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};

/** @deprecated use `PopperCoreConfigProps` instead, and it will be deprecated in the next major version */
export declare type UsePopperCoreConfigProps = PopperCoreConfigProps;

/** @deprecated use `popperCoreConfigProps` instead, and it will be deprecated in the next major version */
export declare const usePopperCoreConfigProps: {
    readonly boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};

/** @deprecated use `PopperProps` instead, and it will be deprecated in the next major version */
export declare type UsePopperProps = PopperProps;

/** @deprecated use `popperProps` instead, and it will be deprecated in the next major version */
export declare const usePopperProps: {
    readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
};

/** @deprecated use `popperTriggerProps` instead, and it will be deprecated in the next major version */
export declare const usePopperTriggerProps: {
    readonly virtualRef: {
        readonly type: PropType<Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onMouseleave: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onClick: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onKeydown: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onFocus: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBlur: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onContextmenu: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
};

declare const UxPopper: SFCWithInstall<typeof _default>;
export { UxPopper }
export default UxPopper;

export declare const UxPopperArrow: DefineComponent<    {}, {
/**
* @description Arrow element
*/
arrowRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;

/** @deprecated use `PopperContentInstance` instead, and it will be deprecated in the next major version */
export declare type UxPopperArrowContent = PopperContentInstance;

/** @deprecated use `PopperArrowInstance` instead, and it will be deprecated in the next major version */
export declare type UxPopperArrowInstance = PopperArrowInstance;

/** @deprecated use `PopperTriggerInstance` instead, and it will be deprecated in the next major version */
export declare type UxPopperArrowTrigger = PopperTriggerInstance;

export declare const UxPopperContent: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

export declare type UxPopperContentInjectionContext = {
    arrowRef: Ref<HTMLElement | undefined>;
    arrowStyle: ComputedRef<CSSProperties>;
};

/**
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export declare type UxPopperInjectionContext = {
    triggerRef: Ref<Measurable | undefined>;
    contentRef: Ref<HTMLElement | undefined>;
    popperInstanceRef: Ref<Instance | undefined>;
    referenceRef: Ref<Measurable | undefined>;
    role: ComputedRef<string>;
};

export declare const UxPopperTrigger: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export { }
