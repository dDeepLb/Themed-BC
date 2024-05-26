import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { ColorsSettingsModel } from '../Models/Colors';
import { getText } from '../Translation';
import { sendAction, useLgcModal } from '../Utilities/Other';
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

      const theme = data.Dictionary[0]['ThemedMessage'].Theme;

      button.addEventListener('click', () => {
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

  acceptShare(data: {}): void {
    Player.Themed.ColorsModule = <ColorsSettingsModel>data;

    getModule<ColorsModule>('ColorsModule').reloadTheme();
  }

  share(): void {
    sendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, 'Possessive', false)} Themed theme!`);

    const packet = <ServerChatRoomMessage><unknown>{
      Type: 'Hidden',
      Content: 'ThemedTheme',
      Sender: Player.MemberNumber,
      Dictionary: [<ThemedMessageDictionaryEntry>{ ThemedMessage: { Theme: Player.Themed.ColorsModule } }]
    };

    ServerSend('ChatRoomChat', packet);
  }
}
