import { BaseModule } from "../Base/BaseModule";
import { PlayerStorage } from "../Utilities/Data";
import { ModuleCategory, hookFunction } from "../Utilities/SDK";
import markdownIt from "markdown-it";
// import { fromHighlighter } from "markdown-it-shikiji/core";
// import { getHighlighterCore } from "shikiji/core";
// import { getWasmInlined } from "shikiji/wasm";

const md = markdownIt({ linkify: true, typographer: true });

export class MarkdownModule extends BaseModule {
  Load(): void {
    //MarkdownModule.loadHighlighter();

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

            //let clearedMessage = ChatRoomHTMLEntities(msg);

            let markdownedMessage = MarkdownModule.doMarkdown(msg);

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

  // static async loadHighlighter() {
  //   const highlighter = await getHighlighterCore({
  //     themes: [import("shikiji/themes/dark-plus.mjs")],
  //     langs: [import("shikiji/langs/javascript.mjs")],
  //     loadWasm: getWasmInlined
  //   });

  //   md.use(fromHighlighter(highlighter, { theme: "dark-plus" }));
  // }

  // private static overrideMarked() {
  //   // Override function
  //   const tokenizer = {
  //     code(src: string) {
  //       const match = src.match(/^\$+([^\$\n]+?)\$+/);
  //       if (match) {
  //         return {
  //           type: "code",
  //           raw: match[0],
  //           text: match[1].trim()
  //         };
  //       }

  //       // return false to use original codespan tokenizer
  //       return false;
  //     }
  //   };

  //   marked.use({ tokenizer });
  // }

  private static doMarkdown(msg: string) {
    return md.render(msg);
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
