import { AllowedComponentProps } from 'vue';
import { Awaitable } from 'ux-up/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EpPropFinalized } from 'ux-up/es/utils';
import { EpPropMergeType } from 'ux-up/es/utils';
import { ExtractPropTypes } from 'vue';
import type { InjectionKey } from 'vue';
import { Mutable } from 'ux-up/es/utils';
import { PropType } from 'vue';
import type { SFCWithInstall } from 'ux-up/es/utils';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<    {
readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly beforeRemove: {
readonly type: PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRemove: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onChange: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onPreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onError: EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
readonly headers: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly multiple: BooleanConstructor;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
readonly drag: BooleanConstructor;
readonly withCredentials: BooleanConstructor;
readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
})[], unknown, unknown, UploadRequestHandler, boolean>;
readonly disabled: BooleanConstructor;
readonly limit: NumberConstructor;
}, {
/** @description cancel upload request */
abort: (file: UploadFile) => void;
/** @description upload the file list manually */
submit: () => void;
/** @description clear the file list  */
clearFiles: (states?: UploadStatus[]) => void;
/** @description select the file manually */
handleStart: (rawFile: UploadRawFile) => void;
/** @description remove the file manually */
handleRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly beforeRemove: {
readonly type: PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly onRemove: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onChange: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onPreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onError: EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
(): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
readonly headers: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly multiple: BooleanConstructor;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
readonly drag: BooleanConstructor;
readonly withCredentials: BooleanConstructor;
readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
})[], unknown, unknown, UploadRequestHandler, boolean>;
readonly disabled: BooleanConstructor;
readonly limit: NumberConstructor;
}>>, {
readonly data: EpPropMergeType<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown>;
readonly disabled: boolean;
readonly drag: boolean;
readonly multiple: boolean;
readonly name: string;
readonly onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
readonly onError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
readonly onProgress: (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
readonly method: string;
readonly action: string;
readonly accept: string;
readonly withCredentials: boolean;
readonly showFileList: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly fileList: UploadUserFile[];
readonly autoUpload: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly listType: EpPropMergeType<StringConstructor, "picture" | "text" | "picture-card", unknown>;
readonly httpRequest: UploadRequestHandler;
readonly beforeUpload: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
readonly onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
readonly onPreview: (uploadFile: UploadFile) => void;
readonly onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
readonly onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
}>;

declare const __VLS_component_2: DefineComponent<    {
readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onRemove: EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
(): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
(): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onStart: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
(): (rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
(): (rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
(): (response: any, rawFile: UploadRawFile) => unknown;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
(): (response: any, rawFile: UploadRawFile) => unknown;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
(): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
(): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onError: EpPropFinalized<(new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
(): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
(): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
readonly headers: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly multiple: BooleanConstructor;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
readonly drag: BooleanConstructor;
readonly withCredentials: BooleanConstructor;
readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
})[], unknown, unknown, UploadRequestHandler, boolean>;
readonly disabled: BooleanConstructor;
readonly limit: NumberConstructor;
}, {
abort: (file?: UploadFile) => void;
upload: (rawFile: UploadRawFile) => Promise<void>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
(): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onRemove: EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
(): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
(): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onStart: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
(): (rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
(): (rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
(): (response: any, rawFile: UploadRawFile) => unknown;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
(): (response: any, rawFile: UploadRawFile) => unknown;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
(): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
(): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onError: EpPropFinalized<(new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
(): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
(): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
(): (files: File[], uploadFiles: UploadUserFile[]) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
readonly headers: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<    {}>, boolean>;
readonly multiple: BooleanConstructor;
readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
readonly drag: BooleanConstructor;
readonly withCredentials: BooleanConstructor;
readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
(): UploadRequestHandler;
new (): any;
readonly prototype: any;
})[], unknown, unknown, UploadRequestHandler, boolean>;
readonly disabled: BooleanConstructor;
readonly limit: NumberConstructor;
}>>, {
readonly data: EpPropMergeType<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown>;
readonly disabled: boolean;
readonly drag: boolean;
readonly multiple: boolean;
readonly name: string;
readonly onError: (err: UploadAjaxError, rawFile: UploadRawFile) => void;
readonly onProgress: (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
readonly method: string;
readonly action: string;
readonly accept: string;
readonly withCredentials: boolean;
readonly showFileList: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly fileList: UploadUserFile[];
readonly autoUpload: EpPropMergeType<BooleanConstructor, unknown, unknown>;
readonly listType: EpPropMergeType<StringConstructor, "picture" | "text" | "picture-card", unknown>;
readonly httpRequest: UploadRequestHandler;
readonly beforeUpload: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
readonly onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
readonly onStart: (rawFile: UploadRawFile) => void;
}>;

declare const __VLS_component_3: DefineComponent<    {
readonly files: EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
readonly disabled: BooleanConstructor;
readonly handlePreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
remove: (file: UploadFile) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly files: EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
readonly disabled: BooleanConstructor;
readonly handlePreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
} | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
(): (uploadFile: UploadFile) => void;
new (): any;
readonly prototype: any;
})[], unknown, unknown, () => void, boolean>;
readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
readonly crossorigin: {
readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
readonly required: false;
readonly validator: ((val: unknown) => boolean) | undefined;
__epPropKey: true;
};
}>> & {
onRemove?: ((file: UploadFile) => any) | undefined;
}, {
readonly disabled: boolean;
readonly listType: EpPropMergeType<StringConstructor, "picture" | "text" | "picture-card", unknown>;
readonly files: UploadFiles;
readonly handlePreview: (uploadFile: UploadFile) => void;
}>;

declare const __VLS_component_4: DefineComponent<    {
readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
file: (file: File[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly disabled: BooleanConstructor;
}>> & {
onFile?: ((file: File[]) => any) | undefined;
}, {
readonly disabled: boolean;
}>;

declare function __VLS_template(): {
    file?(_: {
        file: UploadFile;
        index: number;
    }): any;
    file?(_: {
        file: UploadFile;
        index: number;
    }): any;
    trigger?(_: {}): any;
    trigger?(_: {}): any;
    default?(_: {}): any;
    default?(_: {}): any;
    default?(_: {}): any;
    tip?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
    default?(_: {}): any;
};

declare function __VLS_template_3(): {
    default?(_: {
        file: UploadFile;
        index: number;
    }): any;
    append?(_: {}): any;
};

declare function __VLS_template_4(): {
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

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_3: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

declare const _default_4: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, ReturnType<typeof __VLS_template_4>>;

export declare const genFileId: () => number;

declare class UploadAjaxError extends Error {
    name: string;
    status: number;
    method: string;
    url: string;
    constructor(message: string, status: number, method: string, url: string);
}

export declare const uploadBaseProps: {
    readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    readonly headers: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<{}>, boolean>;
    readonly multiple: BooleanConstructor;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    readonly drag: BooleanConstructor;
    readonly withCredentials: BooleanConstructor;
    readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
    readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, UploadRequestHandler, boolean>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
};

export declare type UploadContentInstance = InstanceType<typeof _default_2> & unknown;

export declare type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>;

export declare const uploadContentProps: {
    readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
    (): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
    (): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onRemove: EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void) | {
    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onStart: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
    (): (rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
    (): (rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
    (): (response: any, rawFile: UploadRawFile) => unknown;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
    (): (response: any, rawFile: UploadRawFile) => unknown;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
    (): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: UploadProgressEvent, rawFile: UploadRawFile) => void) | {
    (): (evt: UploadProgressEvent, rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onError: EpPropFinalized<(new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
    (): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: UploadAjaxError, rawFile: UploadRawFile) => void) | {
    (): (err: UploadAjaxError, rawFile: UploadRawFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
    (): (files: File[], uploadFiles: UploadUserFile[]) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
    (): (files: File[], uploadFiles: UploadUserFile[]) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    readonly headers: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<    {}>, boolean>;
    readonly multiple: BooleanConstructor;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    readonly drag: BooleanConstructor;
    readonly withCredentials: BooleanConstructor;
    readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
    readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, UploadRequestHandler, boolean>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
};

export declare interface UploadContext {
    accept: ComputedRef<string>;
}

export declare const uploadContextKey: InjectionKey<UploadContext>;

export declare type UploadData = Mutable<Record<string, any>>;

export declare type UploadDraggerEmits = typeof uploadDraggerEmits;

export declare const uploadDraggerEmits: {
    file: (file: File[]) => boolean;
};

export declare type UploadDraggerInstance = InstanceType<typeof _default_4> & unknown;

export declare type UploadDraggerProps = ExtractPropTypes<typeof uploadDraggerProps>;

export declare const uploadDraggerProps: {
    readonly disabled: BooleanConstructor;
};

export declare interface UploadFile {
    name: string;
    percentage?: number;
    status: UploadStatus;
    size?: number;
    response?: unknown;
    uid: number;
    url?: string;
    raw?: UploadRawFile;
}

export declare type UploadFiles = UploadFile[];

export declare interface UploadHooks {
    beforeUpload: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    beforeRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>;
    onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onPreview: (uploadFile: UploadFile) => void;
    onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onProgress: (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
}

export declare type UploadInstance = InstanceType<typeof _default> & unknown;

export declare type UploadListEmits = typeof uploadListEmits;

export declare const uploadListEmits: {
    remove: (file: UploadFile) => boolean;
};

export declare type UploadListInstance = InstanceType<typeof _default_3> & unknown;

export declare type UploadListProps = ExtractPropTypes<typeof uploadListProps>;

export declare const uploadListProps: {
    readonly files: EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly handlePreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
    (): (uploadFile: UploadFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
    (): (uploadFile: UploadFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
    readonly crossorigin: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};

export declare const uploadListTypes: readonly ["text", "picture", "picture-card"];

export declare interface UploadProgressEvent extends ProgressEvent {
    percent: number;
}

export declare type UploadProps = ExtractPropTypes<typeof uploadProps>;

export declare const uploadProps: {
    readonly beforeUpload: EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
    (): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>) | {
    (): (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly beforeRemove: {
        readonly type: PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onRemove: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onChange: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onPreview: EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
    (): (uploadFile: UploadFile) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
    (): (uploadFile: UploadFile) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onSuccess: EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onProgress: EpPropFinalized<(new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onError: EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
    (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly onExceed: EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
    (): (files: File[], uploadFiles: UploadUserFile[]) => void;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
    (): (files: File[], uploadFiles: UploadUserFile[]) => void;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    readonly crossorigin: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly action: EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    readonly headers: {
        readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly method: EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    readonly data: EpPropFinalized<(new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | ((new (...args: any[]) => Mutable<Record<string, any>> | Promise<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)) | (() => Awaitable<Mutable<Record<string, any>>> | ((rawFile: UploadRawFile) => Awaitable<UploadData>)))[], unknown, unknown, () => Mutable<{}>, boolean>;
    readonly multiple: BooleanConstructor;
    readonly name: EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    readonly drag: BooleanConstructor;
    readonly withCredentials: BooleanConstructor;
    readonly showFileList: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly accept: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly fileList: EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    readonly autoUpload: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly listType: EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
    readonly httpRequest: EpPropFinalized<(new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    } | ((new (...args: any[]) => UploadRequestHandler) | (() => UploadRequestHandler) | {
    (): UploadRequestHandler;
    new (): any;
    readonly prototype: any;
    })[], unknown, unknown, UploadRequestHandler, boolean>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
};

export declare interface UploadRawFile extends File {
    uid: number;
    isDirectory?: boolean;
}

export declare type UploadRequestHandler = (options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>;

export declare interface UploadRequestOptions {
    action: string;
    method: string;
    data: Record<string, string | Blob | [Blob, string]>;
    filename: string;
    file: UploadRawFile;
    headers: Headers | Record<string, string | number | null | undefined>;
    onError: (evt: UploadAjaxError) => void;
    onProgress: (evt: UploadProgressEvent) => void;
    onSuccess: (response: any) => void;
    withCredentials: boolean;
}

export declare type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail';

export declare type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> & Partial<Pick<UploadFile, 'status' | 'uid'>>;

declare const UxUpload: SFCWithInstall<typeof _default>;
export { UxUpload }
export default UxUpload;

export { }
