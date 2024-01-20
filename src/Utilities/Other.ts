import { getText } from '../Translation';

export function sendLocalSmart(id: string, message: string, timeoutInSeconds?: number) {
  const div = document.createElement('div');
  div.id = id;
  div.setAttribute('class', 'ChatMessage ThemedMessage');
  div.setAttribute('data-time', ChatRoomCurrentTime());
  div.setAttribute('data-sender', Player?.MemberNumber + '');

  div.innerHTML =
    message.replaceAll('\n\t', '') +
    /*html*/ `<br><a class="ThemedText" onClick='document.getElementById("${id}").remove();'><b>Close (Click)</b></a>`;

  ChatRoomAppendChat(div);
  if (!timeoutInSeconds) return;
  setTimeout(() => div?.remove(), timeoutInSeconds * 1000);
}

export function sendAction(msg: string) {
  ServerSend('ChatRoomChat', {
    Content: 'Beep',
    Type: 'Action',
    Dictionary: [
      // EN
      { Tag: 'Beep', Text: 'msg' },
      // CN
      { Tag: '发送私聊', Text: 'msg' },
      // DE
      { Tag: 'Biep', Text: 'msg' },
      // FR
      { Tag: 'Sonner', Text: 'msg' },
      // Message itself
      { Tag: 'msg', Text: msg }
    ]
  });
}

export function useLgcModal(prompt: string, acceptCallbackFn: () => void, cancelCallbackFn: () => void) {
  if (!!document.getElementById('themed-modal')) return false;

  const modal = document.createElement('div');
  const modalTitle = document.createElement('div');
  const modalButtons = document.createElement('div');
  const modalAcceptButton = document.createElement('div');
  const modalCancelButton = document.createElement('div');

  modal.classList.add('themed-modal');
  modalTitle.id = 'modal-prompt';
  modalButtons.id = 'modal-buttons';
  modalAcceptButton.id = 'modal-button-accept';
  modalCancelButton.id = 'modal-button-cancel';

  modalAcceptButton.classList.add('modal-button');
  modalCancelButton.classList.add('modal-button');

  modalTitle.innerHTML = prompt;
  modalAcceptButton.innerText = getText('modal.button.accept');
  modalCancelButton.innerText = getText('modal.button.cancel');

  modalAcceptButton.addEventListener('click', () => {
    acceptCallbackFn();

    modal.remove();
  });

  modalCancelButton.addEventListener('click', () => {
    cancelCallbackFn();

    modal.remove();
  });

  modalButtons.append(modalAcceptButton, modalCancelButton);
  modal.append(modalTitle, modalButtons);

  document.body.append(modal);
}
