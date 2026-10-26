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
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
resizeStart: (index: number, sizes: number[]) => void;
resize: (index: number, sizes: number[]) => void;
resizeEnd: (index: number, sizes: number[]) => void;
collapse: (index: number, type: "end" | "start", sizes: number[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
}>> & {
onResize?: ((index: number, sizes: number[]) => any) | undefined;
onCollapse?: ((index: number, type: "end" | "start", sizes: number[]) => any) | undefined;
onResizeStart?: ((index: number, sizes: number[]) => any) | undefined;
onResizeEnd?: ((index: number, sizes: number[]) => any) | undefined;
}, {
readonly layout: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly min: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly max: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly size: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly resizable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly collapsible: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:size": (value: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly min: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly max: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly size: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly resizable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly collapsible: BooleanConstructor;
}>> & {
"onUpdate:size"?: ((value: number) => any) | undefined;
}, {
readonly resizable: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly collapsible: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
    "start-collapsible"?(_: {}): any;
    "end-collapsible"?(_: {}): any;
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

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

export declare type SplitterInstance = InstanceType<typeof _default> & unknown;

export declare type SplitterPanelInstance = InstanceType<typeof _default_2> & unknown;

export declare type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>;

export declare const splitterPanelProps: {
    readonly min: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly max: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly resizable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly collapsible: BooleanConstructor;
};

export declare type SplitterProps = ExtractPropTypes<typeof splitterProps>;

export declare const splitterProps: {
    readonly layout: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
};

declare const UxSplitter: SFCWithInstall<typeof _default> & {
    SplitPanel: typeof _default_2;
};
export { UxSplitter }
export default UxSplitter;

export declare const UxSplitterPanel: SFCWithInstall<typeof _default_2>;

export { }
