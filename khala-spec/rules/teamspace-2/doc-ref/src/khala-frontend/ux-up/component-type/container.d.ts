import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
/**
* @description layout direction for child elements
*/
direction: {
type: StringConstructor;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description layout direction for child elements
*/
direction: {
type: StringConstructor;
};
}>>, {}>;

declare const __VLS_component_2: DefineComponent<    {
/**
* @description width of the side section
*/
width: {
type: StringConstructor;
default: null;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description width of the side section
*/
width: {
type: StringConstructor;
default: null;
};
}>>, {
width: string;
}>;

declare const __VLS_component_3: DefineComponent<    {
/**
* @description height of the footer
*/
height: {
type: StringConstructor;
default: null;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description height of the footer
*/
height: {
type: StringConstructor;
default: null;
};
}>>, {
height: string;
}>;

declare const __VLS_component_4: DefineComponent<    {
/**
* @description height of the header
*/
height: {
type: StringConstructor;
default: null;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* @description height of the header
*/
height: {
type: StringConstructor;
default: null;
};
}>>, {
height: string;
}>;

declare const __VLS_component_5: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
};

declare function __VLS_template_3(): {
    default?(_: {}): any;
};

declare function __VLS_template_4(): {
    default?(_: {}): any;
};

declare function __VLS_template_5(): {
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

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type AsideInstance = InstanceType<typeof _default_2> & unknown;

export declare type ContainerInstance = InstanceType<typeof _default> & unknown;

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_3: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

declare const _default_4: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, ReturnType<typeof __VLS_template_4>>;

declare const _default_5: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, ReturnType<typeof __VLS_template_5>>;

export declare type FooterInstance = InstanceType<typeof _default_3> & unknown;

export declare type HeaderInstance = InstanceType<typeof _default_4> & unknown;

export declare type MainInstance = InstanceType<typeof _default_5> & unknown;

export declare const UxAside: SFCWithInstall<typeof _default_2>;

declare const UxContainer: SFCWithInstall<typeof _default> & {
    Aside: typeof _default_2;
    Footer: typeof _default_3;
    Header: typeof _default_4;
    Main: typeof _default_5;
};
export { UxContainer }
export default UxContainer;

export declare const UxFooter: SFCWithInstall<typeof _default_3>;

export declare const UxHeader: SFCWithInstall<typeof _default_4>;

export declare const UxMain: SFCWithInstall<typeof _default_5>;

export { }
