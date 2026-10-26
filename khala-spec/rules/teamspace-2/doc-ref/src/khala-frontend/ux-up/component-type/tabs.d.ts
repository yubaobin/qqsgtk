import { AllowedComponentProps } from 'vue';
import type { Awaitable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import type { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Mutable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { Slots } from 'vue';
import type { UnwrapRef } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly label: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly closable: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly lazy: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly label: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly name: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly closable: BooleanConstructor;
readonly disabled: BooleanConstructor;
readonly lazy: BooleanConstructor;
}>>, {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: DefineComponent<    {
readonly tabs: EpPropFinalized<(new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | ((new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]))[], unknown, unknown, () => [], boolean>;
readonly tabRefs: EpPropFinalized<(new (...args: any[]) => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | (() => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | ((new (...args: any[]) => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | (() => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}))[], unknown, unknown, () => Mutable<    {}>, boolean>;
}, {
/** @description tab root html element */
ref: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
/** @description method to manually update tab bar style */
update: () => CSSProperties;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly tabs: EpPropFinalized<(new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | ((new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]))[], unknown, unknown, () => [], boolean>;
readonly tabRefs: EpPropFinalized<(new (...args: any[]) => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | (() => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | ((new (...args: any[]) => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}) | (() => {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
}))[], unknown, unknown, () => Mutable<    {}>, boolean>;
}>>, {
readonly tabs: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[];
readonly tabRefs: {
[key: string]: HTMLDivElement;
[key: number]: HTMLDivElement;
};
}>;

export declare type TabBarInstance = InstanceType<typeof _default_2> & unknown;

export declare type TabBarProps = ExtractPropTypes<typeof tabBarProps>;

export declare const tabBarProps: {
    readonly tabs: EpPropFinalized<(new (...args: any[]) => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | (() => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | ((new (...args: any[]) => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | (() => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]))[], unknown, unknown, () => [], boolean>;
    readonly tabRefs: EpPropFinalized<(new (...args: any[]) => {
    [key: string]: HTMLDivElement;
    [key: number]: HTMLDivElement;
    }) | (() => {
    [key: string]: HTMLDivElement;
    [key: number]: HTMLDivElement;
    }) | ((new (...args: any[]) => {
    [key: string]: HTMLDivElement;
    [key: number]: HTMLDivElement;
    }) | (() => {
    [key: string]: HTMLDivElement;
    [key: number]: HTMLDivElement;
    }))[], unknown, unknown, () => Mutable<    {}>, boolean>;
};

declare const TabNav: DefineComponent<    {
readonly panes: EpPropFinalized<(new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | ((new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]))[], unknown, unknown, () => [], boolean>;
readonly currentName: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly editable: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
readonly stretch: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
tabClick: (tab: TabsPaneContext, tabName: TabPaneName, ev: Event) => boolean;
tabRemove: (tab: TabsPaneContext, ev: Event) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly panes: EpPropFinalized<(new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | ((new (...args: any[]) => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]) | (() => {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[]))[], unknown, unknown, () => [], boolean>;
readonly currentName: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
readonly editable: BooleanConstructor;
readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
readonly stretch: BooleanConstructor;
}>> & {
onTabClick?: ((tab: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}, tabName: TabPaneName, ev: Event) => any) | undefined;
onTabRemove?: ((tab: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}, ev: Event) => any) | undefined;
}, {
readonly stretch: boolean;
readonly type: EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
readonly editable: boolean;
readonly panes: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}[];
readonly currentName: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
}>;

export declare type TabNavEmits = typeof tabNavEmits;

export declare const tabNavEmits: {
    tabClick: (tab: TabsPaneContext, tabName: TabPaneName, ev: Event) => boolean;
    tabRemove: (tab: TabsPaneContext, ev: Event) => boolean;
};

export declare type TabNavInstance = InstanceType<typeof TabNav> & {
    scrollToActiveTab: () => Promise<void>;
    removeFocus: () => void;
    focusActiveTab: () => void;
    scheduleRender: () => void;
    tabListRef: HTMLDivElement | undefined;
    tabBarRef: TabBarInstance | undefined;
};

export declare type TabNavProps = ExtractPropTypes<typeof tabNavProps>;

export declare const tabNavProps: {
    readonly panes: EpPropFinalized<(new (...args: any[]) => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | (() => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | ((new (...args: any[]) => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]) | (() => {
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: {
    readonly label: string;
    readonly disabled: boolean;
    readonly closable: boolean;
    readonly lazy: boolean;
    readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    };
    paneName: TabPaneName | undefined;
    active: boolean;
    index: string | undefined;
    isClosable: boolean;
    isFocusInsidePane: () => boolean | undefined;
    }[]))[], unknown, unknown, () => [], boolean>;
    readonly currentName: EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly editable: BooleanConstructor;
    readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    readonly stretch: BooleanConstructor;
};

export declare type TabPaneInstance = InstanceType<typeof _default> & unknown;

export declare type TabPaneName = string | number;

export declare type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;

export declare const tabPaneProps: {
    readonly label: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
};

declare const Tabs: DefineComponent<    {
readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
readonly closable: BooleanConstructor;
readonly addable: BooleanConstructor;
readonly modelValue: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly editable: BooleanConstructor;
readonly tabPosition: EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
readonly beforeLeave: EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
(): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
(): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => true, boolean>;
readonly stretch: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (name: TabPaneName) => name is string | number;
tabClick: (pane: TabsPaneContext, ev: Event) => boolean;
tabChange: (name: TabPaneName) => name is string | number;
edit: (paneName: TabPaneName | undefined, action: "remove" | "add") => boolean;
tabRemove: (name: TabPaneName) => name is string | number;
tabAdd: () => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
readonly closable: BooleanConstructor;
readonly addable: BooleanConstructor;
readonly modelValue: {
readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly editable: BooleanConstructor;
readonly tabPosition: EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
readonly beforeLeave: EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
(): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
(): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => true, boolean>;
readonly stretch: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((name: TabPaneName) => any) | undefined;
onTabClick?: ((pane: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly label: string;
readonly disabled: boolean;
readonly closable: boolean;
readonly lazy: boolean;
readonly name?: EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}, ev: Event) => any) | undefined;
onTabRemove?: ((name: TabPaneName) => any) | undefined;
onTabChange?: ((name: TabPaneName) => any) | undefined;
onEdit?: ((paneName: TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
onTabAdd?: (() => any) | undefined;
}, {
readonly stretch: boolean;
readonly type: EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
readonly closable: boolean;
readonly beforeLeave: (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
readonly editable: boolean;
readonly tabPosition: EpPropMergeType<StringConstructor, "top" | "bottom" | "left" | "right", unknown>;
readonly addable: boolean;
}>;

export declare type TabsEmits = typeof tabsEmits;

export declare const tabsEmits: {
    "update:modelValue": (name: TabPaneName) => name is string | number;
    tabClick: (pane: TabsPaneContext, ev: Event) => boolean;
    tabChange: (name: TabPaneName) => name is string | number;
    edit: (paneName: TabPaneName | undefined, action: "remove" | "add") => boolean;
    tabRemove: (name: TabPaneName) => name is string | number;
    tabAdd: () => boolean;
};

export declare type TabsInstance = InstanceType<typeof Tabs> & {
    currentName: TabPaneName;
    tabNavRef: TabNavInstance | undefined;
};

export declare type TabsPaneContext = UnwrapRef<{
    uid: number;
    getVnode: () => VNode;
    slots: Slots;
    props: TabPaneProps;
    paneName: ComputedRef<TabPaneName | undefined>;
    active: ComputedRef<boolean>;
    index: Ref<string | undefined>;
    isClosable: ComputedRef<boolean>;
    isFocusInsidePane: () => boolean | undefined;
}>;

export declare type TabsPanes = Record<number, TabsPaneContext>;

export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;

export declare const tabsProps: {
    readonly type: EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: {
        readonly type: PropType<EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly editable: BooleanConstructor;
    readonly tabPosition: EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
    readonly beforeLeave: EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
    (): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
    (): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    readonly stretch: BooleanConstructor;
};

export declare interface TabsRootContext {
    props: TabsProps;
    currentName: Ref<TabPaneName>;
    registerPane: (pane: TabsPaneContext) => void;
    unregisterPane: (pane: TabsPaneContext) => void;
    nav$: Ref<TabNavInstance | undefined>;
}

export declare const tabsRootContextKey: InjectionKey<TabsRootContext>;

export declare const UxTabPane: SFCWithInstall<typeof _default>;

declare const UxTabs: SFCWithInstall<typeof Tabs> & {
    TabPane: typeof _default;
};
export { UxTabs }
export default UxTabs;

export { }
