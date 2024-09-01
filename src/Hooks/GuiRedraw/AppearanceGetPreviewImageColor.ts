import { doRedraw } from '../../Modules/GuiRedraw';
import { hookFunction, HookPriority, ModuleCategory } from '../../Utilities/SDK';

const itemPreviewColors = {
  base: ['%background', '%hover'],
  worn: ['lightblue', 'lightskyblue'],
  unusable: ['gray', 'gray'],
  crafted: ['#FFFFAF', 'palegoldenrod'],
  blocked: ['#b81010', 'red'],
  limited: ['orange', '#fcae55'],
  allowed: ['green', 'limegreen'],
};

export function hookAppearanceGetPreviewImageColor() {
  hookFunction(
    'AppearanceGetPreviewImageColor',
    HookPriority.Observe,
    (args: Parameters<typeof AppearanceGetPreviewImageColor>, next: (args: Parameters<typeof AppearanceGetPreviewImageColor>) => ReturnType<typeof AppearanceGetPreviewImageColor>) => {
      if (!doRedraw()) return next(args);

      const [c, item, hover] = args;

      if (DialogMenuMode === 'permissions' && c.IsPlayer()) {
        let permission = 'allowed';
        if (InventoryIsPermissionBlocked(c, item.Asset.Name, item.Asset.Group.Name)) permission = 'blocked';
        else if (InventoryIsPermissionLimited(c, item.Asset.Name, item.Asset.Group.Name)) permission = 'limited';
        return item.Worn ? 'gray' : itemPreviewColors[permission][hover ? 1 : 0];
      } else {
        const unusable = item.SortOrder.startsWith(DialogSortOrder.Unusable.toString())
          || item.SortOrder.startsWith(DialogSortOrder.TargetFavoriteUnusable.toString())
          || item.SortOrder.startsWith(DialogSortOrder.PlayerFavoriteUnusable.toString());
        const blocked = item.SortOrder.startsWith(DialogSortOrder.Blocked.toString());
        const limited = item.Icons.includes('AllowedLimited');
        if (blocked) return itemPreviewColors['blocked'][hover ? 1 : 0];
        else if (item.Worn) return itemPreviewColors['worn'][hover ? 1 : 0];
        else if ((item.Craft != null) && (item.Craft.Name != null)) return itemPreviewColors['crafted'][hover ? 1 : 0];
        else if (unusable) return itemPreviewColors['unusable'][hover ? 1 : 0];
        else if (limited) return itemPreviewColors['limited'][hover ? 1 : 0];
        else return itemPreviewColors['base'][hover ? 1 : 0];
      }
    },
    ModuleCategory.GuiRedraw
  );
}
