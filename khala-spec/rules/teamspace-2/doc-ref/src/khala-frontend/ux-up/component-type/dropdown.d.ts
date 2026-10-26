import { AllowedComponentProps } from 'vue';
import { Arrayable } from 'ux-up/es/utils';
import { ButtonProps } from 'ux-up/es/components/button';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { ComputedRef } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import type { CSSProperties } from 'vue';
import { DebuggerEvent } from 'vue';
import { DefineComponent } from 'vue';
import { DeprecationTypes } from 'vue';
import { Directive } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { InjectionKey } from 'vue';
import { MethodOptions } from 'vue';
import { NavigationGuard } from 'vue-router';
import { NavigationGuardWithThis } from 'vue-router';
import type { Nullable } from 'ux-up/es/utils';
import { Options } from 'ux-up';
import type { Options as Options_2 } from '@popperjs/core';
import { Placement } from 'ux-up';
import { Placement as Placement_2 } from 'ux-up/es/components/popper';
import { PopperEffect } from 'ux-up';
import { PopperEffect as PopperEffect_2 } from 'ux-up/es/components/popper';
import type { PopperProps } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RuntimeCompilerOptions } from 'vue';
import { SetupContext } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import type { TooltipInstance } from 'ux-up/es/components/tooltip';
import { TooltipTriggerType } from 'ux-up/es/components/tooltip';
import { Translator } from 'ux-up/es/hooks';
import { TypesConfig } from 'vue-router';
import { UxCollectionInjectionContext } from 'ux-up/es/components/collection';
import { UxCollectionItemInjectionContext } from 'ux-up/es/components/collection';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';
import { VNodeRef } from 'vue';
import { WatchCallback } from 'vue';
import { WatchOptions } from 'vue';

