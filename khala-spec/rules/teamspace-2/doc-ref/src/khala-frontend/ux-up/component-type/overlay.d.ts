import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';
import { ZIndexProperty } from 'csstype';

export declare type OverlayEmits = typeof overlayEmits;

export declare const overlayEmits: {
    click: (evt: MouseEvent) => boolean;
};

export declare type OverlayProps = ExtractPropTypes<typeof overlayProps>;

export declare const overlayProps: {
    readonly mask: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly customMaskEvent: BooleanConstructor;
    readonly overlayClass: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>) | ((new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

declare const UxOverlay: DefineComponent<    {
readonly mask: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly customMaskEvent: BooleanConstructor;
readonly overlayClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>) | ((new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly mask: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly customMaskEvent: BooleanConstructor;
readonly overlayClass: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>) | ((new (...args: any[]) => string | string[] | Record<string, boolean>) | (() => string | string[] | Record<string, boolean>))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty) | ((new (...args: any[]) => number | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "auto") | (() => ZIndexProperty))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
readonly mask: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly customMaskEvent: boolean;
}>;
export { UxOverlay }
export default UxOverlay;

export { }
