import { _Style } from "./Style";

export function loadCommands() {
  CommandCombine([
    {
      Tag: "reloadstyles",
      Action: () => {
        _Style.reloadAll();
      }
    },
    {
      Tag: "ejectall",
      Action: () => {
        _Style.ejectAll();
      }
    },
    {
      Tag: "injectall",
      Action: () => {
        _Style.injectAll();
      }
    }
  ]);
}
