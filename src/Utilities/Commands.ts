import { Style } from "./Style";

export function loadCommands() {
  CommandCombine([
    {
      Tag: "reloadstyles",
      Action: () => {
        Style.reloadAll();
      }
    },
    {
      Tag: "ejectall",
      Action: () => {
        Style.ejectAll();
      }
    },
    {
      Tag: "injectall",
      Action: () => {
        Style.injectAll();
      }
    }
  ]);
}
