import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly type: EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
readonly percentage: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly status: EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
readonly indeterminate: BooleanConstructor;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly strokeWidth: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly strokeLinecap: EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
readonly textInside: BooleanConstructor;
readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
readonly showText: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly color: EpPropFinalized<(new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
readonly striped: BooleanConstructor;
readonly stripedFlow: BooleanConstructor;
readonly format: EpPropFinalized<(new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
(): ProgressFn;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
(): ProgressFn;
new (): any;
readonly prototype: any;
})[], unknown, unknown, (percentage: number) => string, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly type: EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
readonly percentage: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly status: EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
readonly indeterminate: BooleanConstructor;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
readonly strokeWidth: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly strokeLinecap: EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
readonly textInside: BooleanConstructor;
readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
readonly showText: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly color: EpPropFinalized<(new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
readonly striped: BooleanConstructor;
readonly stripedFlow: BooleanConstructor;
readonly format: EpPropFinalized<(new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
(): ProgressFn;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
(): ProgressFn;
new (): any;
readonly prototype: any;
})[], unknown, unknown, (percentage: number) => string, boolean>;
}>>, {
readonly width: number;
readonly color: EpPropMergeType<(new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]))[], unknown, unknown>;
readonly strokeLinecap: EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
readonly strokeWidth: number;
readonly type: EpPropMergeType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
readonly format: ProgressFn;
readonly duration: number;
readonly indeterminate: boolean;
readonly percentage: number;
readonly status: EpPropMergeType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
readonly showText: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly textInside: boolean;
readonly striped: boolean;
readonly stripedFlow: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {
        percentage: number;
    }): any;
    default?(_: {
        percentage: number;
    }): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type ProgressColor = {
    color: string;
    percentage: number;
};

export declare type ProgressFn = (percentage: number) => string;

export declare type ProgressInstance = InstanceType<typeof _default> & unknown;

export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;

export declare const progressProps: {
    readonly type: EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
    readonly percentage: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly status: EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
    readonly indeterminate: BooleanConstructor;
    readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    readonly strokeWidth: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly strokeLinecap: EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
    readonly textInside: BooleanConstructor;
    readonly width: EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
    readonly showText: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly color: EpPropFinalized<(new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
    readonly striped: BooleanConstructor;
    readonly stripedFlow: BooleanConstructor;
    readonly format: EpPropFinalized<(new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
    (): ProgressFn;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
    (): ProgressFn;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
};

declare const UxProgress: SFCWithInstall<typeof _default>;
export { UxProgress }
export default UxProgress;

export { }
