import { AllowedComponentProps } from 'vue';
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
readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 9, boolean>;
readonly rotate: EpPropFinalized<NumberConstructor, unknown, unknown, -22, boolean>;
readonly width: NumberConstructor;
readonly height: NumberConstructor;
readonly image: StringConstructor;
readonly content: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, "ux-ui", boolean>;
readonly font: {
readonly type: PropType<WatermarkFontType>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly gap: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, () => number[], boolean>;
readonly offset: {
readonly type: PropType<[number, number]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 9, boolean>;
readonly rotate: EpPropFinalized<NumberConstructor, unknown, unknown, -22, boolean>;
readonly width: NumberConstructor;
readonly height: NumberConstructor;
readonly image: StringConstructor;
readonly content: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, "ux-ui", boolean>;
readonly font: {
readonly type: PropType<WatermarkFontType>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly gap: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, () => number[], boolean>;
readonly offset: {
readonly type: PropType<[number, number]>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly content: EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>;
readonly rotate: number;
readonly zIndex: number;
readonly gap: [number, number];
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxWatermark: SFCWithInstall<typeof _default>;
export { UxWatermark }
export default UxWatermark;

export declare interface WatermarkFontType {
    color?: string;
    fontSize?: number | string;
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    fontFamily?: string;
    textAlign?: 'start' | 'end' | 'left' | 'right' | 'center';
    textBaseline?: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
}

export declare type WatermarkInstance = InstanceType<typeof _default> & unknown;

export declare type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;

export declare const watermarkProps: {
    readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 9, boolean>;
    readonly rotate: EpPropFinalized<NumberConstructor, unknown, unknown, -22, boolean>;
    readonly width: NumberConstructor;
    readonly height: NumberConstructor;
    readonly image: StringConstructor;
    readonly content: EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, "ux-ui", boolean>;
    readonly font: {
        readonly type: PropType<WatermarkFontType>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly gap: EpPropFinalized<(new (...args: any[]) => [number, number]) | (() => [number, number]) | ((new (...args: any[]) => [number, number]) | (() => [number, number]))[], unknown, unknown, () => number[], boolean>;
    readonly offset: {
        readonly type: PropType<[number, number]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export { }
