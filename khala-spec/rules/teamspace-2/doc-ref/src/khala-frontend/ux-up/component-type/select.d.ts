import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { ComputedRef } from 'vue';
import { DebouncedFunc } from 'lodash';
import { DefineComponent } from 'vue';
import { EmitFn } from 'ux-up/es/utils';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Options } from 'ux-up';
import type { Options as Options_2 } from 'ux-up/es/components/popper';
import { Placement } from 'ux-up';
import type { Placement as Placement_2 } from 'ux-up/es/components/popper';
import { PopperEffect } from 'ux-up';
import type { PopperEffect as PopperEffect_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { ScrollbarInstance } from 'ux-up/es/components/scrollbar';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { ShallowRef } from 'vue';
import { TooltipInstance } from 'ux-up/es/components/tooltip';
import { VNodeProps } from 'vue';
import { WritableComputedRef } from 'vue';

declare const _default: DefineComponent<    {
ariaLabel: StringConstructor;
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
name: StringConstructor;
id: StringConstructor;
modelValue: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null))[], unknown, unknown, undefined, boolean>;
autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
automaticDropdown: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, string, boolean>;
disabled: BooleanConstructor;
clearable: BooleanConstructor;
filterable: BooleanConstructor;
allowCreate: BooleanConstructor;
loading: BooleanConstructor;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
remote: BooleanConstructor;
loadingText: StringConstructor;
noMatchText: StringConstructor;
noDataText: StringConstructor;
remoteMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
filterMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
multiple: BooleanConstructor;
multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
defaultFirstOption: BooleanConstructor;
reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
valueKey: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
collapseTags: BooleanConstructor;
collapseTagsTooltip: BooleanConstructor;
maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
fitInputWidth: BooleanConstructor;
suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagType: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagEffect: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
remoteShowSuffix: BooleanConstructor;
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, string, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, string[], boolean>;
tabindex: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, number, boolean>;
appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: {
readonly type: PropType<Record<string, any>[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
props: {
readonly type: PropType<SelectOptionProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
modelValue: ComputedRef<string | number | boolean | any[] | Record<string, any> | null | undefined>;
selectedLabel: ComputedRef<string | string[]>;
calculatorRef: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
inputStyle: ComputedRef<    {
minWidth: string;
}>;
inputId: Ref<string | undefined, string | undefined>;
contentId: Ref<string, string>;
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
states: {
inputValue: string;
options: Map<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>, SelectOptionProxy> & Omit<Map<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>, SelectOptionProxy>, keyof Map<any, any>>;
cachedOptions: Map<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>, SelectOptionProxy> & Omit<Map<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>, SelectOptionProxy>, keyof Map<any, any>>;
optionValues: OptionValue[];
selected: {
value: OptionValue;
currentLabel: SelectOptionProxy["currentLabel"];
isDisabled?: SelectOptionProxy["isDisabled"] | undefined;
}[];
hoveringIndex: number;
inputHovering: boolean;
selectionWidth: number;
collapseItemWidth: number;
previousQuery: string | null;
selectedLabel: string;
menuVisibleOnFocus: boolean;
isBeforeHide: boolean;
};
isFocused: Ref<boolean, boolean>;
expanded: Ref<boolean, boolean>;
optionsArray: ComputedRef<SelectOptionProxy[]>;
hoverOption: Ref<any, any>;
selectSize: ComputedRef<"" | "small" | "default" | "large" | "mini">;
filteredOptionsCount: ComputedRef<number>;
updateTooltip: () => void;
updateTagTooltip: () => void;
debouncedOnInputChange: DebouncedFunc<() => void>;
onInput: (event: Event) => void;
deletePrevTag: (e: KeyboardEvent) => void;
deleteTag: (event: MouseEvent, tag: SelectOptionProxy | OptionBasic) => void;
deleteSelected: (event: Event) => void;
handleOptionSelect: (option: SelectOptionProxy) => void;
scrollToOption: (option: SelectOptionProxy | SelectOptionProxy[] | SelectStates["selected"]) => void;
hasModelValue: ComputedRef<boolean>;
shouldShowPlaceholder: ComputedRef<boolean>;
currentPlaceholder: ComputedRef<string>;
mouseEnterEventName: ComputedRef<"mouseenter" | null>;
needStatusIcon: ComputedRef<boolean>;
showClose: ComputedRef<boolean>;
iconComponent: ComputedRef<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown> | undefined>;
iconReverse: ComputedRef<string>;
validateState: ComputedRef<"" | "error" | "success" | "validating">;
validateIcon: ComputedRef<"" | Component>;
showNewOption: ComputedRef<boolean>;
updateOptions: () => void;
collapseTagSize: ComputedRef<"default" | "small">;
setSelected: () => void;
selectDisabled: ComputedRef<boolean>;
emptyText: ComputedRef<string | null>;
handleCompositionStart: (event: CompositionEvent) => void;
handleCompositionUpdate: (event: CompositionEvent) => void;
handleCompositionEnd: (event: CompositionEvent) => void;
onOptionCreate: (vm: SelectOptionProxy) => void;
onOptionDestroy: (key: OptionValue, vm: SelectOptionProxy) => void;
handleMenuEnter: () => void;
focus: () => void;
blur: () => void;
handleClearClick: (event: Event) => void;
handleClickOutside: (event: Event) => void;
handleEsc: () => void;
toggleMenu: () => void;
selectOption: () => void;
getValueKey: (item: SelectOptionProxy | SelectStates["selected"][0]) => any;
navigateOptions: (direction: "prev" | "next") => void;
dropdownMenuVisible: WritableComputedRef<boolean, boolean>;
showTagList: ComputedRef<    {
value: OptionValue;
currentLabel: SelectOptionProxy["currentLabel"];
isDisabled?: SelectOptionProxy["isDisabled"] | undefined;
}[]>;
collapseTagList: ComputedRef<    {
value: OptionValue;
currentLabel: SelectOptionProxy["currentLabel"];
isDisabled?: SelectOptionProxy["isDisabled"] | undefined;
}[]>;
popupScroll: (data: {
scrollTop: number;
scrollLeft: number;
}) => void;
tagStyle: ComputedRef<    {
maxWidth: string;
}>;
collapseTagStyle: ComputedRef<    {
maxWidth: string;
}>;
popperRef: ComputedRef<HTMLElement | undefined>;
inputRef: Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
tooltipRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
tagTooltipRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
prefixRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
suffixRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
selectRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
wrapperRef: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
selectionRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
scrollbarRef: Ref<ScrollbarInstance | undefined, ScrollbarInstance | undefined>;
menuRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
tagMenuRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
collapseItemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("clear" | "update:modelValue" | "change" | "blur" | "focus" | "visible-change" | "remove-tag" | "popup-scroll")[], "clear" | "update:modelValue" | "change" | "blur" | "focus" | "visible-change" | "remove-tag" | "popup-scroll", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
ariaLabel: StringConstructor;
emptyValues: ArrayConstructor;
valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
name: StringConstructor;
id: StringConstructor;
modelValue: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null))[], unknown, unknown, undefined, boolean>;
autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
automaticDropdown: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, string, boolean>;
disabled: BooleanConstructor;
clearable: BooleanConstructor;
filterable: BooleanConstructor;
allowCreate: BooleanConstructor;
loading: BooleanConstructor;
popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => Partial<Options>, boolean>;
remote: BooleanConstructor;
loadingText: StringConstructor;
noMatchText: StringConstructor;
noDataText: StringConstructor;
remoteMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
filterMethod: {
readonly type: PropType<(query: string) => void>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
multiple: BooleanConstructor;
multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
defaultFirstOption: BooleanConstructor;
reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
valueKey: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
collapseTags: BooleanConstructor;
collapseTagsTooltip: BooleanConstructor;
maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
clearIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
fitInputWidth: BooleanConstructor;
suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagType: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tagEffect: {
default: string;
type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
required: false;
validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
remoteShowSuffix: BooleanConstructor;
showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown, string, boolean>;
fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, string[], boolean>;
tabindex: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, number, boolean>;
appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
options: {
readonly type: PropType<Record<string, any>[]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
props: {
readonly type: PropType<SelectOptionProps>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onChange?: ((...args: any[]) => any) | undefined;
onFocus?: ((...args: any[]) => any) | undefined;
onBlur?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
"onVisible-change"?: ((...args: any[]) => any) | undefined;
"onRemove-tag"?: ((...args: any[]) => any) | undefined;
"onPopup-scroll"?: ((...args: any[]) => any) | undefined;
}, {
disabled: boolean;
offset: number;
multiple: boolean;
loading: boolean;
modelValue: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null))[], unknown, unknown>;
placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], Placement, unknown>;
effect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
tabindex: EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>;
valueOnClear: EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
autocomplete: string;
validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
clearable: boolean;
fallbackPlacements: Placement[];
popperOptions: Partial<Options>;
popperClass: string;
teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
showArrow: EpPropMergeType<BooleanConstructor, unknown, unknown>;
valueKey: string;
fitInputWidth: boolean;
filterable: boolean;
collapseTags: boolean;
maxCollapseTags: number;
collapseTagsTooltip: boolean;
tagType: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
tagEffect: EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
automaticDropdown: boolean;
allowCreate: boolean;
remote: boolean;
multipleLimit: number;
defaultFirstOption: boolean;
reserveKeyword: EpPropMergeType<BooleanConstructor, unknown, unknown>;
remoteShowSuffix: boolean;
}>;

declare const _default_2: DefineComponent<    {
value: {
readonly type: PropType<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
label: {
readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
created: BooleanConstructor;
disabled: BooleanConstructor;
}, {
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
id: Ref<string, string>;
containerKls: ComputedRef<string[]>;
currentLabel: ComputedRef<boolean | EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
itemSelected: ComputedRef<boolean>;
isDisabled: ComputedRef<boolean>;
select: SelectContext;
visible: Ref<boolean, boolean>;
hover: Ref<boolean, boolean>;
states: {
index: number;
groupDisabled: boolean;
visible: boolean;
hover: boolean;
};
hoverItem: () => void;
updateOption: (query: string) => void;
selectOptionClick: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
value: {
readonly type: PropType<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
label: {
readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
created: BooleanConstructor;
disabled: BooleanConstructor;
}>>, {
disabled: boolean;
created: boolean;
}>;

declare const _default_3: DefineComponent<    {
/**
* @description name of the group
*/
label: StringConstructor;
/**
* @description whether to disable all options in this group
*/
disabled: BooleanConstructor;
}, {
groupRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
visible: ComputedRef<boolean>;
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
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description name of the group
*/
label: StringConstructor;
/**
* @description whether to disable all options in this group
*/
disabled: BooleanConstructor;
}>>, {
disabled: boolean;
}>;

export declare type OptionBasic = {
    value: OptionValue;
    currentLabel: SelectOptionProxy['currentLabel'];
    isDisabled?: SelectOptionProxy['isDisabled'];
};

declare interface OptionExposed {
    ns: unknown;
    id: unknown;
    containerKls: unknown;
    currentLabel: ComputedRef<string | number | boolean>;
    itemSelected: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    visible: Ref<boolean>;
    hover: Ref<boolean>;
    states: OptionStates;
    select: SelectContext;
    hoverItem: () => void;
    updateOption: (query: string) => void;
    selectOptionClick: () => void;
}

declare type OptionProps = ExtractPropTypes<typeof optionProps>;

declare const optionProps: {
    value: {
        readonly type: PropType<EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: {
        readonly type: PropType<EpPropMergeType<(NumberConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    created: BooleanConstructor;
    disabled: BooleanConstructor;
};

declare interface OptionStates {
    index: number;
    groupDisabled: boolean;
    visible: boolean;
    hover: boolean;
}

declare type OptionValue = OptionProps['value'];

export declare interface SelectContext {
    props: SelectProps;
    states: SelectStates;
    selectRef: HTMLElement | undefined;
    optionsArray: SelectOptionProxy[];
    setSelected(): void;
    onOptionCreate(vm: SelectOptionProxy): void;
    onOptionDestroy(key: OptionValue, vm: SelectOptionProxy): void;
    handleOptionSelect(vm: SelectOptionProxy): void;
}

export declare type SelectEmits = EmitFn<typeof selectEmits>;

export declare const selectEmits: {
    "update:modelValue": (val: SelectProps["modelValue"]) => boolean;
    change: (val: SelectProps["modelValue"]) => boolean;
    'popup-scroll': ({ scrollTop, scrollLeft }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
    'remove-tag': (val: unknown) => boolean;
    'visible-change': (visible: boolean) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
};

declare interface SelectGroupContext {
    disabled: boolean;
}

export declare const selectGroupKey: InjectionKey<SelectGroupContext>;

export declare type SelectInstance = InstanceType<typeof _default> & unknown;

export declare const selectKey: InjectionKey<SelectContext>;

export declare type SelectOptionProps = {
    value?: string;
    label?: string;
    disabled?: string;
};

export declare type SelectOptionProxy = ComponentPublicInstance<OptionProps, OptionExposed>;

export declare type SelectProps = ExtractPropTypes<typeof selectProps>;

export declare const selectProps: {
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    name: StringConstructor;
    id: StringConstructor;
    modelValue: EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[]) | (() => EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown> | EpPropMergeType<(ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>[] | null))[], unknown, unknown, undefined, boolean>;
    autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect_2) | ((new (...args: any[]) => string) | (() => PopperEffect_2))[], unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>) | ((new (...args: any[]) => Partial<Options_2>) | (() => Partial<Options_2>))[], unknown, unknown, () => Partial<Options_2>, boolean>;
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: {
        readonly type: PropType<(query: string) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    filterMethod: {
        readonly type: PropType<(query: string) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    multiple: BooleanConstructor;
    multipleLimit: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    collapseTags: BooleanConstructor;
    collapseTagsTooltip: BooleanConstructor;
    maxCollapseTags: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    clearIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagType: {
        default: string;
        type: PropType<EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: PropType<EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    remoteShowSuffix: BooleanConstructor;
    showArrow: EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    offset: EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], Placement_2, unknown, string, boolean>;
    fallbackPlacements: EpPropFinalized<(new (...args: any[]) => Placement_2[]) | (() => Placement_2[]) | ((new (...args: any[]) => Placement_2[]) | (() => Placement_2[]))[], unknown, unknown, string[], boolean>;
    tabindex: EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, number, boolean>;
    appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    options: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    props: {
        readonly type: PropType<SelectOptionProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare type SelectStates = {
    inputValue: string;
    options: Map<OptionValue, SelectOptionProxy>;
    cachedOptions: Map<OptionValue, SelectOptionProxy>;
    optionValues: OptionValue[];
    selected: OptionBasic[];
    hoveringIndex: number;
    inputHovering: boolean;
    selectionWidth: number;
    collapseItemWidth: number;
    previousQuery: string | null;
    selectedLabel: string;
    menuVisibleOnFocus: boolean;
    isBeforeHide: boolean;
};

export declare const UxOption: SFCWithInstall<typeof _default_2>;

export declare const UxOptionGroup: SFCWithInstall<typeof _default_3>;

declare const UxSelect: SFCWithInstall<typeof _default> & {
    Option: typeof _default_2;
    OptionGroup: typeof _default_3;
};
export { UxSelect }
export default UxSelect;

export { }
