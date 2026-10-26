import type { App } from 'vue';
import type { AppContext } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentPublicInstance } from 'vue';
import type { Directive } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import { Ref } from 'vue';
import type { UnwrapRef } from 'vue';

declare function createLoadingComponent(options: LoadingOptionsResolved, appContext: AppContext | null): {
    setText: (text: string) => void;
    removeUxLoadingChild: () => void;
    close: () => void;
    handleAfterLeave: () => void;
    vm: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
    $el: HTMLElement;
    originalPosition: Ref<string, string>;
    originalOverflow: Ref<string, string>;
    visible: Ref<boolean, boolean>;
    parent: Ref<LoadingParentElement, LoadingParentElement>;
    background: Ref<string, string>;
    svg: Ref<string, string>;
    svgViewBox: Ref<string, string>;
    spinner: Ref<string | boolean, string | boolean>;
    text: Ref<string, string>;
    fullscreen: Ref<boolean, boolean>;
    lock: Ref<boolean, boolean>;
    customClass: Ref<string, string>;
    target: Ref<HTMLElement, HTMLElement>;
    beforeClose?: Ref<(() => boolean) | undefined, (() => boolean) | undefined> | undefined;
    closed?: Ref<(() => void) | undefined, (() => void) | undefined> | undefined;
};

declare interface ElementLoading extends HTMLElement {
    [INSTANCE_KEY]?: {
        instance: LoadingInstance;
        options: LoadingOptions;
    };
}

declare const INSTANCE_KEY: unique symbol;

declare type LoadingBinding = boolean | UnwrapRef<LoadingOptions>;

declare type LoadingInstance = ReturnType<typeof createLoadingComponent>;

export declare type LoadingOptions = Partial<Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    /**
     * @description the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node
     */
    target: HTMLElement | string;
    /**
     * @description same as the `body` modifier of `v-loading`
     */
    body: boolean;
}>;

export declare type LoadingOptionsResolved = {
    parent: LoadingParentElement;
    /**
     * @description background color of the mask
     */
    background: MaybeRef<string>;
    svg: MaybeRef<string>;
    svgViewBox: MaybeRef<string>;
    /**
     * @description class name of the custom spinner
     */
    spinner: MaybeRef<boolean | string>;
    /**
     * @description loading text that displays under the spinner
     */
    text: MaybeRef<string>;
    /**
     * @description same as the `fullscreen` modifier of `v-loading`
     */
    fullscreen: boolean;
    /**
     * @description same as the `lock` modifier of `v-loading`
     */
    lock: boolean;
    /**
     * @description custom class name for Loading
     */
    customClass: MaybeRef<string>;
    visible: boolean;
    target: HTMLElement;
    beforeClose?: () => boolean;
    closed?: () => void;
};

export declare interface LoadingParentElement extends HTMLElement {
    vLoadingAddClassList?: () => void;
}

declare const UxLoading: {
    install(app: App): void;
    directive: Directive<ElementLoading, LoadingBinding>;
    service: {
        (options?: LoadingOptions): LoadingInstance;
        _context: AppContext | null;
    };
};
export { UxLoading }
export default UxLoading;

export declare const UxLoadingService: {
    (options?: LoadingOptions): LoadingInstance;
    _context: AppContext | null;
};

declare const vLoading: Directive<ElementLoading, LoadingBinding>;
export { vLoading as UxLoadingDirective }
export { vLoading }

export { }
