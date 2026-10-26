import { AllowedComponentProps } from 'vue';
import type { AppContext } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { SFCInstallWithContext } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly dangerouslyUseHTMLString: BooleanConstructor;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 4500, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly message: EpPropFinalized<(new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | ((new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)))[], unknown, unknown, "", boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly onClick: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => undefined, boolean>;
readonly onClose: {
readonly type: PropType<() => void>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly position: EpPropFinalized<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown, "top-right", boolean>;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly type: EpPropFinalized<StringConstructor, "" | "error" | "primary" | "success" | "warning" | "info", unknown, "", boolean>;
readonly zIndex: NumberConstructor;
readonly closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {
visible: Ref<boolean, boolean>;
/** @description close notification */
close: typeof close_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
destroy: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly dangerouslyUseHTMLString: BooleanConstructor;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 4500, boolean>;
readonly icon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly message: EpPropFinalized<(new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | ((new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)))[], unknown, unknown, "", boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly onClick: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => undefined, boolean>;
readonly onClose: {
readonly type: PropType<() => void>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly position: EpPropFinalized<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown, "top-right", boolean>;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly type: EpPropFinalized<StringConstructor, "" | "error" | "primary" | "success" | "warning" | "info", unknown, "", boolean>;
readonly zIndex: NumberConstructor;
readonly closeIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onDestroy?: (() => any) | undefined;
}, {
readonly title: string;
readonly position: EpPropMergeType<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown>;
readonly offset: number;
readonly id: string;
readonly type: EpPropMergeType<StringConstructor, "" | "error" | "primary" | "success" | "warning" | "info", unknown>;
readonly message: EpPropMergeType<(new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | ((new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)))[], unknown, unknown>;
readonly onClick: () => void;
readonly duration: number;
readonly customClass: string;
readonly dangerouslyUseHTMLString: boolean;
readonly showClose: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare function close_2(): void;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type NotificationEmits = typeof notificationEmits;

export declare const notificationEmits: {
    destroy: () => boolean;
};

export declare interface NotificationHandle {
    close: () => void;
}

export declare type NotificationInstance = InstanceType<typeof _default> & unknown;

declare type NotificationOptions_2 = Omit<NotificationProps, 'id' | 'onClose'> & {
    /**
     * @description set the root element for the notification, default to `document.body`
     */
    appendTo?: HTMLElement | string;
    /**
     * @description callback function when closed
     */
    onClose?(vm: VNode): void;
};
export { NotificationOptions_2 as NotificationOptions }

export declare type NotificationOptionsTyped = Omit<NotificationOptions_2, 'type'>;

export declare type NotificationParams = Partial<NotificationOptions_2> | string | VNode;

export declare type NotificationParamsTyped = Partial<NotificationOptionsTyped> | string | VNode;

export declare type NotificationProps = ExtractPropTypes<typeof notificationProps>;

export declare const notificationProps: {
    readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly dangerouslyUseHTMLString: BooleanConstructor;
    readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 4500, boolean>;
    readonly icon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly message: EpPropFinalized<(new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }> | (() => VNode)) | ((new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }> | (() => VNode)))[], unknown, unknown, "", boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly onClick: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
    (): () => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => () => void) | (() => () => void) | {
    (): () => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => undefined, boolean>;
    readonly onClose: {
        readonly type: PropType<() => void>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly position: EpPropFinalized<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown, "top-right", boolean>;
    readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly title: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly type: EpPropFinalized<StringConstructor, "" | "error" | "primary" | "success" | "warning" | "info", unknown, "", boolean>;
    readonly zIndex: NumberConstructor;
    readonly closeIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare type NotificationQueue = NotificationQueueItem[];

export declare interface NotificationQueueItem {
    vm: VNode;
}

export declare const notificationTypes: readonly ["primary", "success", "info", "warning", "error"];

export declare interface Notify extends NotifyFn {
    primary: NotifyTypedFn;
    success: NotifyTypedFn;
    warning: NotifyTypedFn;
    error: NotifyTypedFn;
    info: NotifyTypedFn;
}

export declare interface NotifyFn {
    (options?: NotificationParams, appContext?: null | AppContext): NotificationHandle;
    closeAll(): void;
    updateOffsets(position?: NotificationOptions_2['position']): void;
    _context: AppContext | null;
}

export declare type NotifyTypedFn = (options?: NotificationParamsTyped, appContext?: null | AppContext) => NotificationHandle;

declare const UxNotification: SFCInstallWithContext<Notify>;
export { UxNotification }
export default UxNotification;

export { }
