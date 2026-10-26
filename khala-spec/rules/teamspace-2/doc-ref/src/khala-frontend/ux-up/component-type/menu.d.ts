import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { NavigationFailure } from 'vue-router';
import type { PopperEffect } from 'ux-up/es/components/popper';
import { PropType } from 'vue';
import type { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { RouteLocationAsPathGeneric } from 'vue-router';
import { RouteLocationAsRelativeGeneric } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly index: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, null, boolean>;
readonly route: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}, {
parentMenu: ComputedRef<ComponentInternalInstance>;
rootMenu: MenuProvider;
active: ComputedRef<boolean>;
nsMenu: {
namespace: ComputedRef<string>;
b: (blockSuffix?: string) => string;
e: (element?: string) => string;
m: (modifier?: string) => string;
be: (blockSuffix?: string, element?: string) => string;
em: (element?: string, modifier?: string) => string;
bm: (blockSuffix?: string, modifier?: string) => string;
bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
is: {
(name: string, state: boolean | undefined): string;
(name: string): string;
};
cssVar: (object: Record<string, string>) => Record<string, string>;
cssVarName: (name: string) => string;
cssVarBlock: (object: Record<string, string>) => Record<string, string>;
cssVarBlockName: (name: string) => string;
};
nsMenuItem: {
namespace: ComputedRef<string>;
b: (blockSuffix?: string) => string;
e: (element?: string) => string;
m: (modifier?: string) => string;
be: (blockSuffix?: string, element?: string) => string;
em: (element?: string, modifier?: string) => string;
bm: (blockSuffix?: string, modifier?: string) => string;
bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
is: {
(name: string, state: boolean | undefined): string;
(name: string): string;
};
cssVar: (object: Record<string, string>) => Record<string, string>;
cssVarName: (name: string) => string;
cssVarBlock: (object: Record<string, string>) => Record<string, string>;
cssVarBlockName: (name: string) => string;
};
handleClick: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (item: MenuItemRegistered) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly index: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, null, boolean>;
readonly route: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly disabled: BooleanConstructor;
}>> & {
onClick?: ((item: MenuItemRegistered) => any) | undefined;
}, {
readonly disabled: boolean;
readonly index: EpPropMergeType<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown>;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly title: StringConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly title: StringConstructor;
}>>, {}>;

