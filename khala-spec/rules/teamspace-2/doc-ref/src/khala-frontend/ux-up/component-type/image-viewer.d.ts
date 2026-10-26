import { AllowedComponentProps } from 'vue';
import type { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly urlList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly hideOnClickModal: BooleanConstructor;
readonly teleported: BooleanConstructor;
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
/**
* @description manually switch image
*/
setActiveItem: typeof setActiveItem;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
switch: (index: number) => void;
rotate: (deg: number) => void;
close: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly urlList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly hideOnClickModal: BooleanConstructor;
readonly teleported: BooleanConstructor;
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
onClose?: (() => any) | undefined;
onSwitch?: ((index: number) => any) | undefined;
onRotate?: ((deg: number) => any) | undefined;
}, {
readonly infinite: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly teleported: boolean;
readonly initialIndex: number;
readonly closeOnPressEscape: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly urlList: string[];
readonly zoomRate: number;
readonly minScale: number;
readonly maxScale: number;
readonly hideOnClickModal: boolean;
readonly showProgress: boolean;
}>;

declare function __VLS_template(): {
    progress?(_: {
        activeIndex: number;
        total: number;
    }): any;
    toolbar?(_: {
        actions: typeof handleActions;
        prev: typeof prev;
        next: typeof next;
        reset: typeof toggleMode;
        activeIndex: number;
        setActiveItem: typeof setActiveItem;
    }): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare function handleActions(action: ImageViewerAction, options?: {}): void;

export declare type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise';

export declare type ImageViewerEmits = typeof imageViewerEmits;

export declare const imageViewerEmits: {
    close: () => boolean;
    switch: (index: number) => boolean;
    rotate: (deg: number) => boolean;
};

export declare type ImageViewerInstance = InstanceType<typeof _default> & unknown;

export declare interface ImageViewerMode {
    name: string;
    icon: Component;
}

export declare type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;

export declare const imageViewerProps: {
    readonly urlList: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    readonly zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly initialIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly infinite: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideOnClickModal: BooleanConstructor;
    readonly teleported: BooleanConstructor;
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

declare function next(): void;

declare function prev(): void;

declare function setActiveItem(index: number): void;

declare function toggleMode(): void;

declare const UxImageViewer: SFCWithInstall<typeof _default>;
export { UxImageViewer }
export default UxImageViewer;

export { }
