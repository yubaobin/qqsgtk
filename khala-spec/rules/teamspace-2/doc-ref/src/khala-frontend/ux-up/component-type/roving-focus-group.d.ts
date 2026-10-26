import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { HTMLAttributes } from 'vue';
import { InjectionKey } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { StyleValue } from 'vue';
import { UxCollectionInjectionContext } from 'ux-up/es/components/collection';
import { UxCollectionItemInjectionContext } from 'ux-up/es/components/collection';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;
export { _default as UxRovingFocusGroup }
export default _default;

declare type Direction = 'ltr' | 'rtl';

declare type EventHandler<T = Event> = (e: T) => void;

export declare const focusFirst: (elements: HTMLElement[]) => void;

declare type FocusIntent = 'first' | 'last' | 'prev' | 'next';

export declare const getFocusIntent: (event: KeyboardEvent, orientation?: Orientation, dir?: Direction) => FocusIntent | undefined;

declare type Orientation = HTMLAttributes['aria-orientation'];

export declare const reorderArray: <T>(array: T[], atIdx: number) => T[];

export declare const ROVING_FOCUS_COLLECTION_INJECTION_KEY: InjectionKey<UxCollectionInjectionContext>;

export declare const ROVING_FOCUS_GROUP_INJECTION_KEY: InjectionKey<RovingGroupInjectionContext>;

export declare const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY: InjectionKey<RovingFocusGroupItemInjectionContext>;

export declare const ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY: InjectionKey<UxCollectionItemInjectionContext>;

export declare type RovingFocusGroupItemInjectionContext = {
    rovingFocusGroupItemRef: Ref<HTMLElement | undefined>;
    tabIndex: Ref<number>;
    handleMousedown: EventHandler;
    handleFocus: EventHandler;
    handleKeydown: EventHandler;
};

declare const rovingFocusGroupProps: {
    style: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    currentTabId: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultCurrentTabId: StringConstructor;
    loop: BooleanConstructor;
    dir: EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    orientation: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical" | undefined) | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical" | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onBlur: FunctionConstructor;
    onFocus: FunctionConstructor;
    onMousedown: FunctionConstructor;
};

export declare type RovingGroupInjectionContext = {
    currentTabbedId: Ref<string | null>;
    dir: Ref<UxRovingFocusGroupProps['dir']>;
    loop: Ref<UxRovingFocusGroupProps['loop']>;
    orientation: Ref<UxRovingFocusGroupProps['orientation']>;
    tabIndex: Ref<number>;
    rovingFocusGroupRef: Ref<HTMLElement | undefined>;
    rovingFocusGroupRootStyle: Ref<StyleValue>;
    onBlur: EventHandler;
    onFocus: EventHandler<FocusEvent>;
    onMousedown: EventHandler;
    onItemFocus: (id: string) => void;
    onItemShiftTab: () => void;
};

declare type UxRovingFocusGroupProps = ExtractPropTypes<typeof rovingFocusGroupProps>;

export declare const UxRovingFocusItem: DefineComponent<    {
focusable: {
type: BooleanConstructor;
default: boolean;
};
active: BooleanConstructor;
}, {
id: Ref<string, string>;
handleKeydown: (event: Event) => void;
handleFocus: (event: Event) => void;
handleMousedown: (event: Event) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("focus" | "keydown" | "mousedown")[], "focus" | "keydown" | "mousedown", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
focusable: {
type: BooleanConstructor;
default: boolean;
};
active: BooleanConstructor;
}>> & {
onFocus?: ((...args: any[]) => any) | undefined;
onKeydown?: ((...args: any[]) => any) | undefined;
onMousedown?: ((...args: any[]) => any) | undefined;
}, {
active: boolean;
focusable: boolean;
}>;

export { }
