export const addLiveSource: (name: string, source: string, scope?: any) => any;
export default addLiveSource;
// export const _default: any;

interface CustomOptions {
    theme?: any;
    presets?: any;
    plugins?: any;
}
export const setOptions: (customOptions: CustomOptions) => void;
export const withLiveEdit: (source: string, scope?: any) => any;
export const withLiveEditScope: (scope: any) => any;

export interface Story {
    addLiveSource: (name: string, source: string, scope?: any) => this;
}

export interface LivePreviewProps {
    scope?: {
        [string]: any;
    };
    channel: any;
    code: string;
}

export interface LivePreviewState {
    code: string;
}

export const LivePreview: React.ComponentType<LivePreviewProps>;
