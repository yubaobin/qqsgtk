import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { ComputedRef } from 'vue';
import { DebouncedFunc } from 'lodash';
import { DefineComponent } from 'vue';
import type { DynamicSizeListInstance } from 'ux-up/es/components/virtual-list';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { FixedSizeListInstance } from 'ux-up/es/components/virtual-list';
import type { InjectionKey } from 'vue';
import { Options } from 'ux-up';
import type { Options as Options_2 } from 'ux-up/es/components/popper';
import { Placement } from 'ux-up';
import type { Placement as Placement_2 } from 'ux-up/es/components/popper';
import { PopperEffect } from 'ux-up';
import type { PopperEffect as PopperEffect_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { ShallowRef } from 'vue';
import { TooltipInstance } from 'ux-up/es/components/tooltip';
import { VNodeProps } from 'vue';
import { WritableComputedRef } from 'vue';

declare const _default: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly allowCreate: BooleanConstructor;
readonly autocomplete: EpPropFinalized<(new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list") | ((new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list"))[], unknown, unknown, "none", boolean>;
readonly automaticDropdown: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly collapseTags: BooleanConstructor;
readonly collapseTagsTooltip: BooleanConstructor;
readonly maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly defaultFirstOption: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly estimatedOptionHeight: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
readonly filterable: BooleanConstructor;
readonly filterMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 274, boolean>;
readonly itemHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 34, boolean>;
readonly id: StringConstructor;
readonly loading: BooleanConstructor;
readonly loadingText: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
(): any;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => any) | (() => any) | {
(): any;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly multiple: BooleanConstructor;
readonly multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly name: StringConstructor;
readonly noDataText: StringConstructor;
readonly noMatchText: StringConstructor;
readonly remoteMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly options: {
readonly type: PropType<OptionType[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
readonly remote: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom-start", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom-start", "top-start", "right", "left"], boolean>;
readonly tagType: {
readonly default: "info";
readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tagEffect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fitInputWidth: EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, number | boolean, true, boolean>;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
modelValue: ComputedRef<any>;
selectedLabel: ComputedRef<string | string[]>;
calculatorRef: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
inputStyle: ComputedRef<    {
minWidth: string;
}>;
inputId: Ref<string | undefined, string | undefined>;
collapseTagSize: ComputedRef<"default" | "small">;
currentPlaceholder: ComputedRef<string>;
expanded: Ref<boolean, boolean>;
emptyText: ComputedRef<string | false | null>;
popupHeight: ComputedRef<number>;
debounce: ComputedRef<0 | 300>;
allOptions: ComputedRef<OptionType[]>;
filteredOptions: Ref<({
[x: string]: any;
} | {
[x: string]: any;
created?: boolean | undefined;
})[], OptionType[] | ({
[x: string]: any;
} | {
[x: string]: any;
created?: boolean | undefined;
})[]>;
iconComponent: ComputedRef<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown> | undefined>;
iconReverse: ComputedRef<string | undefined>;
tagStyle: ComputedRef<    {
maxWidth: string;
}>;
collapseTagStyle: ComputedRef<    {
maxWidth: string;
}>;
popperSize: Ref<number, number>;
dropdownMenuVisible: WritableComputedRef<boolean, boolean>;
hasModelValue: ComputedRef<boolean>;
shouldShowPlaceholder: ComputedRef<boolean>;
selectDisabled: ComputedRef<boolean>;
selectSize: ComputedRef<"" | "small" | "default" | "large" | "mini">;
needStatusIcon: ComputedRef<boolean>;
showClearBtn: ComputedRef<boolean>;
states: SelectStates;
isFocused: Ref<boolean, boolean>;
nsSelect: {
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
nsInput: {
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
inputRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
menuRef: Ref<SelectDropdownInstance | undefined, SelectDropdownInstance | undefined>;
tagMenuRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
tooltipRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
tagTooltipRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
selectRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
wrapperRef: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
selectionRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
prefixRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
suffixRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
collapseItemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
popperRef: ComputedRef<HTMLElement | undefined>;
validateState: ComputedRef<"" | "error" | "success" | "validating">;
validateIcon: ComputedRef<any>;
showTagList: ComputedRef<Option_2[]>;
collapseTagList: ComputedRef<Option_2[]>;
debouncedOnInputChange: DebouncedFunc<() => void>;
deleteTag: (event: MouseEvent, option: Option_2) => void;
getLabel: (option: Option_2) => any;
getValue: (option: Option_2) => any;
getDisabled: (option: Option_2) => any;
getValueKey: (item: unknown) => any;
handleClear: () => void;
handleClickOutside: (event: Event) => void;
handleDel: (e: KeyboardEvent) => void;
handleEsc: () => void;
focus: () => void;
blur: () => void;
handleMenuEnter: () => Promise<void>;
handleResize: () => void;
resetSelectionWidth: () => void;
updateTooltip: () => void;
updateTagTooltip: () => void;
updateOptions: () => void;
toggleMenu: () => void;
scrollTo: (index: number) => void;
onInput: (event: Event) => void;
onKeyboardNavigate: (direction: "forward" | "backward", hoveringIndex?: number | undefined) => void;
onKeyboardSelect: () => void;
onSelect: (option: Option_2) => void;
onHover: (idx?: number) => void;
handleCompositionStart: (event: CompositionEvent) => void;
handleCompositionEnd: (event: CompositionEvent) => void;
handleCompositionUpdate: (event: CompositionEvent) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: SelectV2Props["modelValue"]) => boolean;
change: (val: SelectV2Props["modelValue"]) => boolean;
'remove-tag': (val: unknown) => boolean;
'visible-change': (visible: boolean) => boolean;
focus: (evt: FocusEvent) => boolean;
blur: (evt: FocusEvent) => boolean;
clear: () => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly emptyValues: ArrayConstructor;
readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
readonly allowCreate: BooleanConstructor;
readonly autocomplete: EpPropFinalized<(new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list") | ((new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list"))[], unknown, unknown, "none", boolean>;
readonly automaticDropdown: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "light", boolean>;
readonly collapseTags: BooleanConstructor;
readonly collapseTagsTooltip: BooleanConstructor;
readonly maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly defaultFirstOption: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly estimatedOptionHeight: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
readonly filterable: BooleanConstructor;
readonly filterMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 274, boolean>;
readonly itemHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 34, boolean>;
readonly id: StringConstructor;
readonly loading: BooleanConstructor;
readonly loadingText: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
(): any;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => any) | (() => any) | {
(): any;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly multiple: BooleanConstructor;
readonly multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly name: StringConstructor;
readonly noDataText: StringConstructor;
readonly noMatchText: StringConstructor;
readonly remoteMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly options: {
readonly type: PropType<OptionType[]>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
readonly remote: BooleanConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
readonly scrollbarAlwaysOn: BooleanConstructor;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, "bottom-start", boolean>;
readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, readonly ["bottom-start", "top-start", "right", "left"], boolean>;
readonly tagType: {
readonly default: "info";
readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tagEffect: {
readonly default: "light";
readonly type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
readonly __epPropKey: true;
};
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fitInputWidth: EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, number | boolean, true, boolean>;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((val: any) => any) | undefined;
onChange?: ((val: any) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onClear?: (() => any) | undefined;
"onVisible-change"?: ((visible: boolean) => any) | undefined;
"onRemove-tag"?: ((val: unknown) => any) | undefined;
}, {
readonly disabled: boolean;
readonly height: number;
readonly offset: number;
readonly multiple: boolean;
readonly props: Props;
readonly loading: boolean;
readonly modelValue: any;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown>;
readonly effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
readonly autocomplete: EpPropMergeType<(new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list") | ((new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list"))[], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly clearable: boolean;
readonly fallbackPlacements: Placement[];
readonly popperOptions: Partial<Options>;
readonly popperClass: string;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly valueKey: string;
readonly fitInputWidth: EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, number | boolean>;
readonly filterable: boolean;
readonly collapseTags: boolean;
readonly maxCollapseTags: number;
readonly collapseTagsTooltip: boolean;
readonly tagType: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly tagEffect: EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
readonly automaticDropdown: boolean;
readonly allowCreate: boolean;
readonly remote: boolean;
readonly multipleLimit: number;
readonly defaultFirstOption: boolean;
readonly reserveKeyword: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly scrollbarAlwaysOn: boolean;
readonly estimatedOptionHeight: number;
readonly itemHeight: number;
}>;

declare type Option_2 = OptionCommon & {
    created?: boolean;
};

declare type OptionCommon = Record<string, any>;

declare type OptionGroup = OptionCommon;

declare type OptionType = Option_2 | OptionGroup;

export declare type OptionV2Props = ExtractPropTypes<typeof optionV2Props>;

declare const optionV2Props: {
    readonly data: ArrayConstructor;
    readonly disabled: BooleanConstructor;
    readonly hovering: BooleanConstructor;
    readonly item: {
        readonly type: PropType<Option_2>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: NumberConstructor;
    readonly style: ObjectConstructor;
    readonly selected: BooleanConstructor;
    readonly created: BooleanConstructor;
};

declare interface Props {
    label?: string;
    value?: string;
    disabled?: string;
    options?: string;
}

declare const props: {
    loading: BooleanConstructor;
    data: {
        type: ArrayConstructor;
        required: true;
    };
    hoveringIndex: NumberConstructor;
    width: NumberConstructor;
};

declare interface SelectDropdownExposed {
    listRef: Ref<FixedSizeListInstance | DynamicSizeListInstance | undefined>;
    isSized: ComputedRef<boolean>;
    isItemDisabled: (modelValue: any[] | any, selected: boolean) => boolean;
    isItemHovering: (target: number) => boolean;
    isItemSelected: (modelValue: any[] | any, target: Option_2) => boolean;
    scrollToItem: (index: number) => void;
    resetScrollTop: () => void;
}

declare type SelectDropdownInstance = ComponentPublicInstance<ExtractPropTypes<typeof props>, SelectDropdownExposed>;

declare type SelectStates = {
    inputValue: string;
    cachedOptions: Option_2[];
    createdOptions: Option_2[];
    hoveringIndex: number;
    inputHovering: boolean;
    selectionWidth: number;
    collapseItemWidth: number;
    previousQuery: string | null;
    previousValue: unknown;
    selectedLabel: string;
    menuVisibleOnFocus: boolean;
    isBeforeHide: boolean;
};

export declare interface SelectV2Context {
    props: SelectV2Props;
    expanded: Ref<boolean>;
    tooltipRef: Ref<TooltipInstance | undefined>;
    onSelect: (option: Option_2) => void;
    onHover: (idx?: number) => void;
    onKeyboardNavigate: (direction: 'forward' | 'backward') => void;
    onKeyboardSelect: () => void;
}

export declare const selectV2InjectionKey: InjectionKey<SelectV2Context>;

export declare type SelectV2Instance = InstanceType<typeof _default> & unknown;

export declare type SelectV2Props = ExtractPropTypes<typeof selectV2Props>;

declare const selectV2Props: {
    readonly ariaLabel: StringConstructor;
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    readonly allowCreate: BooleanConstructor;
    readonly autocomplete: EpPropFinalized<(new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list") | ((new (...args: any[]) => "none" | "both" | "inline" | "list") | (() => "none" | "both" | "inline" | "list"))[], unknown, unknown, "none", boolean>;
    readonly automaticDropdown: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly clearIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, "light", boolean>;
    readonly collapseTags: BooleanConstructor;
    readonly collapseTagsTooltip: BooleanConstructor;
    readonly maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly defaultFirstOption: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly estimatedOptionHeight: EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    readonly filterable: BooleanConstructor;
    readonly filterMethod: {
        readonly type: PropType<(query: string) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: EpPropFinalized<NumberConstructor, unknown, unknown, 274, boolean>;
    readonly itemHeight: EpPropFinalized<NumberConstructor, unknown, unknown, 34, boolean>;
    readonly id: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly loadingText: StringConstructor;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
    (): any;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => any) | (() => any) | {
    (): any;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly multiple: BooleanConstructor;
    readonly multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly name: StringConstructor;
    readonly noDataText: StringConstructor;
    readonly noMatchText: StringConstructor;
    readonly remoteMethod: {
        readonly type: PropType<(query: string) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly options: {
        readonly type: PropType<OptionType[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => Partial<Options_2>, boolean>;
    readonly remote: BooleanConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly props: EpPropFinalized<(new (...args: any[]) => Props) | (() => Props) | ((new (...args: any[]) => Props) | (() => Props))[], unknown, unknown, () => Required<Props>, boolean>;
    readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], Placement_2, unknown, "bottom-start", boolean>;
    readonly fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, readonly ["bottom-start", "top-start", "right", "left"], boolean>;
    readonly tagType: {
        readonly default: "info";
        readonly type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly tagEffect: {
        readonly default: "light";
        readonly type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fitInputWidth: EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, number | boolean, true, boolean>;
    readonly suffixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxSelectV2: SFCWithInstall<typeof _default>;
export { UxSelectV2 }
export default UxSelectV2;

export { }
