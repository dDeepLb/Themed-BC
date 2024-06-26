declare global {
  let bcModSdk: import('./bcmodsdk').ModSDKGlobalAPI;
}

declare interface Window {
  ThemedLoaded: boolean;
  RibbonMenuMods: string[];
}

declare const serverUrl: string;

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
