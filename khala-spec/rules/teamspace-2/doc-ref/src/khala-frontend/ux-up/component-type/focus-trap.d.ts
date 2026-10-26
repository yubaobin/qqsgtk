import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import type { PropType } from 'vue';
import { Ref } from 'vue';
import { VNodeProps } from 'vue';

export declare const createFocusOutPreventedEvent: (detail: CustomEventInit["detail"]) => CustomEvent<any>;

declare const _default: DefineComponent<    {
loop: BooleanConstructor;
trapped: BooleanConstructor;
focusTrapEl: PropType<HTMLElement>;
focusStartEl: {
type: PropType<"container" | "first" | HTMLElement>;
default: string;
};
}, {
onKeydown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
loop: BooleanConstructor;
trapped: BooleanConstructor;
focusTrapEl: PropType<HTMLElement>;
focusStartEl: {
type: PropType<"container" | "first" | HTMLElement>;
default: string;
};
}>> & {
onFocusin?: ((...args: any[]) => any) | undefined;
onFocusout?: ((...args: any[]) => any) | undefined;
onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
"onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
"onRelease-requested"?: ((...args: any[]) => any) | undefined;
}, {
loop: boolean;
trapped: boolean;
focusStartEl: HTMLElement | "first" | "container";
}>;
export { _default as UxFocusTrap }
export default _default;

export declare const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";

export declare const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";

export declare const FOCUS_AFTER_TRAPPED_OPTS: EventInit;

export declare const FOCUS_TRAP_INJECTION_KEY: InjectionKey<FocusTrapInjectionContext>;

export declare const focusableStack: {
    push: (layer: FocusLayer) => void;
    remove: (layer: FocusLayer) => void;
};

export declare const focusFirstDescendant: (elements: HTMLElement[], shouldSelect?: boolean) => void;

export declare type FocusLayer = {
    paused: boolean;
    pause: () => void;
    resume: () => void;
};

export declare const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";

export declare const FOCUSOUT_PREVENTED_OPTS: EventInit;

declare const focusReason: Ref<"pointer" | "keyboard" | undefined, "pointer" | "keyboard" | undefined>;

export declare type FocusStack = FocusLayer[];

export declare type FocusTrapInjectionContext = {
    focusTrapRef: Ref<HTMLElement | undefined>;
    onKeydown: (e: KeyboardEvent) => void;
};

export declare const getEdges: (container: HTMLElement) => (HTMLElement | undefined)[];

export declare const getVisibleElement: (elements: HTMLElement[], container: HTMLElement) => HTMLElement | undefined;

export declare const isFocusCausedByUserEvent: () => boolean;

export declare const isHidden: (element: HTMLElement, container: HTMLElement) => boolean;

declare const lastAutomatedFocusTimestamp: Ref<number, number>;

declare const lastUserFocusTimestamp: Ref<number, number>;

export declare const obtainAllFocusableElements: (element: HTMLElement) => HTMLElement[];

export declare const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";

export declare const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";

export declare const tryFocus: (element?: HTMLElement | {
    focus: () => void;
} | null, shouldSelect?: boolean) => void;

export declare const useFocusReason: () => {
    focusReason: typeof focusReason;
    lastUserFocusTimestamp: typeof lastUserFocusTimestamp;
    lastAutomatedFocusTimestamp: typeof lastAutomatedFocusTimestamp;
};

export { }
