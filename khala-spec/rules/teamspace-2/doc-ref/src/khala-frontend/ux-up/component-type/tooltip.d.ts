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
import type { InjectionKey } from 'vue';
import { Measurable } from 'ux-up/es/components/popper';
import { ModelToggleParams } from 'ux-up/es/hooks';
import { Options } from 'ux-up/es/components/popper';
import { Placement } from 'ux-up/es/components/popper';
import type { PopperContentInstance } from 'ux-up/es/components/popper';
import { PopperEffect } from 'ux-up/es/components/popper';
import type { PopperInstance } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import { TooltipTriggerType as TooltipTriggerType_2 } from 'ux-up';
import { UseModelTogglePropsRaw } from 'ux-up/es/hooks';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
disabled: BooleanConstructor;
trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>))[], unknown, unknown, "hover", boolean>;
triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
virtualRef: {
readonly type: PropType<Measurable>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
virtualTriggering: BooleanConstructor;
onMouseenter: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onMouseleave: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onClick: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onKeydown: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onFocus: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onBlur: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onContextmenu: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
id: StringConstructor;
open: BooleanConstructor;
ariaLabel: StringConstructor;
appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
rawContent: BooleanConstructor;
persistent: BooleanConstructor;
visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
transition: StringConstructor;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
className: {
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
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
pure: BooleanConstructor;
focusOnShow: BooleanConstructor;
trapping: BooleanConstructor;
popperClass: {
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
popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
referenceEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
triggerTargetEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
zIndex: NumberConstructor;
boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
"onUpdate:visible": {
readonly type: PropType<(val: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
}, {
/**
* @description ux-popper component instance
*/
popperRef: Ref<PopperInstance | undefined, PopperInstance | undefined>;
/**
* @description ux-tooltip-content component instance
*/
contentRef: Ref<TooltipContentInstance | undefined, TooltipContentInstance | undefined>;
/**
* @description validate current focus event is trigger inside ux-tooltip-content
*/
isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
/**
* @description update ux-popper component instance
*/
updatePopper: () => void;
/**
* @description expose onOpen function to mange ux-tooltip open state
*/
onOpen: (event?: Event) => void;
/**
* @description expose onClose function to manage el-tooltip close state
*/
onClose: (event?: Event) => void;
/**
* @description expose hide function
*/
hide: (event?: Event) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
[x: string]: (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
disabled: BooleanConstructor;
trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>))[], unknown, unknown, "hover", boolean>;
triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
virtualRef: {
readonly type: PropType<Measurable>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
virtualTriggering: BooleanConstructor;
onMouseenter: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onMouseleave: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onClick: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onKeydown: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onFocus: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onBlur: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
onContextmenu: {
readonly type: PropType<(e: Event) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
id: StringConstructor;
open: BooleanConstructor;
ariaLabel: StringConstructor;
appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
rawContent: BooleanConstructor;
persistent: BooleanConstructor;
visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
transition: StringConstructor;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
style: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
className: {
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
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
pure: BooleanConstructor;
focusOnShow: BooleanConstructor;
trapping: BooleanConstructor;
popperClass: {
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
popperStyle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
referenceEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
triggerTargetEl: {
readonly type: PropType<HTMLElement>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
zIndex: NumberConstructor;
boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
"onUpdate:visible": {
readonly type: PropType<(val: boolean) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
}>>, {
disabled: boolean;
content: string;
offset: number;
visible: EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
open: boolean;
placement: EpPropMergeType<StringConstructor, Placement, unknown>;
strategy: EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
showAfter: number;
hideAfter: number;
autoClose: number;
role: EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
trigger: EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType_2[]) | (() => Arrayable<TooltipTriggerType_2>))[], unknown, unknown>;
virtualTriggering: boolean;
arrowOffset: number;
boundariesPadding: number;
fallbackPlacements: Placement[];
gpuAcceleration: EpPropMergeType<BooleanConstructor, unknown, unknown>;
popperOptions: Partial<Options>;
enterable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
stopPopperMouseEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
pure: boolean;
focusOnShow: boolean;
trapping: boolean;
triggerKeys: string[];
teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
rawContent: boolean;
persistent: boolean;
showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly rawContent: BooleanConstructor;
readonly persistent: BooleanConstructor;
readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
readonly transition: StringConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly disabled: BooleanConstructor;
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
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
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
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
}, {
/**
* @description ux-popper-content component instance
*/
contentRef: Ref<PopperContentInstance | undefined, PopperContentInstance | undefined>;
/**
* @description validate current focus event is trigger inside ux-popper-content
*/
isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly rawContent: BooleanConstructor;
readonly persistent: BooleanConstructor;
readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
readonly transition: StringConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly disabled: BooleanConstructor;
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
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
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
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
}>>, {
readonly disabled: boolean;
readonly content: string;
readonly offset: number;
readonly visible: EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
readonly placement: EpPropMergeType<StringConstructor, Placement, unknown>;
readonly strategy: EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly showAfter: number;
readonly hideAfter: number;
readonly autoClose: number;
readonly virtualTriggering: boolean;
readonly arrowOffset: number;
readonly boundariesPadding: number;
readonly fallbackPlacements: Placement[];
readonly gpuAcceleration: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly popperOptions: Partial<Options>;
readonly enterable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly stopPopperMouseEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly pure: boolean;
readonly focusOnShow: boolean;
readonly trapping: boolean;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly rawContent: boolean;
readonly persistent: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
    content?(_: {}): any;
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

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template_2>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template>>;

export declare const TOOLTIP_INJECTION_KEY: InjectionKey<UxTooltipInjectionContext>;

export declare type TooltipContentInstance = InstanceType<typeof _default_2> & unknown;

export declare const tooltipEmits: string[];

export declare type TooltipInstance = InstanceType<typeof _default> & unknown;

export declare type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu';

export declare const useTooltipContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly rawContent: BooleanConstructor;
    readonly persistent: BooleanConstructor;
    readonly visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    readonly transition: StringConstructor;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly disabled: BooleanConstructor;
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
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
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
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
    readonly showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
};

export declare const useTooltipModelToggle: ({ indicator, toggleReason, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide }: ModelToggleParams) => {
    hide: (event?: Event) => void;
    show: (event?: Event) => void;
    toggle: () => void;
    hasUpdateHandler: ComputedRef<boolean>;
};

export declare const useTooltipModelToggleEmits: "update:visible"[];

export declare const useTooltipModelToggleProps: UseModelTogglePropsRaw<"visible">;

export declare const useTooltipProps: {
    showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    arrowOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    disabled: BooleanConstructor;
    trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    virtualRef: {
        readonly type: PropType<Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    onMouseenter: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onMouseleave: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onClick: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onKeydown: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onFocus: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onBlur: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onContextmenu: {
        readonly type: PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    id: StringConstructor;
    open: BooleanConstructor;
    ariaLabel: StringConstructor;
    appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    content: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    rawContent: BooleanConstructor;
    persistent: BooleanConstructor;
    visible: EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    transition: StringConstructor;
    teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    className: {
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
    effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
    enterable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    pure: BooleanConstructor;
    focusOnShow: BooleanConstructor;
    trapping: BooleanConstructor;
    popperClass: {
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
    popperStyle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    referenceEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerTargetEl: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    stopPopperMouseEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zIndex: NumberConstructor;
    boundariesPadding: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    gpuAcceleration: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    placement: EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    strategy: EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
    showAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    "onUpdate:visible": {
        readonly type: PropType<(val: boolean) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
};

export declare const useTooltipTriggerProps: {
    readonly disabled: BooleanConstructor;
    readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
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

declare const UxTooltip: SFCWithInstall<typeof _default>;
export { UxTooltip }
export default UxTooltip;

export declare type UxTooltipContentProps = ExtractPropTypes<typeof useTooltipContentProps>;

export declare type UxTooltipInjectionContext = {
    controlled: Ref<boolean>;
    id: Ref<string>;
    open: Ref<boolean>;
    trigger: Ref<Arrayable<TooltipTriggerType>>;
    onOpen: (e?: Event) => void;
    onClose: (e?: Event) => void;
    onToggle: (e: Event) => void;
    onShow: () => void;
    onHide: () => void;
    onBeforeShow: () => void;
    onBeforeHide: () => void;
    updatePopper: () => void;
};

export declare type UxTooltipProps = ExtractPropTypes<typeof useTooltipProps>;

export declare type UxTooltipTriggerProps = ExtractPropTypes<typeof useTooltipTriggerProps>;

export { }
