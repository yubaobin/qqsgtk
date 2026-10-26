import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly image: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly imageSize: NumberConstructor;
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly image: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly imageSize: NumberConstructor;
readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}>>, {
readonly image: string;
readonly description: string;
}>;

declare function __VLS_template(): {
    image?(_: {}): any;
    description?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare type EmptyInstance = InstanceType<typeof _default> & unknown;

export declare type EmptyProps = ExtractPropTypes<typeof emptyProps>;

export declare const emptyProps: {
    readonly image: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly imageSize: NumberConstructor;
    readonly description: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
};

declare const UxEmpty: SFCWithInstall<typeof _default>;
export { UxEmpty }
export default UxEmpty;

export { }
