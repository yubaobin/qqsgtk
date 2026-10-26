import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly timestamp: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly hideTimestamp: BooleanConstructor;
readonly center: BooleanConstructor;
readonly placement: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "bottom", boolean>;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly color: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly size: EpPropFinalized<StringConstructor, "normal" | "large", unknown, "normal", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hollow: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly timestamp: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly hideTimestamp: BooleanConstructor;
readonly center: BooleanConstructor;
readonly placement: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "bottom", boolean>;
readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
readonly color: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly size: EpPropFinalized<StringConstructor, "normal" | "large", unknown, "normal", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly hollow: BooleanConstructor;
}>>, {
readonly center: boolean;
readonly color: string;
readonly size: EpPropMergeType<StringConstructor, "normal" | "large", unknown>;
readonly type: EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
readonly placement: EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
readonly timestamp: string;
readonly hideTimestamp: boolean;
readonly hollow: boolean;
}>;

declare function __VLS_template(): {
    dot?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const Timeline: DefineComponent<    {}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;

export declare const TIMELINE_INJECTION_KEY = "timeline";

export declare type TimelineInstance = InstanceType<typeof Timeline> & unknown;

export declare type TimelineItemInstance = InstanceType<typeof _default> & unknown;

export declare type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;

export declare const timelineItemProps: {
    readonly timestamp: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly hideTimestamp: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly placement: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "bottom", boolean>;
    readonly type: EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    readonly color: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: EpPropFinalized<StringConstructor, "normal" | "large", unknown, "normal", boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hollow: BooleanConstructor;
};

declare const UxTimeline: SFCWithInstall<typeof Timeline> & {
    TimelineItem: typeof _default;
};
export { UxTimeline }
export default UxTimeline;

export declare const UxTimelineItem: SFCWithInstall<typeof _default>;

export { }
