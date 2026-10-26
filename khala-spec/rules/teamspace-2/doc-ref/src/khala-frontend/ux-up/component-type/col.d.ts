import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { Mutable } from 'ux-up/es/utils';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly span: EpPropFinalized<NumberConstructor, unknown, unknown, 24, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly pull: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly push: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly xs: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly sm: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly md: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly lg: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly xl: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
readonly span: EpPropFinalized<NumberConstructor, unknown, unknown, 24, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly pull: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly push: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly xs: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly sm: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly md: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly lg: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly xl: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
}>>, {
readonly span: number;
readonly push: number;
readonly offset: number;
readonly tag: string;
readonly pull: number;
readonly xs: EpPropMergeType<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown>;
readonly sm: EpPropMergeType<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown>;
readonly md: EpPropMergeType<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown>;
readonly lg: EpPropMergeType<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown>;
readonly xl: EpPropMergeType<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type ColInstance = InstanceType<typeof _default> & unknown;

export declare type ColProps = ExtractPropTypes<typeof colProps>;

export declare const colProps: {
    readonly tag: EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly span: EpPropFinalized<NumberConstructor, unknown, unknown, 24, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly pull: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly push: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly xs: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly sm: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly md: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly lg: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly xl: EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => Mutable<    {}>, boolean>;
};

export declare type ColSize = number | ColSizeObject;

export declare type ColSizeObject = {
    span?: number;
    offset?: number;
    pull?: number;
    push?: number;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxCol: SFCWithInstall<typeof _default>;
export { UxCol }
export default UxCol;

export { }
