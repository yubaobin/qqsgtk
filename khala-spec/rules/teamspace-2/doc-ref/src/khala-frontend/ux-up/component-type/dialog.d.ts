import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import type { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { TransitionProps } from 'vue';
import type { UseNamespaceReturn } from 'ux-up/es/hooks';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly pageScale: NumberConstructor;
readonly appendToBody: BooleanConstructor;
readonly appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
readonly beforeClose: {
readonly type: PropType<DialogBeforeCloseFn>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly destroyOnClose: BooleanConstructor;
readonly closeOnClickModal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly lockScroll: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modalPenetrable: BooleanConstructor;
readonly openDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly closeDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly top: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly modelValue: BooleanConstructor;
readonly modalClass: StringConstructor;
readonly headerClass: StringConstructor;
readonly bodyClass: StringConstructor;
readonly footerClass: StringConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly trapFocus: BooleanConstructor;
readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
readonly transition: EpPropFinalized<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown, "dialog-fade", boolean>;
readonly center: BooleanConstructor;
readonly alignCenter: BooleanConstructor;
readonly closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly draggable: BooleanConstructor;
readonly overflow: BooleanConstructor;
readonly fullscreen: BooleanConstructor;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly ariaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}, {
/** @description whether the dialog is visible */
visible: Ref<boolean, boolean>;
dialogContentRef: Ref<any, any>;
resetPosition: () => void;
handleClose: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
open: () => void;
"update:modelValue": (value: boolean) => void;
close: () => void;
opened: () => void;
closed: () => void;
openAutoFocus: () => void;
closeAutoFocus: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly pageScale: NumberConstructor;
readonly appendToBody: BooleanConstructor;
readonly appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
readonly beforeClose: {
readonly type: PropType<DialogBeforeCloseFn>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly destroyOnClose: BooleanConstructor;
readonly closeOnClickModal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly lockScroll: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modalPenetrable: BooleanConstructor;
readonly openDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly closeDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly top: {
readonly type: PropType<string>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly modelValue: BooleanConstructor;
readonly modalClass: StringConstructor;
readonly headerClass: StringConstructor;
readonly bodyClass: StringConstructor;
readonly footerClass: StringConstructor;
readonly width: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly zIndex: {
readonly type: PropType<number>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly trapFocus: BooleanConstructor;
readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
readonly transition: EpPropFinalized<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown, "dialog-fade", boolean>;
readonly center: BooleanConstructor;
readonly alignCenter: BooleanConstructor;
readonly closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly draggable: BooleanConstructor;
readonly overflow: BooleanConstructor;
readonly fullscreen: BooleanConstructor;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly ariaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
onOpen?: (() => any) | undefined;
onClose?: (() => any) | undefined;
onOpened?: (() => any) | undefined;
onClosed?: (() => any) | undefined;
onOpenAutoFocus?: (() => any) | undefined;
onCloseAutoFocus?: (() => any) | undefined;
}, {
readonly title: string;
readonly center: boolean;
readonly overflow: boolean;
readonly transition: EpPropMergeType<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown>;
readonly modelValue: boolean;
readonly ariaLevel: string;
readonly appendTo: EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>;
readonly showClose: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly alignCenter: boolean;
readonly draggable: boolean;
readonly fullscreen: boolean;
readonly closeOnClickModal: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly closeOnPressEscape: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly lockScroll: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly modal: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly openDelay: number;
readonly closeDelay: number;
readonly headerAriaLevel: string;
readonly appendToBody: boolean;
readonly destroyOnClose: boolean;
readonly modalPenetrable: boolean;
readonly trapFocus: boolean;
}>;

declare function __VLS_template(): {
    header?(_: {
        close: () => void;
        titleId: string;
        titleClass: string;
    }): any;
    title?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const DEFAULT_DIALOG_TRANSITION = "dialog-fade";

export declare type DialogBeforeCloseFn = (done: DoneFn) => void;

export declare type DialogContext = {
    dialogRef: Ref<HTMLElement | undefined>;
    headerRef: Ref<HTMLElement | undefined>;
    bodyId: Ref<string>;
    ns: UseNamespaceReturn;
    rendered: Ref<boolean>;
    style: ComputedRef<CSSProperties>;
};

export declare type DialogEmits = typeof dialogEmits;

export declare const dialogEmits: {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};

export declare const dialogInjectionKey: InjectionKey<DialogContext>;

export declare type DialogInstance = InstanceType<typeof _default> & unknown;

export declare type DialogProps = ExtractPropTypes<typeof dialogProps>;

export declare const dialogProps: {
    readonly pageScale: NumberConstructor;
    readonly appendToBody: BooleanConstructor;
    readonly appendTo: EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
    readonly beforeClose: {
        readonly type: PropType<DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly destroyOnClose: BooleanConstructor;
    readonly closeOnClickModal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeOnPressEscape: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly lockScroll: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly modal: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly modalPenetrable: BooleanConstructor;
    readonly openDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly closeDelay: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly top: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: BooleanConstructor;
    readonly modalClass: StringConstructor;
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly width: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly trapFocus: BooleanConstructor;
    readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    readonly transition: EpPropFinalized<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown, "dialog-fade", boolean>;
    readonly center: BooleanConstructor;
    readonly alignCenter: BooleanConstructor;
    readonly closeIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly draggable: BooleanConstructor;
    readonly overflow: BooleanConstructor;
    readonly fullscreen: BooleanConstructor;
    readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly ariaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};

export declare type DialogTransition = string | TransitionProps;

declare type DoneFn = (cancel?: boolean) => void;

export declare const useDialog: (props: DialogProps, targetRef: Ref<HTMLElement | undefined>) => {
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    close: () => void;
    doClose: () => void;
    onOpenAutoFocus: () => void;
    onCloseAutoFocus: () => void;
    onCloseRequested: () => void;
    onFocusoutPrevented: (event: CustomEvent) => void;
    titleId: Ref<string, string>;
    bodyId: Ref<string, string>;
    closed: Ref<boolean, boolean>;
    style: ComputedRef<CSSProperties>;
    overlayDialogStyle: ComputedRef<CSSProperties>;
    rendered: Ref<boolean, boolean>;
    visible: Ref<boolean, boolean>;
    zIndex: Ref<number, number>;
    transitionConfig: ComputedRef<TransitionProps | {
    name: EpPropMergeType<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown>;
    onAfterEnter: () => void;
    onBeforeLeave: () => void;
    onAfterLeave: () => void;
    }>;
};

declare const UxDialog: SFCWithInstall<typeof _default>;
export { UxDialog }
export default UxDialog;

export { }
