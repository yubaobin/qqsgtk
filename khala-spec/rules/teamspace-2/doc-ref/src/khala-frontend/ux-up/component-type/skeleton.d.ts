import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { ThrottleType } from 'ux-up/es/hooks';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly animated: BooleanConstructor;
readonly count: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly loading: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly throttle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | {
leading?: number;
trailing?: number;
initVal?: boolean;
}) | (() => ThrottleType) | ((new (...args: any[]) => number | {
leading?: number;
trailing?: number;
initVal?: boolean;
}) | (() => ThrottleType))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
/** @description loading state */
uiLoading: Ref<boolean, boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly animated: BooleanConstructor;
readonly count: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly loading: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly throttle: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | {
leading?: number;
trailing?: number;
initVal?: boolean;
}) | (() => ThrottleType) | ((new (...args: any[]) => number | {
leading?: number;
trailing?: number;
initVal?: boolean;
}) | (() => ThrottleType))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly loading: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly rows: number;
readonly count: number;
readonly animated: boolean;
}>;

declare function __VLS_template(): {
    template?(_: {
        key: number;
    }): any;
    default?(_: {
        [x: string]: unknown;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: DefineComponent<    {
readonly variant: EpPropFinalized<StringConstructor, "button" | "caption" | "h1" | "h3" | "p" | "circle" | "image" | "rect" | "text", unknown, "text", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly variant: EpPropFinalized<StringConstructor, "button" | "caption" | "h1" | "h3" | "p" | "circle" | "image" | "rect" | "text", unknown, "text", boolean>;
}>>, {
readonly variant: EpPropMergeType<StringConstructor, "button" | "caption" | "h1" | "h3" | "p" | "circle" | "image" | "rect" | "text", unknown>;
}>;

export declare type SkeletonInstance = InstanceType<typeof _default> & unknown;

export declare type SkeletonItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type SkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>;

export declare const skeletonItemProps: {
    readonly variant: EpPropFinalized<StringConstructor, "button" | "caption" | "h1" | "h3" | "p" | "circle" | "image" | "rect" | "text", unknown, "text", boolean>;
};

export declare type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;

export declare const skeletonProps: {
    readonly animated: BooleanConstructor;
    readonly count: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly rows: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    readonly loading: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly throttle: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | {
        leading?: number;
        trailing?: number;
        initVal?: boolean;
        }) | (() => ThrottleType) | ((new (...args: any[]) => number | {
        leading?: number;
        trailing?: number;
        initVal?: boolean;
        }) | (() => ThrottleType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxSkeleton: SFCWithInstall<typeof _default> & {
    SkeletonItem: typeof _default_2;
};
export { UxSkeleton }
export default UxSkeleton;

export declare const UxSkeletonItem: SFCWithInstall<typeof _default_2>;

export { }
