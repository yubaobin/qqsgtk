import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<any, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<any>, {} | {
[x: string]: any;
}>;

declare const UxTreeSelect: SFCWithInstall<typeof _default>;
export { UxTreeSelect }
export default UxTreeSelect;

export { }
