import { BaseModule } from "../Base/BaseModule";
import { colors, _Color } from "../Utilities/Color";
import { PlayerStorage } from "../Utilities/Data";
import { drawRect, _Image, drawButtonRect } from "../Utilities/Drawing";
import { hookFunction, HookPriority, ModuleCategory } from "../Utilities/SDK";

// NOTE LSCG, FBC are having elements that need some effort from their side.

export const doRedraw = () => {
  return PlayerStorage().GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul;
};

const isWhite = (color: string) => _Color.getComputed(color) === "rgb(255, 255, 255)";
const isBlack = (color: string) => _Color.getComputed(color) === "rgb(0, 0, 0)";

export class GuiRedrawModule extends BaseModule {
  Load(): void {
    /* 
    Has impact only on "Sheet" background.
    Just replaces it will rectangle with user selected color
    */
    hookFunction(
      "DrawProcess",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);

        let B = window[CurrentScreen + "Background"];
        if (B != "Sheet") return next(args);

        let time = args[0];

        DrawRect(0, 0, 2000, 1000, colors.mainBackground);

        MainCanvas.filter = "none";

        // Draws the dialog screen or current screen if there's no loaded character
        if (CurrentCharacter != null) DialogDraw();
        else CurrentScreenFunctions.Run(time);

        // Draw Hovering text so they can be above everything else
        DrawProcessHoverElements();

        // Draws beep from online player sent by the server
        ServerDrawBeep();

        // Draw a marker for the controller's position
        if (ControllerIsActive()) {
          DrawRect(MouseX - 5, MouseY - 5, 10, 10, "Red");
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawButton",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);

        const [x, y, width, height, label, color, image, hoveringText, isDisabled] = args;
        const isHovering = MouseHovering(x, y, width, height);

        ControllerAddActiveArea(x, y);

        // Draw the button rectangle
        switch (_Color.getHexComputed(color)) {
          case "#ffffff":
          case "#dddddd":
          case "#eeeeee":
            drawButtonRect(
              x,
              y,
              width,
              height,
              colors.elementBackground,
              colors.elementBackgroundHover,
              colors.elementBackgroundDisabled,
              colors.elementBorder,
              colors.elementBorderHover,
              colors.elementBorder,
              isHovering,
              isDisabled
            );
            break;

          default:
            drawButtonRect(
              x,
              y,
              width,
              height,
              _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 20),
              _Color.darken(_Color.toDarkMode(color, colors.elementBackgroundHover), 30),
              _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 40),
              colors.elementBorder,
              colors.elementBorderHover,
              colors.elementBorder,
              isHovering,
              isDisabled
            );
            break;
        }

        DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, color.text);

        if (image != null && image != "") {
          if (_Image.doDrawImage(image)) _Image.drawColorized(image, x + 2, y + 2, colors.icon, {});
          else DrawImage(image, x + 2, y + 2);
        }

        // Draw the hovering text
        if (hoveringText != null && isHovering) {
          DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawCheckbox",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = "Black", CheckImage = "Icons/Checked.png"] = args;

        DrawText(Text, Left + 100, Top + 33, TextColor, "");
        DrawButton(Left, Top, Width, Height, "", "White", IsChecked ? CheckImage : "", null, Disabled);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawBackNextButton",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        let [Left, Top, Width, Height, Label, Color, Image, BackText, NextText, Disabled, ArrowWidth] = args;

        // Set the widths of the previous/next sections to be colored cyan when hovering over them
        // By default each covers half the width, together covering the whole button
        if (ArrowWidth == null || ArrowWidth > Width / 2) ArrowWidth = Width / 2;
        const LeftSplit = Left + ArrowWidth;
        const RightSplit = Left + Width - ArrowWidth;

        ControllerAddActiveArea(Left, Top);
        ControllerAddActiveArea(Left + Width - ArrowWidth, Top);

        // Draw the button rectangle
        MainCanvas.beginPath();
        MainCanvas.rect(Left, Top, Width, Height);
        MainCanvas.fillStyle = colors.elementBackground;
        MainCanvas.fillRect(Left, Top, Width, Height);
        if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
          MainCanvas.fillStyle = colors.elementBackgroundHover;
          if (MouseX > RightSplit) {
            MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
          } else if (MouseX <= LeftSplit) {
            MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          } else {
            MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
          }
        } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
          // Fill in the arrow regions on mobile
          MainCanvas.fillStyle = colors.elementBackgroundDisabled;
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        }
        MainCanvas.lineWidth = 2;
        MainCanvas.strokeStyle = colors.elementBorder;
        MainCanvas.stroke();
        MainCanvas.closePath();

        // Draw the text or image
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color);

        if (Image != null && Image != "") {
          if (_Image.doDrawImage(Image)) _Image.drawColorized(Image, Left + 2, Top + 2, colors.icon, {});
          else DrawImage(Image, Left + 2, Top + 2);
        }

        ControllerAddActiveArea(Left + Width / 2, Top);

        // Draw the back arrow
        MainCanvas.beginPath();
        MainCanvas.fillStyle = "Black";
        MainCanvas.moveTo(Left + 15, Top + Height / 5);
        MainCanvas.lineTo(Left + 5, Top + Height / 2);
        MainCanvas.lineTo(Left + 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();

        // Draw the next arrow
        MainCanvas.beginPath();
        MainCanvas.fillStyle = "Black";
        MainCanvas.moveTo(Left + Width - 15, Top + Height / 5);
        MainCanvas.lineTo(Left + Width - 5, Top + Height / 2);
        MainCanvas.lineTo(Left + Width - 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();

        // Draw the hovering text on the PC
        if (CommonIsMobile) return;
        if (BackText == null) BackText = () => "MISSING VALUE FOR: BACK TEXT";
        if (NextText == null) NextText = () => "MISSING VALUE FOR: NEXT TEXT";
        if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
          DrawHoverElements.push(() => {
            DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : "");
          });
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawImageResize",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled
        if (!_Image.doDrawImage(args[0])) return next(args); // Skip hook if image shouldn't be colorized

        const [source, x, y, width, height] = args;

        if (!_Image.drawColorized(source, x, y, colors.icon, { newWidth: width, newHeight: height })) return next(args);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawRect",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        const [Left, Top, Width, Height]: number[] = args;
        const Color: string = args[4];

        const drawRect = (color: string) => {
          MainCanvas.beginPath();
          MainCanvas.fillStyle = color;
          MainCanvas.fillRect(Left, Top, Width, Height);
          MainCanvas.fill();
        };

        switch (Color.toLowerCase()) {
          case "white":
          case "#eee":
          case "#eeeeee":
          case "#ddd":
          case "#dddddd":
          case "#ccc":
          case "#cccccc":
          case "#ffff88":
          case "#ffffff":
          case "#ffffff88":
          case "#ffffffcc":
            drawRect(colors.elementBackground);
            break;

          case "#d8fed7":
          case "#adcbac":
            drawRect(_Color.darken(Color, 25));
            break;

          default:
            next(args);
            break;
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawEmptyRect",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        const [Left, Top, Width, Height, , Thickness] = args;
        const Color: string = args[4] || "black";

        const drawEmptyRect = (color: string) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness;
          MainCanvas.strokeStyle = color;
          MainCanvas.stroke();
        };

        switch (_Color.getHexComputed(Color).toLowerCase()) {
          case "#ffffff":
          case "#dddddd":
          case "#000000":
            drawEmptyRect(colors.elementBorder);
            break;

          default:
            next(args);
            break;
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawButtonHover",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        let [Left, Top, Width, Height, HoveringText] = args;

        if (HoveringText == null || HoveringText == "") return next(args);

        Left = MouseX > 1000 ? Left - 475 : Left + Width + 25;
        Top = Top + (Height - 65) / 2;
        drawRect(Left, Top, 450, 65, _Color.lighten(colors.elementBackground, 25), colors.elementBorder);
        DrawTextFit(HoveringText, Left + 225, Top + 33, 444, "Black");
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawPreviewBox",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        const [X, Y, Path, Description, Options] = args;

        let { Background, Foreground, Vibrating, Border, Hover, HoverBackground, Disabled, Icons, Width, Height } = Options || {};
        Width = Width || DrawAssetPreviewDefaultWidth;
        Height = Height || DrawAssetPreviewDefaultHeight;

        const Padding = 2;
        // Only reserve space if we have text to draw
        const TextGutter = Description ? 44 : 0;

        // Default background and foreground colors
        Background = isWhite(Background) ? colors.elementBackground : _Color.darken(_Color.toDarkMode(Background, colors.elementBackground), 50);
        Foreground = colors.text;
        Border = colors.elementBorder;
        Hover = MouseHovering(X, Y, Width, Height);

        if (Disabled) Background = colors.elementBackgroundDisabled;
        else if (Hover) Background = colors.elementBackgroundHover;

        // Do a bunch of math to keep the image scaled
        let ImageX = X + Padding;
        let ImageY = Y + Padding;
        let ImageWidth = Width;
        let ImageHeight = Height - TextGutter;

        if (ImageWidth > ImageHeight) {
          const Ratio = ImageHeight / ImageWidth;
          ImageWidth *= Ratio;
          ImageX += (Width - ImageWidth) / 2;
        } else if (ImageWidth < ImageHeight) {
          const Ratio = ImageWidth / ImageHeight;
          ImageHeight *= Ratio;
          ImageY += (Height - ImageHeight - TextGutter) / 2;
        }

        ImageWidth -= 2 * Padding;
        ImageHeight -= 2 * Padding;

        if (Vibrating) {
          ImageX += 1 + Math.floor(Math.random() * 3);
          ImageY += 1 + Math.floor(Math.random() * 3);
        }

        // Now draw the preview box
        DrawRect(X, Y, Width, Height, Background);
        ControllerAddActiveArea(X, Y);
        if (Border) DrawEmptyRect(X, Y, Width, Height, Hover ? colors.elementBorderHover : Border);
        if (Path !== "") DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
        DrawPreviewIcons(Icons, X, Y);
        if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawTextWrap",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        let [Text, X, Y, Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
        const isHovering = MouseHovering(X, Y, Width, Height);

        if (!Text) return;

        ControllerAddActiveArea(X, Y);

        // Draw the rectangle if we need too
        if (BackColor != null) {
          if (isWhite(BackColor)) {
            if (!isHovering) {
              drawRect(X, Y, Width, Height, colors.elementBackground, colors.elementBorder);
            } else {
              drawRect(X, Y, Width, Height, colors.elementBackgroundHover, colors.elementBorder);
            }
          } else {
            if (!isHovering) {
              drawRect(X, Y, Width, Height, BackColor, colors.elementBorder);
            } else {
              drawRect(X, Y, Width, Height, _Color.darken(BackColor, 40), colors.elementBorder);
            }
          }
        }

        // Sets the text size if there's a maximum number of lines
        let TextSize;
        if (MaxLine != null) {
          TextSize = MainCanvas.font;
          GetWrapTextSize(Text, Width, MaxLine);
        }

        // Split the text if it wouldn't fit in the rectangle
        MainCanvas.fillStyle = isBlack(ForeColor) ? colors.text : _Color.lighten(_Color.toDarkMode(ForeColor, colors.elementBackground), 50);
        if (MainCanvas.measureText(Text).width > Width) {
          const words = fragmentText(Text, Width);
          let line = "";

          // Find the number of lines
          let LineCount = 1;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              line = words[n] + " ";
              LineCount++;
            } else line = testLine;
          }

          // Splits the words and draw the text
          line = "";
          Y = Y - (LineCount - 1) * LineSpacing + Height / 2;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              MainCanvas.fillText(line, X + Width / 2, Y);
              line = words[n] + " ";
              Y += LineSpacing * 2;
            } else {
              line = testLine;
            }
          }
          MainCanvas.fillText(line, X + Width / 2, Y);
        } else MainCanvas.fillText(Text, X + Width / 2, Y + Height / 2);

        // Resets the font text size
        if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawTextFit",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled
        if (args[0]?.startsWith("Description")) return next(args); // NOTE Temporary "solution"

        if (isBlack(args[4])) {
          args[4] = colors.text;
          args[5] = ""; //_Color.darken(args[4], 20);
        } else {
          args[4] = _Color.toDarkMode(args[4], colors.mainBackground);
          args[5] = ""; //_Color.darken(args[4], 20);
        }

        return next(args);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      "DrawText",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args); // Skip hook if setting is disabled

        if (isBlack(args[3])) {
          args[3] = colors.text;
          args[4] = ""; //_Color.darken(args[3], 20);
        } else {
          args[3] = _Color.toDarkMode(args[3], colors.mainBackground);
          args[4] = ""; //_Color.darken(args[3], 20);
        }

        next(args);
      },
      ModuleCategory.GuiRedraw
    );
  }

  Run(): void {}
}
