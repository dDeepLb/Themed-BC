declare global {
  let bcModSdk: import('./bcmodsdk').ModSDKGlobalAPI;
}

declare interface Window {
  ThemedLoaded?: boolean;
  ThemedLocalData?: import('../src/Models/local').LocalSettingsModel
}

declare const PUBLIC_URL: string;
declare const MOD_VERSION: string; 
declare const LAST_COMMIT_HASH: string; 
declare const VERSION_HASH: string; 
declare const IS_DEVEL: boolean; 

declare module '*.html' {
  const value: string;
  export = value;
}

declare module '*.css' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare const BCT_API: {
  HintBackColor: string;
  HintBorderColor: string;
  HintForeColor: string;
};
