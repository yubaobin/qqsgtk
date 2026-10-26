import { AllowedComponentProps } from 'vue';
import { Arrayable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { ObjectDirective } from 'vue';
import { Options } from 'ux-up';
import { Placement } from 'ux-up';
import { PopperEffect } from 'ux-up';
import { PopperInstance } from 'ux-up';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import { TooltipTriggerType } from 'ux-up/es/components/tooltip';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown, "bottom", boolean>;
readonly disabled: BooleanConstructor;
readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
readonly transition: StringConstructor;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
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
readonly enterable: {
readonly default: true;
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly effect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly title: StringConstructor;
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly 'onUpdate:visible': {
readonly type: PropType<(visible: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description popper ref */
popperRef: ComputedRef<PopperInstance | undefined>;
/** @description hide popover */
hide: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"after-enter": () => void;
"after-leave": () => void;
"before-enter": () => void;
"before-leave": () => void;
"update:visible": (value: boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown, "bottom", boolean>;
readonly disabled: BooleanConstructor;
readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
readonly transition: StringConstructor;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
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
readonly enterable: {
readonly default: true;
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly effect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly title: StringConstructor;
readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly 'onUpdate:visible': {
readonly type: PropType<(visible: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:visible"?: ((value: boolean) => any) | undefined;
"onAfter-enter"?: (() => any) | undefined;
"onAfter-leave"?: (() => any) | undefined;
"onBefore-enter"?: (() => any) | undefined;
"onBefore-leave"?: (() => any) | undefined;
}, {
readonly disabled: boolean;
readonly width: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly content: string;
readonly offset: number;
readonly visible: EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly showAfter: number;
readonly hideAfter: number;
readonly autoClose: number;
readonly tabindex: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
readonly trigger: EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown>;
readonly popperOptions: Partial<Options>;
readonly enterable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly triggerKeys: string[];
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    reference?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: ObjectDirective;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type PopoverEmits = typeof popoverEmits;

export declare const popoverEmits: {
    'update:visible': (value: boolean) => boolean;
    'before-enter': () => boolean;
    'before-leave': () => boolean;
    'after-enter': () => boolean;
    'after-leave': () => boolean;
};

export declare type PopoverInstance = InstanceType<typeof _default_2> & unknown;

export declare type PopoverProps = ExtractPropTypes<typeof popoverProps>;

export declare const popoverProps: {
    readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown, "bottom", boolean>;
    readonly disabled: BooleanConstructor;
    readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    readonly transition: StringConstructor;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly popperStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
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
    readonly enterable: {
        readonly default: true;
        readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: {
        readonly default: "light";
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: StringConstructor;
    readonly width: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly 'onUpdate:visible': {
        readonly type: PropType<(visible: boolean) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxPopover: SFCWithInstall<typeof _default_2> & {
    directive: typeof UxPopoverDirective;
};
export { UxPopover }
export default UxPopover;

export declare const UxPopoverDirective: SFCWithInstall<typeof _default>;

export { }
