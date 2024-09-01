import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { ColorsSettingsModel } from '../Models/Colors';
import { getText } from '../Translation';
import { settingsSave } from '../Utilities/Data';
import { sendAction, sendLocalSmart, useLgcModal } from '../Utilities/Other';
import { HookPriority, hookFunction } from '../Utilities/SDK';
import { ColorsModule } from './Colors';

export class ShareModule extends BaseModule {
  Load(): void {
    hookFunction('ChatRoomMessageProcessHidden', HookPriority.Observe, (args, next) => {
      const data = args[0] as ServerChatRoomMessage;

      if (data.Content !== 'ThemedTheme') return next(args);

      const sender = ChatRoomCharacter.find((c) => c.MemberNumber == data.Sender);
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

      const messageData = data.Dictionary[0]['ThemedMessage'];

      const theme = messageData.Theme;
      const version = messageData.ThemeVersion;

      button.addEventListener('click', () => {
        if (!version || version !== Player.Themed.Version) {
          sendLocalSmart('theme-not-up-to-date', 'Theme sent by ' + senderName + ' is not up-to-date!');
          return;
        }
        
        useLgcModal(
          prompt,
          () => {
            this.acceptShare(theme);
          },
          () => { }
        );
      });

      message.append(text, button);

      ChatRoomAppendChat(message);
      ElementScrollToEnd('TextAreaChatLog');
    });
  }

  acceptShare(data: ColorsSettingsModel): void {
    Player.Themed.ColorsModule = data;
    settingsSave();

    getModule<ColorsModule>('ColorsModule').reloadTheme();
  }

  share(): void {
    sendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, 'Possessive', false)} Themed theme!`);

    const packet = <ServerChatRoomMessage><unknown>{
      Type: 'Hidden',
      Content: 'ThemedTheme',
      Sender: Player.MemberNumber,
      Dictionary: [<ThemedMessageDictionaryEntry>{ ThemedMessage: { ThemeVersion: Player.Themed.Version, Theme: Player.Themed.ColorsModule } }]
    };

    ServerSend('ChatRoomChat', packet);
  }
}
