import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { DialogBeforeCloseFn } from 'ux-up/es/components/dialog';
import { DialogTransition } from 'ux-up/es/components/dialog';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { TransitionProps } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
readonly size: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
readonly withHeader: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modalFade: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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
handleClose: () => void;
afterEnter: () => void;
afterLeave: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
open: () => void;
"update:modelValue": (value: boolean) => void;
close: () => void;
opened: () => void;
closed: () => void;
openAutoFocus: () => void;
closeAutoFocus: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
readonly size: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
readonly withHeader: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly modalFade: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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
readonly direction: EpPropMergeType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
readonly overflow: boolean;
readonly transition: EpPropMergeType<(new (...args: any[]) => string | TransitionProps) | (() => DialogTransition) | ((new (...args: any[]) => string | TransitionProps) | (() => DialogTransition))[], unknown, unknown>;
readonly size: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
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
readonly withHeader: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly modalFade: EpPropMergeType<BooleanConstructor, unknown, unknown>;
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

export declare const drawerEmits: {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};

export declare type DrawerProps = ExtractPropTypes<typeof drawerProps>;

export declare const drawerProps: {
    readonly direction: EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    readonly size: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    readonly withHeader: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly modalFade: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly headerAriaLevel: EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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

declare const UxDrawer: SFCWithInstall<typeof _default>;
export { UxDrawer }
export default UxDrawer;

export { }
