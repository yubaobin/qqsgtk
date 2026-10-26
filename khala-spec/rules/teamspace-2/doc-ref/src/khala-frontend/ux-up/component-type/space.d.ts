import { AllowedComponentProps } from 'vue';
import { Arrayable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { StyleValue } from 'vue';
import { VNode } from 'vue';
import type { VNodeChild } from 'vue';
import { VNodeProps } from 'vue';

declare const Space: DefineComponent<    {
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly class: EpPropFinalized<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>))[], unknown, unknown, "", boolean>;
readonly style: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly alignment: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "center", boolean>;
readonly prefixCls: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly spacer: EpPropFinalized<(new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild) | ((new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild))[], unknown, string | number | VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, null, boolean>;
readonly wrap: BooleanConstructor;
readonly fill: BooleanConstructor;
readonly fillRatio: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "" | "small" | "default" | "large" | "mini", number | [number, number]>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | {
[name: string]: unknown;
$stable?: boolean;
} | null, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly class: EpPropFinalized<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>))[], unknown, unknown, "", boolean>;
readonly style: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
readonly alignment: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "center", boolean>;
readonly prefixCls: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly spacer: EpPropFinalized<(new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild) | ((new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild))[], unknown, string | number | VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, null, boolean>;
readonly wrap: BooleanConstructor;
readonly fill: BooleanConstructor;
readonly fillRatio: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "" | "small" | "default" | "large" | "mini", number | [number, number]>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly style: StyleValue;
readonly spacer: EpPropMergeType<(new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild) | ((new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild))[], unknown, string | number | VNode<RendererNode, RendererElement, {
[key: string]: any;
}>>;
readonly fill: boolean;
readonly direction: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly wrap: boolean;
readonly class: EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>))[], unknown, unknown>;
readonly alignment: string;
readonly fillRatio: number;
}>;

export declare type SpaceInstance = InstanceType<typeof Space> & unknown;

declare const SpaceItem: DefineComponent<    {
readonly prefixCls: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly prefixCls: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {}>;

export declare type SpaceItemInstance = InstanceType<typeof SpaceItem> & unknown;

export declare type SpaceItemProps = ExtractPropTypes<typeof spaceItemProps>;

export declare const spaceItemProps: {
    readonly prefixCls: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type SpaceProps = ExtractPropTypes<typeof spaceProps>;

export declare const spaceProps: {
    readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    readonly class: EpPropFinalized<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>))[], unknown, unknown, "", boolean>;
    readonly style: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly alignment: EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "center", boolean>;
    readonly prefixCls: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly spacer: EpPropFinalized<(new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild) | ((new (...args: any[]) => VNodeChild & {}) | (() => VNodeChild))[], unknown, string | number | VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }>, null, boolean>;
    readonly wrap: BooleanConstructor;
    readonly fill: BooleanConstructor;
    readonly fillRatio: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "" | "small" | "default" | "large" | "mini", number | [number, number]>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare function useSpace(props: SpaceProps): {
    classes: ComputedRef<EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => Arrayable<string | Record<string, boolean>>))[], unknown, unknown>[]>;
    containerStyle: ComputedRef<StyleValue>;
    itemStyle: ComputedRef<StyleValue>;
};

declare const UxSpace: SFCWithInstall<typeof Space>;
export { UxSpace }
export default UxSpace;

export { }
