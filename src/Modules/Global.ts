import { BaseModule } from '../Base/BaseModule';
import { Subscreen } from '../Base/SettingDefinitions';
import { GlobalSettingsModel } from '../Models/Global';
import { GuiGlobal } from '../Screens/Global';
import { changeModColors } from '../Utilities/Integration';
import { mergeMatchingProperties } from '../Utilities/Other';
import { hookFunction, HookPriority, ModuleCategory } from '../Utilities/SDK';

export class GlobalModule extends BaseModule {
  private static transparentCharacters: number[] = [];

  get settingsScreen(): Subscreen | null {
    return GuiGlobal;
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings() {
    return <GlobalSettingsModel>{
      themedEnabled: true,
      doVanillaGuiOverhaul: true,
      doUseAdvancedColoring: false,
      doShowLocaleTime: true,
      doIndicateCharacterAbsence: true,
      doShowNewVersionMessage: true
    };
  }

  Load(): void {
    this.settings = mergeMatchingProperties(this.defaultSettings, this.settings);
    changeModColors();

    hookFunction(
      'ChatRoomCurrentTime',
      HookPriority.Observe,
      (args, next) => {
        if (!this.settings.doShowLocaleTime) return next(args);

        const currentTime = new Date(Date.now());

        return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      },
      ModuleCategory.Global
    );

    hookFunction(
      'DialogDraw',
      HookPriority.Observe,
      (args: Parameters<typeof DialogDraw>, next: (args: Parameters<typeof DialogDraw>) => ReturnType<typeof DialogDraw>) => {
        if (!this.settings.themedEnabled) return next(args);
        if (!this.settings.doIndicateCharacterAbsence) return next(args);
        if (!(CurrentScreen == 'ChatRoom')) return next(args);
        if (!CurrentCharacter) return next(args);

        next(args);

        if (CurrentCharacter === null) return;
        if (CurrentCharacter.IsPlayer()) return;
        if (ChatRoomCharacter.includes(CurrentCharacter)) {
          if (GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
            CurrentCharacter.Canvas.getContext('2d').globalAlpha = 1.0;
            CurrentCharacter.CanvasBlink.getContext('2d').globalAlpha = 1.0;
            CharacterAppearanceBuildCanvas(CurrentCharacter);
            GlobalModule.transparentCharacters.filter((x) => x !== CurrentCharacter.MemberNumber);
          }
        } else {
          MainCanvas.save();
          MainCanvas.globalCompositeOperation = 'multiply';
          MainCanvas.beginPath();
          MainCanvas.fillStyle = 'gray';
          MainCanvas.fillRect(500, 0, 500, 1000);
          MainCanvas.fill();
          MainCanvas.restore();

          if (!GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
            CurrentCharacter.Canvas.getContext('2d').globalAlpha = 0.2;
            CurrentCharacter.CanvasBlink.getContext('2d').globalAlpha = 0.2;
            CharacterAppearanceBuildCanvas(CurrentCharacter);
            GlobalModule.transparentCharacters.push(CurrentCharacter.MemberNumber);
          }

          DrawImageEx('Icons/Warning.svg', MainCanvas, 500 + 125, 125, { Width: 250, Height: 250, HexColor: '#ff0000', FullAlpha: true });
        }
      },
      ModuleCategory.Global
    );

    hookFunction(
      'AppearanceRun',
      HookPriority.Observe,
      (args: Parameters<typeof AppearanceRun>, next: (args: Parameters<typeof AppearanceRun>) => ReturnType<typeof AppearanceRun>) => {
        if (!this.settings.themedEnabled) return next(args);
        if (!this.settings.doIndicateCharacterAbsence) return next(args);
        if (!(CurrentScreen == 'Appearance')) return next(args);
        if (!CharacterAppearanceSelection) return next(args);

        next(args);

        if (CharacterAppearanceSelection === null) return;
        if (CharacterAppearanceSelection.IsPlayer()) return;
        if (ChatRoomCharacter.includes(CharacterAppearanceSelection)) {
          if (GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
            CharacterAppearanceSelection.Canvas.getContext('2d').globalAlpha = 1.0;
            CharacterAppearanceSelection.CanvasBlink.getContext('2d').globalAlpha = 1.0;
            CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
            GlobalModule.transparentCharacters.filter((x) => x !== CharacterAppearanceSelection.MemberNumber);
          }
        } else {
          MainCanvas.save();
          MainCanvas.globalCompositeOperation = 'multiply';
          MainCanvas.beginPath();
          MainCanvas.fillStyle = 'gray';
          MainCanvas.fillRect(660, 0, 500, 1000);
          MainCanvas.fill();
          MainCanvas.restore();

          if (!GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
            CharacterAppearanceSelection.Canvas.getContext('2d').globalAlpha = 0.2;
            CharacterAppearanceSelection.CanvasBlink.getContext('2d').globalAlpha = 0.2;
            CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
            GlobalModule.transparentCharacters.push(CharacterAppearanceSelection.MemberNumber);
          }

          DrawImageEx('Icons/Warning.svg', MainCanvas, 660 + 125, 125, { Width: 250, Height: 250, HexColor: '#ff0000' });
        }
      },
      ModuleCategory.Global
    );

    hookFunction(
      'ChatRoomSync',
      HookPriority.Observe,
      (args: Parameters<typeof ChatRoomSync>, next: (args: Parameters<typeof ChatRoomSync>) => ReturnType<typeof ChatRoomSync>) => {
        Character.filter(character => GlobalModule.transparentCharacters?.includes(character.MemberNumber));

        return next(args);
      },
      ModuleCategory.Global
    );
  }

  Run(): void { }
}
