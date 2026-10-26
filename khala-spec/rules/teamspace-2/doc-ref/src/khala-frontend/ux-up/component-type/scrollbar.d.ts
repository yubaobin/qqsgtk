import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { StyleValue } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly ariaOrientation: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly pageScale: NumberConstructor;
readonly distance: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly height: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly maxHeight: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly native: BooleanConstructor;
readonly wrapStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly wrapClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
readonly viewClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
readonly viewStyle: EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
readonly noresize: BooleanConstructor;
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly always: BooleanConstructor;
readonly minSize: EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
readonly id: StringConstructor;
readonly role: StringConstructor;
}, {
/** @description scrollbar wrap ref */
wrapRef: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
/** @description update scrollbar state manually */
update: () => void;
/** @description scrolls to a particular set of coordinates */
scrollTo: typeof scrollTo_2;
/** @description set distance to scroll top */
setScrollTop: (value: number) => void;
/** @description set distance to scroll left */
setScrollLeft: (value: number) => void;
/** @description handle scroll event */
handleScroll: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
scroll: (args_0: {
scrollTop: number;
scrollLeft: number;
}) => void;
"end-reached": (direction: ScrollbarDirection) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly ariaOrientation: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly pageScale: NumberConstructor;
readonly distance: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly height: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly maxHeight: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly native: BooleanConstructor;
readonly wrapStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly wrapClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
readonly viewClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
readonly viewStyle: EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
readonly noresize: BooleanConstructor;
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly always: BooleanConstructor;
readonly minSize: EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
readonly id: StringConstructor;
readonly role: StringConstructor;
}>> & {
onScroll?: ((args_0: {
scrollTop: number;
scrollLeft: number;
}) => any) | undefined;
"onEnd-reached"?: ((direction: ScrollbarDirection) => any) | undefined;
}, {
readonly height: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly maxHeight: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly always: boolean;
readonly tabindex: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly minSize: number;
readonly distance: number;
readonly wrapStyle: StyleValue;
readonly wrapClass: EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
readonly viewClass: EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
readonly viewStyle: EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
readonly tag: string;
readonly native: boolean;
readonly noresize: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const BAR_MAP: {
    readonly vertical: {
        readonly offset: "offsetHeight";
        readonly scroll: "scrollTop";
        readonly scrollSize: "scrollHeight";
        readonly size: "height";
        readonly key: "vertical";
        readonly axis: "Y";
        readonly client: "clientY";
        readonly direction: "top";
    };
    readonly horizontal: {
        readonly offset: "offsetWidth";
        readonly scroll: "scrollLeft";
        readonly scrollSize: "scrollWidth";
        readonly size: "width";
        readonly key: "horizontal";
        readonly axis: "X";
        readonly client: "clientX";
        readonly direction: "left";
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: DefineComponent<    {
readonly always: BooleanConstructor;
readonly pageScale: NumberConstructor;
readonly vertical: BooleanConstructor;
readonly size: StringConstructor;
readonly move: NumberConstructor;
readonly ratio: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly always: BooleanConstructor;
readonly pageScale: NumberConstructor;
readonly vertical: BooleanConstructor;
readonly size: StringConstructor;
readonly move: NumberConstructor;
readonly ratio: {
readonly type: PropType<number>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly always: boolean;
readonly vertical: boolean;
}>;

export declare const GAP = 4;

export declare const renderThumbStyle: ({ move, size, bar }: Pick<ThumbProps, "move" | "size"> & {
    bar: (typeof BAR_MAP)[keyof typeof BAR_MAP];
}) => CSSProperties;

export declare interface ScrollbarContext {
    scrollbarElement: HTMLDivElement;
    wrapElement: HTMLDivElement;
}

export declare const scrollbarContextKey: InjectionKey<ScrollbarContext>;

export declare type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right';

export declare type ScrollbarEmits = typeof scrollbarEmits;

export declare const scrollbarEmits: {
    'end-reached': (direction: ScrollbarDirection) => boolean;
    scroll: ({ scrollTop, scrollLeft }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
};

export declare type ScrollbarInstance = InstanceType<typeof _default> & unknown;

export declare type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;

export declare const scrollbarProps: {
    readonly ariaLabel: StringConstructor;
    readonly ariaOrientation: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pageScale: NumberConstructor;
    readonly distance: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly height: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: BooleanConstructor;
    readonly wrapStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly wrapClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    readonly tabindex: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly id: StringConstructor;
    readonly role: StringConstructor;
};

declare function scrollTo_2(xCord: number, yCord?: number): void;

declare function scrollTo_2(options: ScrollToOptions): void;

export declare type ThumbInstance = InstanceType<typeof _default_2> & unknown;

export declare type ThumbProps = ExtractPropTypes<typeof thumbProps>;

export declare const thumbProps: {
    readonly always: BooleanConstructor;
    readonly pageScale: NumberConstructor;
    readonly vertical: BooleanConstructor;
    readonly size: StringConstructor;
    readonly move: NumberConstructor;
    readonly ratio: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxScrollbar: SFCWithInstall<typeof _default>;
export { UxScrollbar }
export default UxScrollbar;

export { }
