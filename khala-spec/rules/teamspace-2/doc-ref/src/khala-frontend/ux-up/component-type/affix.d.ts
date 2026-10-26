import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';
import { ZIndexProperty } from 'csstype';

declare const __VLS_component: DefineComponent<    {
readonly zIndex: EpPropFinalized<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown, 100, boolean>;
readonly target: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly position: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
}, {
/** @description update affix status */
update: () => void;
/** @description update rootRect info */
updateRoot: () => Promise<void>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
scroll: (args_0: {
scrollTop: number;
fixed: boolean;
}) => void;
change: (fixed: boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly zIndex: EpPropFinalized<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown, 100, boolean>;
readonly target: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly position: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
}>> & {
onScroll?: ((args_0: {
scrollTop: number;
fixed: boolean;
}) => any) | undefined;
onChange?: ((fixed: boolean) => any) | undefined;
}, {
readonly position: EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
readonly zIndex: EpPropMergeType<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown>;
readonly offset: number;
readonly target: string;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type AffixEmits = typeof affixEmits;

export declare const affixEmits: {
    scroll: ({ scrollTop, fixed }: {
        scrollTop: number;
        fixed: boolean;
    }) => boolean;
    change: (fixed: boolean) => boolean;
};

export declare type AffixInstance = InstanceType<typeof _default> & unknown;

export declare type AffixProps = ExtractPropTypes<typeof affixProps>;

export declare const affixProps: {
    readonly zIndex: EpPropFinalized<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown, 100, boolean>;
    readonly target: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly position: EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxAffix: SFCWithInstall<typeof _default>;
export { UxAffix }
export default UxAffix;

export { }
