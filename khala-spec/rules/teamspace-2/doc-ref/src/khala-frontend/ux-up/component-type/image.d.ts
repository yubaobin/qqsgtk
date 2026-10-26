import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { ImageViewerAction } from 'ux-up/es/components/image-viewer';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly hideOnClickModal: BooleanConstructor;
readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fit: EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
readonly loading: {
readonly type: PropType<EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly lazy: BooleanConstructor;
readonly scrollContainer: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly previewSrcList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly previewTeleported: BooleanConstructor;
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly zoomRate: EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
readonly minScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
readonly maxScale: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
readonly showProgress: BooleanConstructor;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description manually open preview */
showPreview: typeof clickHandler;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
switch: (val: number) => void;
show: () => void;
close: () => void;
error: (evt: Event) => void;
load: (evt: Event) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly hideOnClickModal: BooleanConstructor;
readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fit: EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
readonly loading: {
readonly type: PropType<EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly lazy: BooleanConstructor;
readonly scrollContainer: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly previewSrcList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly previewTeleported: BooleanConstructor;
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly zoomRate: EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
readonly minScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
readonly maxScale: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
readonly showProgress: BooleanConstructor;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onShow?: (() => any) | undefined;
onLoad?: ((evt: Event) => any) | undefined;
onError?: ((evt: Event) => any) | undefined;
onClose?: (() => any) | undefined;
onSwitch?: ((val: number) => any) | undefined;
}, {
readonly infinite: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly src: string;
readonly fit: EpPropMergeType<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown>;
readonly initialIndex: number;
readonly lazy: boolean;
readonly closeOnPressEscape: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly zoomRate: number;
readonly minScale: number;
readonly maxScale: number;
readonly hideOnClickModal: boolean;
readonly showProgress: boolean;
readonly previewSrcList: string[];
readonly previewTeleported: boolean;
}>;

declare function __VLS_template(): {
    error?(_: {}): any;
    placeholder?(_: {}): any;
    viewer?(_: {}): any;
    progress?(_: {
        activeIndex: number;
        total: number;
    }): any;
    toolbar?(_: {
        actions: (action: ImageViewerAction, options?: {}) => void;
        prev: () => void;
        next: () => void;
        reset: () => void;
        activeIndex: number;
        setActiveItem: (index: number) => void;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare function clickHandler(): void;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type ImageEmits = typeof imageEmits;

export declare const imageEmits: {
    load: (evt: Event) => boolean;
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
    show: () => boolean;
};

export declare type ImageInstance = InstanceType<typeof _default> & unknown;

export declare type ImageProps = ExtractPropTypes<typeof imageProps>;

export declare const imageProps: {
    readonly hideOnClickModal: BooleanConstructor;
    readonly src: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly fit: EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    readonly loading: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly lazy: BooleanConstructor;
    readonly scrollContainer: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewSrcList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    readonly previewTeleported: BooleanConstructor;
    readonly zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly zoomRate: EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    readonly minScale: EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    readonly maxScale: EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    readonly showProgress: BooleanConstructor;
    readonly crossorigin: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxImage: SFCWithInstall<typeof _default>;
export { UxImage }
export default UxImage;

export { }
