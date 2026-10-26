import { AllowedComponentProps } from 'vue';
import { Arrayable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Placement } from 'ux-up';
import { Placement as Placement_2 } from '@popperjs/core';
import { PropType } from 'vue';
import type { Ref } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import type { ToRefs } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => Arrayable<number>) | ((new (...args: any[]) => number | number[]) | (() => Arrayable<number>))[], unknown, unknown, 0, boolean>;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly showInput: BooleanConstructor;
readonly showInputControls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly inputSize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly showStops: BooleanConstructor;
readonly showTooltip: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly formatTooltip: EpPropFinalized<(new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
(): (val: number) => number | string;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
(): (val: number) => number | string;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly disabled: BooleanConstructor;
readonly range: BooleanConstructor;
readonly vertical: BooleanConstructor;
readonly height: StringConstructor;
readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly rangeStartLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly rangeEndLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly formatValueText: EpPropFinalized<(new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
(): (val: number) => string;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
(): (val: number) => string;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly tooltipClass: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "top", boolean>;
readonly marks: {
readonly type: PropType<    {
[x: number]: EpPropMergeType<(new (...args: any[]) => string | {
style: CSSProperties;
label: any;
}) | (() => string | {
style: CSSProperties;
label: any;
}) | ((new (...args: any[]) => string | {
style: CSSProperties;
label: any;
}) | (() => string | {
style: CSSProperties;
label: any;
}))[], unknown, unknown> | undefined;
}>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
onSliderClick: (event: MouseEvent | TouchEvent) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: Arrayable<number>) => void;
change: (value: Arrayable<number>) => void;
input: (value: Arrayable<number>) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly ariaLabel: StringConstructor;
readonly modelValue: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => Arrayable<number>) | ((new (...args: any[]) => number | number[]) | (() => Arrayable<number>))[], unknown, unknown, 0, boolean>;
readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
readonly showInput: BooleanConstructor;
readonly showInputControls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly size: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly inputSize: {
readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly showStops: BooleanConstructor;
readonly showTooltip: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly formatTooltip: EpPropFinalized<(new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
(): (val: number) => number | string;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
(): (val: number) => number | string;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly disabled: BooleanConstructor;
readonly range: BooleanConstructor;
readonly vertical: BooleanConstructor;
readonly height: StringConstructor;
readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
readonly rangeStartLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly rangeEndLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly formatValueText: EpPropFinalized<(new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
(): (val: number) => string;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
(): (val: number) => string;
new (): any;
readonly prototype: any;
})[], unknown, unknown, undefined, boolean>;
readonly tooltipClass: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
readonly placement: EpPropFinalized<StringConstructor, Placement, unknown, "top", boolean>;
readonly marks: {
readonly type: PropType<    {
[x: number]: EpPropMergeType<(new (...args: any[]) => string | {
style: CSSProperties;
label: any;
}) | (() => string | {
style: CSSProperties;
label: any;
}) | ((new (...args: any[]) => string | {
style: CSSProperties;
label: any;
}) | (() => string | {
style: CSSProperties;
label: any;
}))[], unknown, unknown> | undefined;
}>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
"onUpdate:modelValue"?: ((value: Arrayable<number>) => any) | undefined;
onChange?: ((value: Arrayable<number>) => any) | undefined;
onInput?: ((value: Arrayable<number>) => any) | undefined;
}, {
readonly disabled: boolean;
readonly vertical: boolean;
readonly range: boolean;
readonly id: string;
readonly modelValue: EpPropMergeType<(new (...args: any[]) => number | number[]) | (() => Arrayable<number>) | ((new (...args: any[]) => number | number[]) | (() => Arrayable<number>))[], unknown, unknown>;
readonly placement: EpPropMergeType<StringConstructor, Placement, unknown>;
readonly min: number;
readonly max: number;
readonly validateEvent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly persistent: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly debounce: number;
readonly step: number;
readonly showInputControls: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly showTooltip: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly formatTooltip: (val: number) => number | string;
readonly rangeStartLabel: string;
readonly rangeEndLabel: string;
readonly formatValueText: (val: number) => string;
readonly tooltipClass: string;
readonly showInput: boolean;
readonly showStops: boolean;
}>;

export declare interface SliderContext extends ToRefs<SliderProps> {
    precision: ComputedRef<number>;
    sliderSize: Ref<number>;
    emitChange: () => void;
    resetSize: () => void;
    updateDragging: (val: boolean) => void;
}

export declare const sliderContextKey: InjectionKey<SliderContext>;

export declare type SliderEmits = typeof sliderEmits;

export declare const sliderEmits: {
    "update:modelValue": (value: Arrayable<number>) => value is number | number[];
    input: (value: Arrayable<number>) => value is number | number[];
    change: (value: Arrayable<number>) => value is number | number[];
};

export declare interface SliderInitData {
    firstValue: number;
    secondValue: number;
    oldValue?: Arrayable<number>;
    dragging: boolean;
    sliderSize: number;
}

export declare type SliderInstance = InstanceType<typeof _default> & unknown;

declare type SliderMarkerProps = ExtractPropTypes<typeof sliderMarkerProps>;

declare const sliderMarkerProps: {
    readonly mark: EpPropFinalized<(new (...args: any[]) => string | {
    style: CSSProperties;
    label: any;
    }) | (() => string | {
    style: CSSProperties;
    label: any;
    }) | ((new (...args: any[]) => string | {
    style: CSSProperties;
    label: any;
    }) | (() => string | {
    style: CSSProperties;
    label: any;
    }))[], unknown, unknown, undefined, boolean>;
};

declare type SliderMarks = Record<number, string | SliderMarkerProps['mark']>;

export declare type SliderProps = ExtractPropTypes<typeof sliderProps>;

export declare const sliderProps: {
    readonly ariaLabel: StringConstructor;
    readonly modelValue: EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => Arrayable<number>) | ((new (...args: any[]) => number | number[]) | (() => Arrayable<number>))[], unknown, unknown, 0, boolean>;
    readonly id: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly min: EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly max: EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
    readonly step: EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly showInput: BooleanConstructor;
    readonly showInputControls: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inputSize: {
        readonly type: PropType<EpPropMergeType<StringConstructor, "" | "small" | "default" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showStops: BooleanConstructor;
    readonly showTooltip: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly formatTooltip: EpPropFinalized<(new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
    (): (val: number) => number | string;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
    (): (val: number) => number | string;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly disabled: BooleanConstructor;
    readonly range: BooleanConstructor;
    readonly vertical: BooleanConstructor;
    readonly height: StringConstructor;
    readonly debounce: EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly rangeStartLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly rangeEndLabel: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly formatValueText: EpPropFinalized<(new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
    (): (val: number) => string;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
    (): (val: number) => string;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly tooltipClass: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly placement: EpPropFinalized<StringConstructor, Placement_2, unknown, "top", boolean>;
    readonly marks: {
        readonly type: PropType<SliderMarks>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly persistent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};

declare const UxSlider: SFCWithInstall<typeof _default>;
export { UxSlider }
export default UxSlider;

export { }
