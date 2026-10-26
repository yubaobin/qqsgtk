import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly visibilityHeight: {
readonly type: NumberConstructor;
readonly default: 200;
};
readonly target: {
readonly type: StringConstructor;
readonly default: "";
};
readonly right: {
readonly type: NumberConstructor;
readonly default: 40;
};
readonly bottom: {
readonly type: NumberConstructor;
readonly default: 40;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly visibilityHeight: {
readonly type: NumberConstructor;
readonly default: 200;
};
readonly target: {
readonly type: StringConstructor;
readonly default: "";
};
readonly right: {
readonly type: NumberConstructor;
readonly default: 40;
};
readonly bottom: {
readonly type: NumberConstructor;
readonly default: 40;
};
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
readonly bottom: number;
readonly right: number;
readonly target: string;
readonly visibilityHeight: number;
}>;

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type BacktopEmits = typeof backtopEmits;

export declare const backtopEmits: {
    click: (evt: MouseEvent) => boolean;
};

export declare type BacktopInstance = InstanceType<typeof _default> & unknown;

export declare type BacktopProps = ExtractPropTypes<typeof backtopProps>;

export declare const backtopProps: {
    /**
     * @description the button will not show until the scroll height reaches this value.
     */
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    /**
     * @description the target to trigger scroll.
     */
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * @description right distance.
     */
    readonly right: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    /**
     * @description bottom distance.
     */
    readonly bottom: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const UxBacktop: SFCWithInstall<typeof _default>;
export { UxBacktop }
export default UxBacktop;

export { }
