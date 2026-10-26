import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly height: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly trigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
readonly autoplay: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly interval: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
readonly indicatorPosition: EpPropFinalized<StringConstructor, "" | "none" | "outside", unknown, "", boolean>;
readonly arrow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "hover", boolean>;
readonly type: EpPropFinalized<StringConstructor, "" | "card", unknown, "", boolean>;
readonly cardScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.83, boolean>;
readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly pauseOnHover: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly motionBlur: BooleanConstructor;
}, {
/** @description active slide index */
activeIndex: Ref<number, number>;
/** @description manually switch slide, index of the slide to be switched to, starting from 0; or the `name` of corresponding `ux-carousel-item` */
setActiveItem: (index: number | string) => void;
/** @description switch to the previous slide */
prev: () => void;
/** @description switch to the next slide */
next: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (current: number, prev: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly height: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly trigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
readonly autoplay: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly interval: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
readonly indicatorPosition: EpPropFinalized<StringConstructor, "" | "none" | "outside", unknown, "", boolean>;
readonly arrow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "hover", boolean>;
readonly type: EpPropFinalized<StringConstructor, "" | "card", unknown, "", boolean>;
readonly cardScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.83, boolean>;
readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly pauseOnHover: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly motionBlur: BooleanConstructor;
}>> & {
onChange?: ((current: number, prev: number) => any) | undefined;
}, {
readonly height: string;
readonly direction: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly type: EpPropMergeType<StringConstructor, "" | "card", unknown>;
readonly arrow: EpPropMergeType<StringConstructor, "always" | "never" | "hover", unknown>;
readonly trigger: EpPropMergeType<StringConstructor, "click" | "hover", unknown>;
readonly loop: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly interval: number;
readonly initialIndex: number;
readonly autoplay: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly indicatorPosition: EpPropMergeType<StringConstructor, "" | "none" | "outside", unknown>;
readonly cardScale: number;
readonly pauseOnHover: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly motionBlur: boolean;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly label: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly label: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}>>, {
readonly label: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
readonly name: string;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
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

export declare const CAROUSEL_ITEM_NAME = "UxCarouselItem";

export declare type CarouselContext = {
    root: Ref<HTMLElement | undefined>;
    items: Ref<CarouselItemContext[]>;
    isCardType: Ref<boolean>;
    isVertical: Ref<boolean>;
    loop: boolean;
    cardScale: number;
    addItem: (item: CarouselItemContext) => void;
    removeItem: (item: CarouselItemContext) => void;
    setActiveItem: (index: number) => void;
    setContainerHeight: (height: number) => void;
};

export declare const carouselContextKey: InjectionKey<CarouselContext>;

export declare type CarouselEmits = typeof carouselEmits;

export declare const carouselEmits: {
    /**
     * @description triggers when the active slide switches
     * @param current index of the new active slide
     * @param prev index of the old active slide
     */
    change: (current: number, prev: number) => boolean;
};

export declare type CarouselInstance = InstanceType<typeof _default> & unknown;

export declare type CarouselItemContext = {
    props: CarouselItemProps;
    states: CarouselItemStates;
    uid: number;
    getVnode: () => VNode;
    translateItem: (index: number, activeIndex: number, oldIndex?: number) => void;
};

export declare type CarouselItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>;

export declare const carouselItemProps: {
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly label: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
};

export declare type CarouselItemStates = {
    hover: boolean;
    translate: number;
    scale: number;
    active: boolean;
    ready: boolean;
    inStage: boolean;
    animating: boolean;
};

export declare type CarouselProps = ExtractPropTypes<typeof carouselProps>;

export declare const carouselProps: {
    readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly height: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly trigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
    readonly autoplay: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly interval: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    readonly indicatorPosition: EpPropFinalized<StringConstructor, "" | "none" | "outside", unknown, "", boolean>;
    readonly arrow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "hover", boolean>;
    readonly type: EpPropFinalized<StringConstructor, "" | "card", unknown, "", boolean>;
    readonly cardScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.83, boolean>;
    readonly loop: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    readonly pauseOnHover: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly motionBlur: BooleanConstructor;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const UxCarousel: SFCWithInstall<typeof _default> & {
    CarouselItem: typeof _default_2;
};
export { UxCarousel }
export default UxCarousel;

export declare const UxCarouselItem: SFCWithInstall<typeof _default_2>;

export { }
