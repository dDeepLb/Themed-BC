import { ColorsSettingsModel } from '../Models/Colors';
import { ColorsModule } from './Colors';
import { GlobalSettingsModel } from '../Models/Global';
import { BaseModule, getModule, getText, HookPriority, sendActionMessage as messageSendAction, sendLocalMessage as messageSendLocal, modStorage } from 'bc-deeplib/deeplib';
import { sdk } from '../Themed';
import { useLgcModal } from '../Utilities/Other';

type ThemedMessageDictionaryEntry = {
  ThemedMessage: ThemedMessageModel;
};

interface ThemedMessageModel {
  Theme: ColorsSettingsModel;
  ThemeVersion: string;
}

export class ShareModule extends BaseModule {
  load(): void {
    sdk.hookFunction('ChatRoomMessageProcessHidden', HookPriority.Observe, (args, next) => {
      const [data, sender] = args;

      if (data.Content !== 'ThemedTheme') return next(args);
      if (!sender.MemberNumber) return next(args);

      const senderName = CharacterNickname(sender);
      const prompt = getText('modal.prompt.share')
        .replace('$Sender', `${senderName} (${data.Sender})`)
        .replace('$SenderPronoun', CharacterPronoun(sender, 'Possessive', false));

      const message = document.createElement('div');
      message.id = sender.MemberNumber.toString();
      message.setAttribute('class', 'themed-chat-modal');
      message.setAttribute('data-time', ChatRoomCurrentTime());
      message.setAttribute('data-sender', sender.MemberNumber + '');

      const text = document.createElement('div');
      const button = document.createElement('div');

      text.innerHTML = getText('modal.prompt.chat_share_notification').replace('$Sender', `${senderName} (${data.Sender})`);
      button.innerHTML = getText('modal.button.show');

      text.classList.add('modal-prompt');
      button.classList.add('modal-button');

      if (!data.Dictionary) return next(args);

      const messageData = (data.Dictionary[0] as unknown as ThemedMessageDictionaryEntry)['ThemedMessage'];

      const theme = messageData.Theme;
      const version = messageData.ThemeVersion;
      const settings = Player.Themed.GlobalModule;

      button.addEventListener('click', () => {
        if (!version || version !== Player.Themed.Version) {
          messageSendLocal('theme-not-up-to-date', `Theme sent by ${senderName} is not up-to-date!`);
          return;
        }

        useLgcModal(
          prompt,
          () => {
            this.acceptShare(theme, settings);
          },
          () => { }
        );
      });

      message.append(text, button);

      ChatRoomAppendChat(message);
      ElementScrollToEnd('TextAreaChatLog');

      return next(args);
    });
  }

  acceptShare(data: ColorsSettingsModel, settings: GlobalSettingsModel): void {
    Player.Themed.ColorsModule = data;
    Player.Themed.GlobalModule.doUseAdvancedColoring = settings.doUseAdvancedColoring;
    modStorage.save();

    getModule<ColorsModule>('ColorsModule').reloadTheme();
  }

  share(target: number | undefined): void {
    messageSendLocal('theme-share', 'Shared theme with ' + (target ? CharacterNickname(ChatRoomCharacter.find((c) => c.MemberNumber == target) as Character) : 'everyone'));
    messageSendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, 'Possessive', false)} Themed theme!`, target);

    const packet = <ServerChatRoomMessage><unknown>{
      Type: 'Hidden',
      Content: 'ThemedTheme',
      Sender: Player.MemberNumber,
      ...(target ? { Target: target } : {}),
      Dictionary: [<ThemedMessageDictionaryEntry>{
        ThemedMessage: {
          ThemeVersion: Player.Themed.Version,
          Theme: Player.Themed.ColorsModule,
          Settings: Player.Themed.GlobalModule,
        }
      }]
    };

    ServerSend('ChatRoomChat', packet);
  }
}