declare function __VLS_template(): {
    title?(_: {}): any;
    title?(_: {}): any;
    default?(_: {}): any;
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    title?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: DefineComponent<    {
readonly mode: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "vertical", boolean>;
readonly defaultActive: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly defaultOpeneds: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly uniqueOpened: BooleanConstructor;
readonly router: BooleanConstructor;
readonly menuTrigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
readonly collapse: BooleanConstructor;
readonly backgroundColor: StringConstructor;
readonly textColor: StringConstructor;
readonly activeTextColor: StringConstructor;
readonly closeOnClickOutside: BooleanConstructor;
readonly collapseTransition: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly ellipsis: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly popperOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly ellipsisIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly popperEffect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
readonly popperClass: StringConstructor;
readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: (index: string, indexPath: string[]) => boolean;
open: (index: string, indexPath: string[]) => boolean;
select: (index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure>) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly mode: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "vertical", boolean>;
readonly defaultActive: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly defaultOpeneds: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
readonly uniqueOpened: BooleanConstructor;
readonly router: BooleanConstructor;
readonly menuTrigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
readonly collapse: BooleanConstructor;
readonly backgroundColor: StringConstructor;
readonly textColor: StringConstructor;
readonly activeTextColor: StringConstructor;
readonly closeOnClickOutside: BooleanConstructor;
readonly collapseTransition: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly ellipsis: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly popperOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
readonly ellipsisIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
readonly popperEffect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
readonly popperClass: StringConstructor;
readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
onSelect?: ((index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => any) | undefined;
onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
onClose?: ((index: string, indexPath: string[]) => any) | undefined;
}, {
readonly ellipsis: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly collapse: boolean;
readonly mode: EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showTimeout: number;
readonly hideTimeout: number;
readonly defaultActive: string;
readonly defaultOpeneds: string[];
readonly menuTrigger: EpPropMergeType<StringConstructor, "click" | "hover", unknown>;
readonly collapseTransition: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly popperOffset: number;
readonly ellipsisIcon: EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
readonly popperEffect: EpPropMergeType<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown>;
readonly uniqueOpened: boolean;
readonly router: boolean;
readonly closeOnClickOutside: boolean;
}>;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_3: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_4: DefineComponent<    {
readonly index: {
readonly type: PropType<string>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly showTimeout: NumberConstructor;
readonly hideTimeout: NumberConstructor;
readonly popperClass: StringConstructor;
readonly disabled: BooleanConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly popperOffset: NumberConstructor;
readonly expandCloseIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandOpenIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly collapseCloseIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly collapseOpenIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
readonly index: {
readonly type: PropType<string>;
readonly required: true;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly showTimeout: NumberConstructor;
readonly hideTimeout: NumberConstructor;
readonly popperClass: StringConstructor;
readonly disabled: BooleanConstructor;
readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
readonly popperOffset: NumberConstructor;
readonly expandCloseIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly expandOpenIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly collapseCloseIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly collapseOpenIcon: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>>, {
readonly disabled: boolean;
readonly teleported: EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;

export declare const MENU_INJECTION_KEY = "rootMenu";

export declare type MenuEmits = typeof menuEmits;

export declare const menuEmits: {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure>) => boolean;
};

export declare type MenuInstance = InstanceType<typeof _default> & {
    open: (index: string) => void;
    close: (index: string) => void;
    handleResize: () => void;
    updateActiveIndex: (index: string) => void;
};

export declare interface MenuItemClicked {
    index: string;
    indexPath: string[];
    route?: RouteLocationRaw;
}

export declare type MenuItemEmits = typeof menuItemEmits;

export declare const menuItemEmits: {
    click: (item: MenuItemRegistered) => boolean;
};

export declare type MenuItemGroupInstance = InstanceType<typeof _default_3> & unknown;

export declare type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;

export declare const menuItemGroupProps: {
    /**
     * @description group title
     */
    readonly title: StringConstructor;
};

export declare type MenuItemInstance = InstanceType<typeof _default_2> & unknown;

export declare type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;

export declare const menuItemProps: {
    readonly index: EpPropFinalized<(new (...args: any[]) => string) | (() => string | null) | ((new (...args: any[]) => string) | (() => string | null))[], unknown, unknown, null, boolean>;
    readonly route: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | ((new (...args: any[]) => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) | (() => string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};

export declare interface MenuItemRegistered {
    index: string;
    indexPath: string[];
    active: boolean;
}

export declare type MenuProps = ExtractPropTypes<typeof menuProps>;

export declare const menuProps: {
    readonly mode: EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "vertical", boolean>;
    readonly defaultActive: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly defaultOpeneds: EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly closeOnClickOutside: BooleanConstructor;
    readonly collapseTransition: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly ellipsis: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popperOffset: EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly ellipsisIcon: EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly popperEffect: EpPropFinalized<(new (...args: any[]) => string) | (() => PopperEffect) | ((new (...args: any[]) => string) | (() => PopperEffect))[], unknown, unknown, "dark", boolean>;
    readonly popperClass: StringConstructor;
    readonly showTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly hideTimeout: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

export declare interface MenuProvider {
    openedMenus: string[];
    items: Record<string, MenuItemRegistered>;
    subMenus: Record<string, MenuItemRegistered>;
    activeIndex?: string;
    isMenuPopup: boolean;
    props: MenuProps;
    addMenuItem: (item: MenuItemRegistered) => void;
    removeMenuItem: (item: MenuItemRegistered) => void;
    addSubMenu: (item: MenuItemRegistered) => void;
    removeSubMenu: (item: MenuItemRegistered) => void;
    openMenu: (index: string, indexPath: string[]) => void;
    closeMenu: (index: string, indexPath: string[]) => void;
    handleMenuItemClick: (item: MenuItemClicked) => void;
    handleSubMenuClick: (subMenu: MenuItemRegistered) => void;
}

export declare const SUB_MENU_INJECTION_KEY = "subMenu:";

export declare type SubMenuInstance = InstanceType<typeof _default_4> & unknown;

export declare type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;

export declare const subMenuProps: {
    readonly index: {
        readonly type: PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showTimeout: NumberConstructor;
    readonly hideTimeout: NumberConstructor;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly teleported: EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly popperOffset: NumberConstructor;
    readonly expandCloseIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly expandOpenIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapseCloseIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapseOpenIcon: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare interface SubMenuProvider {
    addSubMenu: (item: MenuItemRegistered) => void;
    removeSubMenu: (item: MenuItemRegistered) => void;
    handleMouseleave?: (deepDispatch: boolean) => void;
    mouseInChild: Ref<boolean>;
    level: number;
}

declare const UxMenu: SFCWithInstall<typeof _default> & {
    MenuItem: typeof _default_2;
    MenuItemGroup: typeof _default_3;
    SubMenu: typeof _default_4;
};
export { UxMenu }
export default UxMenu;

export declare const UxMenuItem: SFCWithInstall<typeof _default_2>;

export declare const UxMenuItemGroup: SFCWithInstall<typeof _default_3>;

export declare const UxSubMenu: SFCWithInstall<typeof _default_4>;

export { }
