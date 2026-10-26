import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly border: BooleanConstructor;
readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: string | number | boolean | undefined) => void;
change: (val: string | number | boolean | undefined) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly border: BooleanConstructor;
readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}>> & {
"onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
}, {
readonly label: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
readonly disabled: boolean;
readonly border: boolean;
readonly value: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
readonly name: string;
readonly modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}>>, {
readonly label: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
readonly disabled: boolean;
readonly value: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
readonly name: string;
readonly modelValue: EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
}>;

declare const __VLS_component_3: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
readonly fill: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: string | number | boolean | undefined) => void;
change: (val: string | number | boolean | undefined) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
readonly fill: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
"onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
}, {
readonly disabled: boolean;
readonly fill: string;
readonly id: string;
readonly name: string;
readonly modelValue: EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly textColor: string;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
};

declare function __VLS_template_3(): {
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

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_3: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

export declare type RadioButtonInstance = InstanceType<typeof _default_2> & unknown;

export declare type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;

export declare const radioButtonProps: {
    readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
};

export declare type RadioEmits = typeof radioEmits;

export declare const radioEmits: {
    "update:modelValue": (val: string | number | boolean | undefined) => val is string | number | boolean;
    change: (val: string | number | boolean | undefined) => val is string | number | boolean;
};

export declare interface RadioGroupContext extends RadioGroupProps {
    changeEvent: (val: RadioGroupProps['modelValue']) => void;
}

export declare type RadioGroupEmits = typeof radioGroupEmits;

export declare const radioGroupEmits: {
    "update:modelValue": (val: string | number | boolean | undefined) => val is string | number | boolean;
    change: (val: string | number | boolean | undefined) => val is string | number | boolean;
};

export declare type RadioGroupInstance = InstanceType<typeof _default_3> & unknown;

export declare const radioGroupKey: InjectionKey<RadioGroupContext>;

export declare type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

export declare const radioGroupProps: {
    readonly ariaLabel: StringConstructor;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    readonly fill: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly textColor: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

export declare type RadioInstance = InstanceType<typeof _default> & unknown;

export declare type RadioProps = ExtractPropTypes<typeof radioProps>;

export declare const radioProps: {
    readonly border: BooleanConstructor;
    readonly modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
};

export declare const radioPropsBase: {
    modelValue: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    value: EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    name: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
};

declare const UxRadio: SFCWithInstall<typeof _default> & {
    RadioButton: typeof _default_2;
    RadioGroup: typeof _default_3;
};
export { UxRadio }
export default UxRadio;

export declare const UxRadioButton: SFCWithInstall<typeof _default_2>;

export declare const UxRadioGroup: SFCWithInstall<typeof _default_3>;

export { }
