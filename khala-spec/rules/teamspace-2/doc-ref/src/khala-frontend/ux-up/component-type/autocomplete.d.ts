import { AllowedComponentProps } from 'vue';
import { Awaitable } from 'ux-up/es/utils';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { InputAutoSize } from 'ux-up/es/components/input';
import type { InputInstance } from 'ux-up/es/components/input';
import { Mutable } from 'ux-up/es/utils';
import { Placement } from 'ux-up';
import type { Placement as Placement_2 } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { StyleValue } from 'vue';
import type { TooltipInstance } from 'ux-up/es/components/tooltip';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown, "bottom-start", boolean>;
readonly fetchSuggestions: EpPropFinalized<(new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions) | ((new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions))[], unknown, unknown, () => void, boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly triggerOnFocus: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly selectWhenUnmatched: BooleanConstructor;
readonly hideLoading: BooleanConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly highlightFirstItem: BooleanConstructor;
readonly fitInputWidth: BooleanConstructor;
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly name: StringConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
readonly resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly showPassword: BooleanConstructor;
readonly showWordLimit: BooleanConstructor;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly autofocus: BooleanConstructor;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}, {
/** @description the index of the currently highlighted item */
highlightedIndex: Ref<number, number>;
/** @description autocomplete whether activated */
activated: Ref<boolean, boolean>;
/** @description remote search loading status */
loading: Ref<boolean, boolean>;
/** @description ux-input component instance */
inputRef: Ref<InputInstance | undefined, InputInstance | undefined>;
/** @description ux-tooltip component instance */
popperRef: Ref<TooltipInstance | undefined, TooltipInstance | undefined>;
/** @description fetch suggestions result */
suggestions: Ref<Record<string, any>[], AutocompleteData | Record<string, any>[]>;
/** @description triggers when a suggestion is clicked */
handleSelect: (item: any) => Promise<void>;
/** @description handle keyboard enter event */
handleKeyEnter: () => Promise<void>;
/** @description focus the input element */
focus: () => void;
/** @description blur the input element */
blur: () => void;
/** @description close suggestion */
close: () => void;
/** @description highlight an item in a suggestion */
highlight: (index: number) => void;
/** @description loading suggestion list */
getData: (queryString: string) => Promise<void>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (item: Record<string, any>) => void;
clear: () => void;
"update:modelValue": (value: string) => void;
change: (value: string) => void;
input: (value: string) => void;
blur: (evt: FocusEvent) => void;
focus: (evt: FocusEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown, "bottom-start", boolean>;
readonly fetchSuggestions: EpPropFinalized<(new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions) | ((new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions))[], unknown, unknown, () => void, boolean>;
readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly triggerOnFocus: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly selectWhenUnmatched: BooleanConstructor;
readonly hideLoading: BooleanConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly appendTo: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly highlightFirstItem: BooleanConstructor;
readonly fitInputWidth: BooleanConstructor;
readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
readonly name: StringConstructor;
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly maxlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly minlength: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
readonly resize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
minRows?: number;
maxRows?: number;
}) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
readonly formatter: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly parser: {
readonly type: PropType<Function>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly placeholder: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly form: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly readonly: BooleanConstructor;
readonly clearable: BooleanConstructor;
readonly showPassword: BooleanConstructor;
readonly showWordLimit: BooleanConstructor;
readonly suffixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly prefixIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly autofocus: BooleanConstructor;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onFocus?: ((evt: FocusEvent) => any) | undefined;
onBlur?: ((evt: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
onSelect?: ((item: Record<string, any>) => any) | undefined;
onClear?: (() => any) | undefined;
}, {
readonly disabled: boolean;
readonly id: string;
readonly type: string;
readonly modelValue: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly placement: EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown>;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly readonly: boolean;
readonly autosize: InputAutoSize;
readonly autocomplete: string;
readonly containerRole: string;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly inputStyle: StyleValue;
readonly rows: number;
readonly inputmode: EpPropMergeType<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown>;
readonly clearable: boolean;
readonly showPassword: boolean;
readonly showWordLimit: boolean;
readonly autofocus: boolean;
readonly popperClass: string;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly valueKey: string;
readonly debounce: number;
readonly fetchSuggestions: AutocompleteFetchSuggestions;
readonly triggerOnFocus: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly selectWhenUnmatched: boolean;
readonly hideLoading: boolean;
readonly highlightFirstItem: boolean;
readonly fitInputWidth: boolean;
}>;

declare function __VLS_template(): {
    prepend?(_: {}): any;
    append?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    header?(_: {}): any;
    loading?(_: {}): any;
    default?(_: {
        item: Record<string, any>;
    }): any;
    footer?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type AutocompleteData = Record<string, any>[];

export declare type AutocompleteEmits = typeof autocompleteEmits;

export declare const autocompleteEmits: {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    select: (item: Record<string, any>) => boolean;
};

export declare type AutocompleteFetchSuggestions = ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void) | AutocompleteData;

export declare type AutocompleteFetchSuggestionsCallback = (data: AutocompleteData) => void;

export declare type AutocompleteInstance = InstanceType<typeof _default> & unknown;

export declare type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>;

export declare const autocompleteProps: {
    readonly valueKey: EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly placement: EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => Placement_2))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown, "bottom-start", boolean>;
    readonly fetchSuggestions: EpPropFinalized<(new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions) | ((new (...args: any[]) => AutocompleteData | ((queryString: string, cb: AutocompleteFetchSuggestionsCallback) => Awaitable<AutocompleteData> | void)) | (() => AutocompleteFetchSuggestions))[], unknown, unknown, () => void, boolean>;
    readonly popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly triggerOnFocus: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly selectWhenUnmatched: BooleanConstructor;
    readonly hideLoading: BooleanConstructor;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly appendTo: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly highlightFirstItem: BooleanConstructor;
    readonly fitInputWidth: BooleanConstructor;
    readonly inputmode: EpPropFinalized<(new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined) | ((new (...args: any[]) => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal") | (() => "search" | "text" | "none" | "url" | "email" | "tel" | "numeric" | "decimal" | undefined))[], unknown, unknown, undefined, boolean>;
    readonly name: StringConstructor;
    readonly ariaLabel: StringConstructor;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly maxlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly minlength: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly resize: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autosize: EpPropFinalized<(new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize) | ((new (...args: any[]) => boolean | {
    minRows?: number;
    maxRows?: number;
    }) | (() => InputAutoSize))[], unknown, unknown, false, boolean>;
    readonly autocomplete: EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly formatter: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly showPassword: BooleanConstructor;
    readonly showWordLimit: BooleanConstructor;
    readonly suffixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly prefixIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly inputStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly autofocus: BooleanConstructor;
    readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxAutocomplete: SFCWithInstall<typeof _default>;
export { UxAutocomplete }
export default UxAutocomplete;

export { }
