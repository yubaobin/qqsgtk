import { ComponentPublicInstance } from 'vue';
import { ObjectDirective } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';

declare const InfiniteScroll: ObjectDirective<InfiniteScrollEl, InfiniteScrollCallback>;

declare const _InfiniteScroll: SFCWithInstall<typeof InfiniteScroll>;
export default _InfiniteScroll;

declare type InfiniteScrollCallback = () => void;

declare type InfiniteScrollEl = HTMLElement & {
    [SCOPE]: {
        container: HTMLElement | Window;
        containerEl: HTMLElement;
        instance: ComponentPublicInstance;
        delay: number;
        lastScrollTop: number;
        cb: InfiniteScrollCallback;
        onScroll: () => void;
        observer?: MutationObserver;
    };
};

declare const SCOPE = "UxInfiniteScroll";

export declare const UxInfiniteScroll: SFCWithInstall<ObjectDirective<HTMLElement & {
UxInfiniteScroll: {
container: HTMLElement | Window;
containerEl: HTMLElement;
instance: ComponentPublicInstance;
delay: number;
lastScrollTop: number;
cb: () => void;
onScroll: () => void;
observer?: MutationObserver;
};
}, () => void>>;

export { }
