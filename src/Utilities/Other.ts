export function sendLocalSmart(id: string, message: string, timeoutInSeconds?: number) {
  const div = document.createElement("div");
  div.id = id;
  div.setAttribute("class", "ChatMessage ThemedMessage");
  div.setAttribute("data-time", ChatRoomCurrentTime());
  div.setAttribute("data-sender", Player?.MemberNumber + "");

  div.innerHTML =
    message.replaceAll("\n\t", "") +
    /*html*/ `<br><a class="ThemedText" onClick='document.getElementById("${id}").remove();'><b>Close (Click)</b></a>`;

  ChatRoomAppendChat(div);
  if (!timeoutInSeconds) return;
  setTimeout(() => div?.remove(), timeoutInSeconds * 1000);
}

export function isValidURL(urlString: string) {
  try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
}
