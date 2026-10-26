import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const OnlyChild: DefineComponent<    {}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | null, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;
export { OnlyChild }
export { OnlyChild as UxOnlyChild }

export declare type OnlyChildExpose = {
    forwardRef: Ref<HTMLElement>;
};

export { }
