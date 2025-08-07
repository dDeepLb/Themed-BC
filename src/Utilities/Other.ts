import { getText } from 'bc-deeplib/deeplib';

export function useLgcModal(prompt: string, acceptCallbackFn: () => void, cancelCallbackFn: () => void) {
  if (document.getElementById('themed-modal')) return false;

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

export function camelToKebabCase(str: string) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}
