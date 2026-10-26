import { AllowedComponentProps } from 'vue';
import type { AppContext } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { Mutable } from 'ux-up/es/utils';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { SFCInstallWithContext } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly dangerouslyUseHTMLString: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, undefined, boolean>;
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
readonly onClose: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly grouping: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly repeatNum: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
}, {
visible: Ref<boolean, boolean>;
bottom: ComputedRef<number>;
close: typeof close_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
destroy: () => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly dangerouslyUseHTMLString: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, undefined, boolean>;
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
readonly onClose: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => () => void) | (() => () => void) | {
(): () => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly grouping: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
readonly repeatNum: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
}>> & {
onDestroy?: (() => any) | undefined;
}, {
readonly zIndex: number;
readonly offset: number;
readonly icon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly id: string;
readonly type: EpPropMergeType<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown>;
readonly message: EpPropMergeType<(new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | ((new (...args: any[]) => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)) | (() => string | VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | (() => VNode)))[], unknown, unknown>;
readonly onClose: () => void;
readonly duration: number;
readonly customClass: string;
readonly dangerouslyUseHTMLString: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showClose: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly plain: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly grouping: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly repeatNum: number;
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

export declare type Message = MessageFn & {
    primary: MessageTypedFn;
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
};

export declare interface MessageConfigContext {
    max?: number;
    grouping?: boolean;
    duration?: number;
    offset?: number;
    showClose?: boolean;
    plain?: boolean;
}

export declare const messageDefaults: Mutable<{
    readonly customClass: "";
    readonly center: false;
    readonly dangerouslyUseHTMLString: false;
    readonly duration: 3000;
    readonly icon: undefined;
    readonly id: "";
    readonly message: "";
    readonly onClose: undefined;
    readonly showClose: false;
    readonly type: "info";
    readonly plain: false;
    readonly offset: 16;
    readonly zIndex: 0;
    readonly grouping: false;
    readonly repeatNum: 1;
    readonly appendTo: HTMLElement;
}>;

export declare type MessageEmits = typeof messageEmits;

export declare const messageEmits: {
    destroy: () => boolean;
};

export declare type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
    closeAll(type?: MessageType): void;
};

export declare interface MessageHandler {
    /**
     * @description close the Message
     */
    close: () => void;
}

export declare type MessageInstance = InstanceType<typeof _default> & unknown;

export declare type MessageOptions = Partial<Mutable<Omit<MessageProps, 'id'> & {
    appendTo?: HTMLElement | string;
}>>;

export declare type MessageOptionsWithType = Omit<MessageOptions, 'type'>;

export declare type MessageParams = MessageOptions | MessageOptions['message'];

export declare type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
    /**
     * @description set the root element for the message, default to `document.body`
     */
    appendTo: HTMLElement;
};

export declare type MessageParamsWithType = MessageOptionsWithType | MessageOptions['message'];

export declare type MessageProps = ExtractPropTypes<typeof messageProps>;

export declare const messageProps: {
    readonly customClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly dangerouslyUseHTMLString: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly duration: EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    readonly icon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, undefined, boolean>;
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
    readonly onClose: EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
    (): () => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => () => void) | (() => () => void) | {
    (): () => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly showClose: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: EpPropFinalized<StringConstructor, "error" | "primary" | "success" | "warning" | "info", unknown, "info", boolean>;
    readonly plain: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly offset: EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    readonly zIndex: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly grouping: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly repeatNum: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
};

export declare type MessageType = (typeof messageTypes)[number];

/** @deprecated please use `MessageType` instead */
export declare type messageType = MessageType;

export declare type MessageTypedFn = (options?: MessageParamsWithType, appContext?: null | AppContext) => MessageHandler;

export declare const messageTypes: readonly ["primary", "success", "info", "warning", "error"];

declare const UxMessage: SFCInstallWithContext<Message>;
export { UxMessage }
export default UxMessage;

export { }
