import { TextMapKeys, getText } from "../Translation";

export type Setting = Button | Checkbox | Input | Label;

export type Button = {
  type: "button";
  position: number[];
  size: number[];
  label: TextMapKeys;
  color: string;
  image: string;
  disabled: boolean;
  callback(): void;
};

export type Checkbox = {
  type: "checkbox";
  label: TextMapKeys;
  description: TextMapKeys;
  disabled: boolean;
  setting(): any;
  setSetting(val: any): void;
};

export type Input = {
  type: "text" | "number" | "color";
  id: string;
  label: TextMapKeys;
  description: TextMapKeys;
  disabled: boolean;
  setting(): any;
  setSetting(val: any): void;
};

export type Label = {
  type: "label";
  label: TextMapKeys;
  description: TextMapKeys;
  disabled: boolean;
};
