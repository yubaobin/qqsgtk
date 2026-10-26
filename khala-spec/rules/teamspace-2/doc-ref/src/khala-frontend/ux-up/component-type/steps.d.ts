import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
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
readonly space: EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, "", boolean>;
readonly active: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly alignCenter: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly simple: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly finishStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "finish", boolean>;
readonly processStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "process", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (newVal: number, oldVal: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly space: EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, "", boolean>;
readonly active: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
readonly alignCenter: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly simple: {
readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly finishStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "finish", boolean>;
readonly processStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "process", boolean>;
}>> & {
onChange?: ((newVal: number, oldVal: number) => any) | undefined;
}, {
readonly direction: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly space: EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
readonly active: number;
readonly finishStatus: EpPropMergeType<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown>;
readonly processStatus: EpPropMergeType<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly status: EpPropFinalized<StringConstructor, "" | "wait" | "error" | "finish" | "success" | "process", unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly status: EpPropFinalized<StringConstructor, "" | "wait" | "error" | "finish" | "success" | "process", unknown, "", boolean>;
}>>, {
readonly title: string;
readonly description: string;
readonly status: EpPropMergeType<StringConstructor, "" | "wait" | "error" | "finish" | "success" | "process", unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    icon?(_: {}): any;
    title?(_: {}): any;
    description?(_: {}): any;
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

export declare type StepInstance = InstanceType<typeof _default_2> & unknown;

export declare type StepProps = ExtractPropTypes<typeof stepProps>;

export declare const stepProps: {
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly status: EpPropFinalized<StringConstructor, "" | "wait" | "error" | "finish" | "success" | "process", unknown, "", boolean>;
};

export declare const STEPS_INJECTION_KEY = "UxSteps";

export declare type StepsEmits = typeof stepsEmits;

export declare const stepsEmits: {
    change: (newVal: number, oldVal: number) => boolean;
};

export declare type StepsInstance = InstanceType<typeof _default> & unknown;

export declare type StepsProps = ExtractPropTypes<typeof stepsProps>;

export declare const stepsProps: {
    readonly space: EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, "", boolean>;
    readonly active: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly direction: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    readonly alignCenter: {
        readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly simple: {
        readonly type: PropType<EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly finishStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "finish", boolean>;
    readonly processStatus: EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "process", boolean>;
};

export declare const UxStep: SFCWithInstall<typeof _default_2>;

declare const UxSteps: SFCWithInstall<typeof _default> & {
    Step: typeof _default_2;
};
export { UxSteps }
export default UxSteps;

export { }
