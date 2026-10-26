## ColorPickerPanel的API
### Attributes

|Name|Description|Type|Default|
|------------------------|-----------------|------------|-------|
|model-value/v-model|bindingvalue|string|—|
|border|whetherthecolorpickerpanelisbordered|boolean|true|
|disabled|whethertodisablethecolorpicker|boolean|false|
|show-alpha|whethertodisplaythealphaslider|boolean|false|
|color-format|colorformatofv-model|'hsl'\|'hsv'\|'hex'\|'rgb'\|'hex'(whenshow-alphaisfalse)\|'rgb'(whenshow-alphaistrue)|—|
|predefine|predefinedcoloroptions|array`string[]`|—|
|validate-event|whethertotriggerformvalidation|boolean|true|

### Slots

|Name|Description|
|------|--------|
|footer|contenttoappendaftertheInput|

### Exposes

|Name|Description|Type|
|----------------|---------------------|------------------------|
|color|currentcolorobject|Color|
|inputRef|custominputref|InputInstance|
|update|updatesubcomponents|()=>void|
