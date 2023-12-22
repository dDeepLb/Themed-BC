import { BaseModule } from "../Base/BaseModule";
import { PlayerStorage } from "../Utilities/Data";
import { isValidURL } from "../Utilities/Other";
import { HookPriority, ModuleCategory, hookFunction } from "../Utilities/SDK";
import { GlobalModule } from "./Global";

export class MarkdownModule extends BaseModule {
  Load(): void {
    hookFunction(
      "ChatRoomMessageDisplay",
      -1,
      (args, next) => {
        if (!PlayerStorage().GlobalModule.doUseChatSpecialStyling) return next(args);

        let data: ServerChatRoomMessage = args[0];
        let msg: string = args[1];
        let senderCharacter: Character = args[2];
        let metadata: IChatRoomMessageMetadata = args[3];

        // Censored words are filtered out, ¶¶¶ indicates that we must not display anything on screen
        msg = CommonCensor(msg);
        if (msg == "¶¶¶") return;

        // Prepares the HTML tags
        switch (data.Type) {
          case "Chat":
          case "Whisper": {
            let senderTag = '<span class="ChatMessageName" style="color:' + (senderCharacter.LabelColor || "gray");
            if (data.Type == "Whisper") senderTag += "; font-style: italic";
            senderTag += ';">';
            senderTag += metadata.senderName;
            senderTag += ":</span> ";

            let clearedMessage = ChatRoomHTMLEntities(msg);

            let markdownedMessage = MarkdownModule.doMarkdown(clearedMessage);

            msg = senderTag + markdownedMessage;
            break;
          }

          default:
            return next(args);
        }

        msg = msg.replaceAll("\n", "<br>");

        // Adds the message and scrolls down unless the user has scrolled up
        var div = document.createElement("div");
        div.setAttribute("class", "ChatMessage ChatMessage" + data.Type);
        div.setAttribute("data-time", ChatRoomCurrentTime());
        div.setAttribute("data-sender", data.Sender);
        div.innerHTML = msg;

        //FBC reply
        if (data.Type === "Whisper") {
          let repl = document.createElement("a");
          repl.href = "#";
          repl.onclick = (e) => {
            e.preventDefault();
            ElementValue("InputChat", `/w ${senderCharacter.MemberNumber} ${ElementValue("InputChat").replace(/^\/(beep|w) \S+ ?/u, "")}`);
            window["InputChat"].focus();
          };
          repl.classList.add("bce-button");
          repl.textContent = "↩️";
          div.prepend(repl);
        }

        if (typeof data.Timeout === "number" && data.Timeout > 0) setTimeout(() => div.remove(), data.Timeout);

        // Returns the focus on the chat box
        ChatRoomAppendChat(div);
      },
      ModuleCategory.Markdown
    );
  }

  Run(): void {}

  static doMarkdown(msg: string) {
    let newMsg: string = msg;

    let codeRegex = /`(.*?)`/g;
    let codeMatch = Array.from(msg.matchAll(codeRegex));

    if (codeMatch.length > 0) {
      for (const match of codeMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageCode">${matchText}</span>`);
      }
    }

    let codeBlockRegex = /```([\s\S]+?)```/g;
    let codeBlockMatch = Array.from(msg.matchAll(codeBlockRegex));

    if (codeBlockMatch.length > 0) {
      for (const match of codeBlockMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageCode">${matchText}</span>`);
      }
    }

    let emoteRegex = /\*(.*?)\*/g;
    let emoteMatch = Array.from(newMsg.matchAll(emoteRegex));

    if (emoteMatch.length > 0) {
      for (const match of emoteMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="ChatMessageEmote">* ${matchText} *</span>`);
      }
    }

    let boldRegex = /\*\*(.*?)\*\*/g;
    let boldMatch = Array.from(newMsg.matchAll(boldRegex));

    if (boldMatch.length > 0) {
      for (const match of boldMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageBold">${matchText}</span>`);
      }
    }

    let italicRegex = /\_(.*?)\_/g;
    let italicMatch = Array.from(newMsg.matchAll(italicRegex));

    if (italicMatch.length > 0) {
      for (const match of italicMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageItalic">${matchText}</span>`);
      }
    }

    let underlineRegex = /\_\_(.*?)\_\_/g;
    let underlineMatch = Array.from(msg.matchAll(underlineRegex));

    if (underlineMatch.length > 0) {
      for (const match of underlineMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageUnderlined">${matchText}</span>`);
      }
    }

    let strikethroughRegex = /\-\-(.*?)\-\-/g;
    let strikethroughMatch = Array.from(msg.matchAll(strikethroughRegex));

    if (strikethroughMatch.length > 0) {
      for (const match of strikethroughMatch) {
        const [wholeMatch, matchText] = match;

        if (matchText == "") continue;

        newMsg = newMsg.replace(wholeMatch, `<span class="MessageStrikethrough">${matchText}</span>`);
      }
    }

    let inlineLinkRegex = /\[(.*?)\]\((.*?)\)/g;
    let inlineLinkMatch = Array.from(msg.matchAll(inlineLinkRegex));

    if (inlineLinkMatch.length > 0) {
      for (const match of inlineLinkMatch) {
        const [wholeMatch, linkText, linkUrl] = match;

        if (linkText == "" || linkUrl == "") continue;

        if (!isValidURL(linkUrl)) continue;

        newMsg = newMsg.replace(wholeMatch, `<a href="${linkUrl}" title="${linkUrl}" class="MessageLink" target="_blank">${linkText}</a>`);
      }
    }

    let plainLinkRegex = /(.*?)/g;
    let plainLinkMatch = Array.from(msg.matchAll(plainLinkRegex));

    if (plainLinkMatch.length > 0) {
      for (const match of plainLinkMatch) {
        const [wholeMatch, linkUrl] = match;

        if (linkUrl == "") continue;

        if (!isValidURL(linkUrl)) continue;

        newMsg = newMsg.replace(wholeMatch, `<a href="${linkUrl}" title="${linkUrl}" class="MessageLink" target="_blank">${linkUrl}</a>`);
      }
    }

    return `<span>${newMsg}</span>`;
  }
}

/*


    let Regex = /\!(.*?)\!/g;
    let Match = msg.matchAll(Regex);

    if (Match) {
      for (const match of Match) {
        const [, matchText] = match;

        newMsg = newMsg.replace(Regex, `<span class="">${matchText}</span>`);
      }
    }
*/
