import { AllowedComponentProps } from 'vue';
import { CheckboxValueType as CheckboxValueType_2 } from 'ux-up';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { ToRefs } from 'vue';
import { VNodeProps } from 'vue';
import type { WritableComputedRef } from 'vue';

declare const __VLS_component: DefineComponent<    {
ariaControls: StringConstructor;
modelValue: {
type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
label: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
value: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
indeterminate: BooleanConstructor;
disabled: BooleanConstructor;
checked: BooleanConstructor;
name: {
type: StringConstructor;
default: undefined;
};
trueValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
trueLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
id: {
type: StringConstructor;
default: undefined;
};
border: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tabindex: (NumberConstructor | StringConstructor)[];
validateEvent: {
type: BooleanConstructor;
default: boolean;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: CheckboxValueType) => void;
change: (val: CheckboxValueType) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
ariaControls: StringConstructor;
modelValue: {
type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
label: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
value: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
indeterminate: BooleanConstructor;
disabled: BooleanConstructor;
checked: BooleanConstructor;
name: {
type: StringConstructor;
default: undefined;
};
trueValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
trueLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
id: {
type: StringConstructor;
default: undefined;
};
border: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tabindex: (NumberConstructor | StringConstructor)[];
validateEvent: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((val: CheckboxValueType) => any) | undefined;
onChange?: ((val: CheckboxValueType) => any) | undefined;
}, {
label: string | number | boolean | Record<string, any>;
disabled: boolean;
border: boolean;
value: string | number | boolean | Record<string, any>;
id: string;
name: string;
modelValue: string | number | boolean;
validateEvent: boolean;
indeterminate: boolean;
checked: boolean;
trueValue: string | number;
falseValue: string | number;
trueLabel: string | number;
falseLabel: string | number;
}>;

declare const __VLS_component_2: DefineComponent<    {
ariaControls: StringConstructor;
modelValue: {
type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
label: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
value: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
indeterminate: BooleanConstructor;
disabled: BooleanConstructor;
checked: BooleanConstructor;
name: {
type: StringConstructor;
default: undefined;
};
trueValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
trueLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
id: {
type: StringConstructor;
default: undefined;
};
border: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tabindex: (NumberConstructor | StringConstructor)[];
validateEvent: {
type: BooleanConstructor;
default: boolean;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: CheckboxValueType) => void;
change: (val: CheckboxValueType) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
ariaControls: StringConstructor;
modelValue: {
type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
label: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
value: {
type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
default: undefined;
};
indeterminate: BooleanConstructor;
disabled: BooleanConstructor;
checked: BooleanConstructor;
name: {
type: StringConstructor;
default: undefined;
};
trueValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseValue: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
trueLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
falseLabel: {
type: (NumberConstructor | StringConstructor)[];
default: undefined;
};
id: {
type: StringConstructor;
default: undefined;
};
border: BooleanConstructor;
size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
tabindex: (NumberConstructor | StringConstructor)[];
validateEvent: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((val: CheckboxValueType) => any) | undefined;
onChange?: ((val: CheckboxValueType) => any) | undefined;
}, {
label: string | number | boolean | Record<string, any>;
disabled: boolean;
border: boolean;
value: string | number | boolean | Record<string, any>;
id: string;
name: string;
modelValue: string | number | boolean;
validateEvent: boolean;
indeterminate: boolean;
checked: boolean;
trueValue: string | number;
falseValue: string | number;
trueLabel: string | number;
falseLabel: string | number;
}>;

declare const __VLS_component_3: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
readonly disabled: BooleanConstructor;
readonly min: NumberConstructor;
readonly max: NumberConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fill: StringConstructor;
readonly textColor: StringConstructor;
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (val: CheckboxGroupValueType) => void;
change: (val: CheckboxValueType_2[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
readonly disabled: BooleanConstructor;
readonly min: NumberConstructor;
readonly max: NumberConstructor;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly fill: StringConstructor;
readonly textColor: StringConstructor;
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
"onUpdate:modelValue"?: ((val: CheckboxGroupValueType) => any) | undefined;
onChange?: ((val: CheckboxValueType_2[]) => any) | undefined;
}, {
readonly disabled: boolean;
readonly modelValue: CheckboxGroupValueType;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly tag: string;
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

export declare type CheckboxEmits = typeof checkboxEmits;

export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => val is string | number | boolean;
    change: (val: CheckboxValueType) => val is string | number | boolean;
};

declare type CheckboxGroupContext = {
    modelValue?: WritableComputedRef<any>;
    changeEvent?: (...args: any) => any;
} & ToRefs<Pick<CheckboxGroupProps, 'size' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'fill' | 'textColor'>>;

export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;

export declare type CheckboxGroupEmits = typeof checkboxGroupEmits;

export declare const checkboxGroupEmits: {
    "update:modelValue": (val: CheckboxGroupValueType) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
};

export declare type CheckboxGroupInstance = InstanceType<typeof _default_3> & unknown;

export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

export declare const checkboxGroupProps: {
    readonly ariaLabel: StringConstructor;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

export declare type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];

export declare type CheckboxInstance = InstanceType<typeof _default> & unknown;

export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export declare const checkboxProps: {
    ariaControls: StringConstructor;
    /**
     * @description binding value
     */
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @description label of the Checkbox when used inside a `checkbox-group`
     */
    label: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @description value of the Checkbox when used inside a `checkbox-group`
     */
    value: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @description Set indeterminate state, only responsible for style control
     */
    indeterminate: BooleanConstructor;
    /**
     * @description whether the Checkbox is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description if the Checkbox is checked
     */
    checked: BooleanConstructor;
    /**
     * @description native 'name' attribute
     */
    name: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * @description value of the Checkbox if it's checked
     */
    trueValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @description value of the Checkbox if it's not checked
     */
    falseValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @deprecated use `trueValue` instead
     * @description value of the Checkbox if it's checked
     */
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @deprecated use `falseValue` instead
     * @description value of the Checkbox if it's not checked
     */
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * @description input id
     */
    id: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * @description whether to add a border around Checkbox
     */
    border: BooleanConstructor;
    /**
     * @description size of the Checkbox
     */
    size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description input tabindex
     */
    tabindex: (NumberConstructor | StringConstructor)[];
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};

export declare type CheckboxValueType = string | number | boolean;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_3: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

declare const UxCheckbox: SFCWithInstall<typeof _default> & {
    CheckboxButton: typeof _default_2;
    CheckboxGroup: typeof _default_3;
};
export { UxCheckbox }
export default UxCheckbox;

export declare const UxCheckboxButton: SFCWithInstall<typeof _default_2>;

export declare const UxCheckboxGroup: SFCWithInstall<typeof _default_3>;

export { }