declare const _default: DefineComponent<    {
readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
readonly effect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly id: StringConstructor;
readonly size: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly splitButton: BooleanConstructor;
readonly hideOnClick: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly maxHeight: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly disabled: BooleanConstructor;
readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "menu", boolean>;
readonly buttonProps: {
readonly type: PropType<Partial<ButtonProps>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
t: Translator;
ns: {
namespace: ComputedRef<string>;
b: (blockSuffix?: string) => string;
e: (element?: string) => string;
m: (modifier?: string) => string;
be: (blockSuffix?: string, element?: string) => string;
em: (element?: string, modifier?: string) => string;
bm: (blockSuffix?: string, modifier?: string) => string;
bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
is: {
(name: string, state: boolean | undefined): string;
(name: string): string;
};
cssVar: (object: Record<string, string>) => Record<string, string>;
cssVarName: (name: string) => string;
cssVarBlock: (object: Record<string, string>) => Record<string, string>;
cssVarBlockName: (name: string) => string;
};
scrollbar: Ref<null, null>;
wrapStyle: ComputedRef<CSSProperties>;
dropdownTriggerKls: ComputedRef<string[]>;
dropdownSize: ComputedRef<"" | "small" | "default" | "large" | "mini">;
triggerId: ComputedRef<string>;
currentTabId: Ref<string | null, string | null>;
handleCurrentTabIdChange: (id: string) => void;
handlerMainButtonClick: (event: MouseEvent) => void;
handleEntryFocus: (e: Event) => void;
handleClose: () => void;
handleOpen: () => void;
handleBeforeShowTooltip: () => void;
handleShowTooltip: (event?: Event) => void;
handleBeforeHideTooltip: () => void;
onFocusAfterTrapped: (e: Event) => void;
popperRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
contentRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
triggeringElementRef: Ref<any, any>;
referenceElementRef: Ref<any, any>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("click" | "visible-change" | "command")[], "click" | "visible-change" | "command", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
readonly effect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly type: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown, "bottom", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
readonly id: StringConstructor;
readonly size: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly splitButton: BooleanConstructor;
readonly hideOnClick: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
readonly maxHeight: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly disabled: BooleanConstructor;
readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "menu", boolean>;
readonly buttonProps: {
readonly type: PropType<Partial<ButtonProps>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
onClick?: ((...args: any[]) => any) | undefined;
"onVisible-change"?: ((...args: any[]) => any) | undefined;
onCommand?: ((...args: any[]) => any) | undefined;
}, {
readonly disabled: boolean;
readonly maxHeight: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
readonly size: string;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], unknown, unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly tabindex: EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
readonly role: EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
readonly trigger: EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown>;
readonly loop: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly popperOptions: Partial<Options>;
readonly popperClass: string;
readonly triggerKeys: string[];
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly hideOnClick: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showTimeout: number;
readonly hideTimeout: number;
readonly splitButton: boolean;
}>;

declare const _default_2: DefineComponent<    {
readonly command: EpPropFinalized<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown, () => {}, boolean>;
readonly disabled: BooleanConstructor;
readonly divided: BooleanConstructor;
readonly textValue: StringConstructor;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
handleClick: (event: PointerEvent) => void;
handlePointerMove: (event: PointerEvent) => void;
handlePointerLeave: (event: PointerEvent) => void;
textContent: ComputedRef<string>;
propsAndAttrs: ComputedRef<    {
disabled: boolean;
command: EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
divided: boolean;
icon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown> | undefined;
textValue: string | undefined;
onClick: ((...args: any[]) => any) | undefined;
onPointermove: ((...args: any[]) => any) | undefined;
onPointerleave: ((...args: any[]) => any) | undefined;
}>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("click" | "pointerleave" | "pointermove")[], "click" | "pointerleave" | "pointermove", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly command: EpPropFinalized<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown, () => {}, boolean>;
readonly disabled: BooleanConstructor;
readonly divided: BooleanConstructor;
readonly textValue: StringConstructor;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onClick?: ((...args: any[]) => any) | undefined;
onPointermove?: ((...args: any[]) => any) | undefined;
onPointerleave?: ((...args: any[]) => any) | undefined;
}, {
readonly disabled: boolean;
readonly command: EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
readonly divided: boolean;
}>;

declare const _default_3: DefineComponent<    {
onKeydown: {
readonly type: PropType<(e: KeyboardEvent) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
size: ComputedRef<string> | undefined;
rovingFocusGroupRootStyle: Ref<StyleValue, StyleValue>;
tabIndex: Ref<number, number>;
dropdownKls: ComputedRef<string[]>;
role: ComputedRef<EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>>;
triggerId: ComputedRef<string>;
dropdownListWrapperRef: (el: Element | ComponentPublicInstance | null) => void;
handleKeydown: (e: KeyboardEvent) => void;
onBlur: (e: Event) => void;
onFocus: (e: FocusEvent) => void;
onMousedown: (e: Event) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
onKeydown: {
readonly type: PropType<(e: KeyboardEvent) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {}>;

export declare const DROPDOWN_COLLECTION_INJECTION_KEY: InjectionKey<UxCollectionInjectionContext>;

export declare const DROPDOWN_COLLECTION_ITEM_INJECTION_KEY: InjectionKey<UxCollectionItemInjectionContext>;

export declare const DROPDOWN_INJECTION_KEY: InjectionKey<UxDropdownInjectionContext>;

export declare const DROPDOWN_INSTANCE_INJECTION_KEY = "uxDropdown";

export declare type DropdownInstance = InstanceType<typeof _default> & unknown;

export declare const dropdownItemProps: {
    readonly command: EpPropFinalized<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown, () => {}, boolean>;
    readonly disabled: BooleanConstructor;
    readonly divided: BooleanConstructor;
    readonly textValue: StringConstructor;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare const dropdownMenuProps: {
    onKeydown: {
        readonly type: PropType<(e: KeyboardEvent) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare const dropdownProps: {
    readonly trigger: EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | TooltipTriggerType[]) | (() => Arrayable<TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    readonly effect: {
        readonly default: "light";
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly type: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger") | (() => EpPropMergeType<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], unknown, unknown, "bottom", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => {}, boolean>;
    readonly id: StringConstructor;
    readonly size: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly splitButton: BooleanConstructor;
    readonly hideOnClick: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    readonly tabindex: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    readonly maxHeight: EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly role: EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "menu", boolean>;
    readonly buttonProps: {
        readonly type: PropType<Partial<ButtonProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

export declare const FIRST_KEYS: string[];

export declare const FIRST_LAST_KEYS: string[];

export declare interface IUxDropdownInstance {
    instance?: ComponentInternalInstance;
    dropdownSize?: ComputedRef<string>;
    handleClick?: () => void;
    commandHandler?: (...arg: any[]) => void;
    show?: () => void;
    hide?: () => void;
    trigger?: ComputedRef<string>;
    hideOnClick?: ComputedRef<boolean>;
    triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>;
}

export declare const LAST_KEYS: string[];

export declare const UxCollection: {
    name: string;
    setup(): void;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
    template?: string | object;
    render?: Function;
    components?: Record<string, Component>;
    directives?: Record<string, Directive>;
    inheritAttrs?: boolean;
    emits?: ThisType<void> | (string[] & ThisType<void>) | undefined;
    expose?: string[];
    serverPrefetch?(): void | Promise<any>;
    compilerOptions?: RuntimeCompilerOptions;
    call?: (this: unknown, ...args: unknown[]) => never;
    __defaults?: {} | undefined;
    compatConfig?: Partial<Record<DeprecationTypes, boolean | "suppress-warning">> & {
        MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);
    };
    data?: ((this: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>, vm: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>) => {}) | undefined;
    computed?: {} | undefined;
    methods?: {} | undefined;
    watch?: {
        [x: string]: (string | WatchCallback<any, any> | ({
            handler: WatchCallback | string;
        } & WatchOptions<boolean>)) | (string | WatchCallback<any, any> | ({
            handler: WatchCallback | string;
        } & WatchOptions<boolean>))[];
    };
    provide?: ComponentProvideOptions;
    inject?: {} | string[] | undefined;
    filters?: Record<string, Function>;
    mixins?: ComponentOptionsMixin[] | undefined;
    extends?: ComponentOptionsMixin | undefined;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    beforeDestroy?(): void;
    beforeUnmount?(): void;
    destroyed?(): void;
    unmounted?(): void;
    renderTracked?: (e: DebuggerEvent) => void;
    renderTriggered?: (e: DebuggerEvent) => void;
    errorCaptured?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void;
    delimiters?: [string, string];
    __differentiator?: undefined;
    __isBuiltIn?: boolean;
    __file?: string;
    __name?: string;
    beforeRouteEnter?: TypesConfig extends Record<"beforeRouteEnter", infer T> ? T : NavigationGuardWithThis<undefined>;
    beforeRouteUpdate?: TypesConfig extends Record<"beforeRouteUpdate", infer T> ? T : NavigationGuard;
    beforeRouteLeave?: TypesConfig extends Record<"beforeRouteLeave", infer T> ? T : NavigationGuard;
    key?: string | number | symbol;
    ref?: VNodeRef;
    ref_for?: boolean;
    ref_key?: string;
    onVnodeBeforeMount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeMounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeBeforeUpdate?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
    onVnodeUpdated?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
    onVnodeBeforeUnmount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeUnmounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    class?: unknown;
    style?: unknown;
};

export declare const UxCollectionItem: {
    name: string;
    setup(_: unknown, { attrs }: SetupContext): void;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
    template?: string | object;
    render?: Function;
    components?: Record<string, Component>;
    directives?: Record<string, Directive>;
    inheritAttrs?: boolean;
    emits?: ThisType<void> | (string[] & ThisType<void>) | undefined;
    expose?: string[];
    serverPrefetch?(): void | Promise<any>;
    compilerOptions?: RuntimeCompilerOptions;
    call?: (this: unknown, ...args: unknown[]) => never;
    __defaults?: {} | undefined;
    compatConfig?: Partial<Record<DeprecationTypes, boolean | "suppress-warning">> & {
        MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);
    };
    data?: ((this: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>, vm: CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, Readonly<ExtractPropTypes<    {}>>, {}, false, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, MethodOptions, {}>) => {}) | undefined;
    computed?: {} | undefined;
    methods?: {} | undefined;
    watch?: {
        [x: string]: (string | WatchCallback<any, any> | ({
            handler: WatchCallback | string;
        } & WatchOptions<boolean>)) | (string | WatchCallback<any, any> | ({
            handler: WatchCallback | string;
        } & WatchOptions<boolean>))[];
    };
    provide?: ComponentProvideOptions;
    inject?: {} | string[] | undefined;
    filters?: Record<string, Function>;
    mixins?: ComponentOptionsMixin[] | undefined;
    extends?: ComponentOptionsMixin | undefined;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    beforeDestroy?(): void;
    beforeUnmount?(): void;
    destroyed?(): void;
    unmounted?(): void;
    renderTracked?: (e: DebuggerEvent) => void;
    renderTriggered?: (e: DebuggerEvent) => void;
    errorCaptured?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void;
    delimiters?: [string, string];
    __differentiator?: undefined;
    __isBuiltIn?: boolean;
    __file?: string;
    __name?: string;
    beforeRouteEnter?: TypesConfig extends Record<"beforeRouteEnter", infer T> ? T : NavigationGuardWithThis<undefined>;
    beforeRouteUpdate?: TypesConfig extends Record<"beforeRouteUpdate", infer T> ? T : NavigationGuard;
    beforeRouteLeave?: TypesConfig extends Record<"beforeRouteLeave", infer T> ? T : NavigationGuard;
    key?: string | number | symbol;
    ref?: VNodeRef;
    ref_for?: boolean;
    ref_key?: string;
    onVnodeBeforeMount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeMounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeBeforeUpdate?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
    onVnodeUpdated?: ((vnode: VNode, oldVNode: VNode) => void) | ((vnode: VNode, oldVNode: VNode) => void)[];
    onVnodeBeforeUnmount?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    onVnodeUnmounted?: ((vnode: VNode) => void) | ((vnode: VNode) => void)[];
    class?: unknown;
    style?: unknown;
};

declare const UxDropdown: SFCWithInstall<typeof _default> & {
    DropdownItem: typeof _default_2;
    DropdownMenu: typeof _default_3;
};
export { UxDropdown }
export default UxDropdown;

export declare type UxDropdownInjectionContext = {
    contentRef: Ref<HTMLElement | undefined>;
    role: ComputedRef<PopperProps['role']>;
    triggerId: ComputedRef<string>;
    isUsingKeyboard: Ref<boolean>;
    onItemLeave: (e: PointerEvent) => void;
    onItemEnter: (e: PointerEvent) => void;
};

export declare const UxDropdownItem: SFCWithInstall<typeof _default_2>;

export declare const UxDropdownMenu: SFCWithInstall<typeof _default_3>;

export { }
