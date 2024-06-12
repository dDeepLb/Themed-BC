import { BaseModule } from '../Base/BaseModule';
import { _Color, colors } from '../Utilities/Color';
import { PlayerStorage } from '../Utilities/Data';
import { _Image, drawButtonRect, drawRect } from '../Utilities/Drawing';
import { HookPriority, ModuleCategory, hookFunction, patchFunction, unpatchFuntion } from '../Utilities/SDK';

export const doRedraw = () => {
  return PlayerStorage()?.GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul;
};

const isBlack = (color: string) => _Color.getComputed(color) === 'rgb(0, 0, 0)';

export class GuiRedrawModule extends BaseModule {
  patched: boolean = false;

  Load(): void {
    hookFunction(
      'DrawRoomBackground',
      HookPriority.Observe,
      ([URL, ...args]: Parameters<typeof DrawRoomBackground>, next: (args: Parameters<typeof DrawRoomBackground>) => ReturnType<typeof DrawRoomBackground>) => {
        if (!doRedraw()) return next([URL, ...args]);

        if (URL.includes('Sheet.jpg')) {
          if (PlayerStorage().GlobalModule.doUseFlatColor) {
            DrawRect(0, 0, 2000, 1000, colors.mainBackground);
          } else {
            next([URL, ...args]);
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = 'multiply';
            DrawRect(0, 0, 2000, 1000, colors.mainBackground);
            MainCanvas.restore();
          }
        } else {
          next([URL, ...args]);
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawButton',
      HookPriority.Observe,
      (args: Parameters<typeof DrawButton>, next: (args: Parameters<typeof DrawButton>) => ReturnType<typeof DrawButton>) => {
        if (!doRedraw()) return next(args);

        const [x, y, width, height, label, color, image, hoveringText, isDisabled] = args;
        const isHovering = MouseHovering(x, y, width, height);

        ControllerAddActiveArea(x, y);

        switch (_Color.getHexComputed(color).toLowerCase()) {
          case '#ffffff':
          case '#dddddd':
          case '#eeeeee':
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

        DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, colors.text);

        if (image != null && image != '') {
          DrawImage(image, x + 2, y + 2);
        }

        if (hoveringText != null && isHovering) {
          DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawCheckbox',
      HookPriority.Observe,
      (args: Parameters<typeof DrawCheckbox>, next: (args: Parameters<typeof DrawCheckbox>) => ReturnType<typeof DrawCheckbox>) => {
        if (!doRedraw()) return next(args);

        const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = 'Black', CheckImage = 'Icons/Checked.png'] = args;

        DrawText(Text, Left + 100, Top + 33, TextColor, '');
        DrawButton(Left, Top, Width, Height, '', 'White', IsChecked ? CheckImage : '', null, Disabled);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawBackNextButton',
      HookPriority.Observe,
      (args: Parameters<typeof DrawBackNextButton>, next: (args: Parameters<typeof DrawBackNextButton>) => ReturnType<typeof DrawBackNextButton>) => {
        if (!doRedraw()) return next(args);

        const [Left, Top, Width, Height, Label, Color, Image, , , Disabled] = args;
        let [, , , , , , , BackText, NextText, , ArrowWidth] = args;

        if (ArrowWidth == null || ArrowWidth > Width / 2) ArrowWidth = Width / 2;
        const LeftSplit = Left + ArrowWidth;
        const RightSplit = Left + Width - ArrowWidth;

        ControllerAddActiveArea(Left, Top);
        ControllerAddActiveArea(Left + Width - ArrowWidth, Top);

        MainCanvas.save();
        MainCanvas.textAlign = 'center';

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
          MainCanvas.fillStyle = colors.elementBackgroundDisabled;
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        }
        MainCanvas.lineWidth = 2;
        MainCanvas.strokeStyle = colors.elementBorder;
        MainCanvas.stroke();
        MainCanvas.closePath();

        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color);
        DrawTextFit(Label, Left + Width / 2, Top + (Height / 2) + 1, (CommonIsMobile) ? Width - 6 : Width - 36, 'Black');

        if (Image != null && Image != '') {
          DrawImage(Image, Left + 2, Top + 2);
        }

        ControllerAddActiveArea(Left + Width / 2, Top);

        MainCanvas.beginPath();
        MainCanvas.fillStyle = 'Black';
        MainCanvas.moveTo(Left + 15, Top + Height / 5);
        MainCanvas.lineTo(Left + 5, Top + Height / 2);
        MainCanvas.lineTo(Left + 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();

        MainCanvas.beginPath();
        MainCanvas.fillStyle = 'Black';
        MainCanvas.moveTo(Left + Width - 15, Top + Height / 5);
        MainCanvas.lineTo(Left + Width - 5, Top + Height / 2);
        MainCanvas.lineTo(Left + Width - 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();

        MainCanvas.restore();

        if (CommonIsMobile) return;
        if (BackText == null) BackText = () => 'MISSING VALUE FOR: BACK TEXT';
        if (NextText == null) NextText = () => 'MISSING VALUE FOR: NEXT TEXT';
        if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
          DrawHoverElements.push(() => {
            DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : '');
          });
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawImageEx',
      HookPriority.Observe,
      (args: Parameters<typeof DrawImageEx>, next: (args: Parameters<typeof DrawImageEx>) => ReturnType<typeof DrawImageEx>) => {
        if (!doRedraw()) return next(args);
        if (typeof args[0] !== 'string') return next(args);
        if (!_Image.doDrawImage(args[0])) return next(args);

        const [Source, Canvas, X, Y, Options] = args;
        const color = args[4].HexColor ?? colors.icon;
        const colorizedImage = _Image.getColorized(Source, color);

        if (!colorizedImage) return next(args);

        const imageSource = _Image.turnToBase64(colorizedImage, `${Source}${args[4].HexColor}`);
        next([imageSource ?? Source, Canvas, X, Y, Options]);
      }, ModuleCategory.GuiRedraw);

    hookFunction(
      'DrawRect',
      HookPriority.Observe,
      (args: Parameters<typeof DrawRect>, next: (args: Parameters<typeof DrawRect>) => ReturnType<typeof DrawRect>) => {
        if (!doRedraw()) return next(args);

        const [Left, Top, Width, Height, Color] = args;

        const drawRect = (color: string) => {
          MainCanvas.beginPath();
          MainCanvas.fillStyle = color;
          MainCanvas.fillRect(Left, Top, Width, Height);
          MainCanvas.fill();
        };

        if (Color.startsWith('%')) {
          switch (Color.substring(1).toLowerCase()) {
            case 'disabled':
              drawRect(colors.elementBackgroundDisabled);
              break;

            case 'hover':
              drawRect(colors.elementBackgroundHover);
              break;

            case 'background':
              drawRect(colors.elementBackground);
              break;

            case 'friendhint':
              drawRect(colors.elementHoverHint);
              break;

            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color).toLowerCase()) {
            case '#eeeeee':
            case '#dddddd':
            case '#cccccc':
            case '#ffffff':
            case '#ffff88':
            case '#ffffff88':
            case '#ffffffcc':
            case '#d7f6e9': // LSCG Version Tooltip
              drawRect(colors.elementBackground);
              break;

            default:
              next(args);
              break;
          }
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawEmptyRect',
      HookPriority.Observe,
      (args: Parameters<typeof DrawEmptyRect>, next: (args: Parameters<typeof DrawEmptyRect>) => ReturnType<typeof DrawEmptyRect>) => {
        if (!doRedraw()) return next(args);

        const [Left, Top, Width, Height, Color, Thickness] = args;

        const drawEmptyRect = (color: string) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness;
          MainCanvas.strokeStyle = color;
          MainCanvas.stroke();
        };

        if (Color.startsWith('%')) {
          switch (Color.substring(1).toLowerCase()) {
            case 'border':
              drawEmptyRect(colors.elementBorder);
              break;

            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color).toLowerCase()) {
            case '#ffffff':
            case '#dddddd':
            case '#000000':
              drawEmptyRect(colors.elementBorder);
              break;

            default:
              next(args);
              break;
          }
        }
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawButtonHover',
      HookPriority.Observe,
      (args: Parameters<typeof DrawButtonHover>, next: (args: Parameters<typeof DrawButtonHover>) => ReturnType<typeof DrawButtonHover>) => {
        if (!doRedraw()) return next(args);

        const [, , Width, Height, HoveringText] = args;
        let [Left, Top] = args;

        if (HoveringText == null || HoveringText == '') return next(args);

        Left = MouseX > 1000 ? Left - 475 : Left + Width + 25;
        Top = Top + (Height - 65) / 2;
        MainCanvas.save();
        MainCanvas.textAlign = 'center';
        drawRect(Left, Top, 450, 65, colors.elementHoverHint, colors.elementBorder);
        DrawTextFit(HoveringText, Left + 225, Top + 33, 444, 'Black');
        MainCanvas.restore();
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawPreviewBox',
      HookPriority.Observe,
      (args: Parameters<typeof DrawPreviewBox>, next: (args: Parameters<typeof DrawPreviewBox>) => ReturnType<typeof DrawPreviewBox>) => {
        if (!doRedraw()) return next(args);

        const [X, Y, Path, Description, Options] = args;

        const { Vibrating, Disabled, Icons } = Options || {};
        let { Background, Foreground, Border, Hover, Width, Height } = Options || {};
        Width = Width || DrawAssetPreviewDefaultWidth;
        Height = Height || DrawAssetPreviewDefaultHeight;

        const Padding = 2;
        const TextGutter = Description ? 44 : 0;

        Background = colors.elementBackground;
        Foreground = colors.text;
        Border = true;
        Hover = MouseHovering(X, Y, Width, Height);

        if (Disabled) Background = colors.elementBackgroundDisabled;
        else if (Hover) Background = colors.elementBackgroundHover;

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

        DrawRect(X, Y, Width, Height, Background);
        ControllerAddActiveArea(X, Y);
        if (Border) DrawEmptyRect(X, Y, Width, Height, Hover ? colors.elementBorderHover : colors.elementBorder);
        if (Path !== '') DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
        DrawPreviewIcons(Icons, X, Y);
        if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawTextWrap',
      HookPriority.Observe,
      (args: Parameters<typeof DrawTextWrap>, next: (args: Parameters<typeof DrawTextWrap>) => ReturnType<typeof DrawTextWrap>) => {
        if (!doRedraw()) return next(args);

        const [Text, X, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
        let [, , Y, , ,] = args;
        const isHovering = MouseHovering(X, Y, Width, Height);

        if (!Text) return;

        ControllerAddActiveArea(X, Y);

        if (BackColor != null) {
          if (!isHovering) {
            drawRect(X, Y, Width, Height, BackColor, colors.elementBorder);
          } else {
            drawRect(X, Y, Width, Height, _Color.darken(BackColor, 40), colors.elementBorder);
          }
        }

        let TextSize;
        if (MaxLine != null) {
          TextSize = MainCanvas.font;
          GetWrapTextSize(Text, Width, MaxLine);
        }

        MainCanvas.fillStyle = isBlack(ForeColor) ? colors.text : _Color.lighten(_Color.toDarkMode(ForeColor, colors.elementBackground), 50);
        if (MainCanvas.measureText(Text).width > Width) {
          const words = fragmentText(Text, Width);
          let line = '';

          let LineCount = 1;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              line = words[n] + ' ';
              LineCount++;
            } else line = testLine;
          }

          line = '';
          Y = Y - (LineCount - 1) * LineSpacing + Height / 2;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              MainCanvas.fillText(line, X + Width / 2, Y);
              line = words[n] + ' ';
              Y += LineSpacing * 2;
            } else {
              line = testLine;
            }
          }
          MainCanvas.fillText(line, X + Width / 2, Y);
        } else MainCanvas.fillText(Text, X + Width / 2, Y + Height / 2);

        if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawTextFit',
      HookPriority.Observe,
      (args: Parameters<typeof DrawTextFit>, next: (args: Parameters<typeof DrawTextFit>) => ReturnType<typeof DrawTextFit>) => {
        if (!doRedraw()) return next(args);

        if (isBlack(args[4])) {
          args[4] = colors.text;
        } else {
          args[4] = _Color.toDarkMode(args[4], colors.mainBackground);
        }

        return next(args);
      },
      ModuleCategory.GuiRedraw
    );

    hookFunction(
      'DrawText',
      HookPriority.Observe,
      (args: Parameters<typeof DrawText>, next: (args: Parameters<typeof DrawText>) => ReturnType<typeof DrawText>) => {
        if (!doRedraw()) return next(args);

        if (isBlack(args[3])) {
          args[3] = colors.text;
          args[4] = '';
        } else {
          args[3] = _Color.toDarkMode(args[3], colors.mainBackground);
          args[4] = '';
        }

        next(args);
      },
      ModuleCategory.GuiRedraw
    );

    if (doRedraw()) this.patchGui();
  }

  patchGui() {
    if (this.patched) return false;

    patchFunction('ChatSearchNormalDraw', {
      'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#884444" : HasBlock ? "#FF9999" : HasFriends && IsFull ? "#448855" : HasFriends ? "#CFFFCF" : IsFull ? "#666" : "White"), null, null, IsFull);':
        'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#4d1b1b" : HasBlock ? "#6e0c0c" : HasFriends && IsFull ? "#225c30" : HasFriends ? "#4d854d" : IsFull ? "#444" : "White"), null, null, IsFull);',
      'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);':
        'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
      'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);':
        'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
      'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FF9999", 1);':
        'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#6e0c0c", 1);'
    });

    patchFunction('DialogDraw', {
      'DrawRect(1087 + offset, 550, 225, 275, bgColor);':
        'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");'
    });

    this.patched = true;
  }

  unpatchGui() {
    if (!this.patched) return false;

    unpatchFuntion('ChatSearchNormalDraw');
    unpatchFuntion('DialogDraw');

    this.patched = false;
  }

  toggleGuiPatches() {
    if (!doRedraw()) {
      return this.unpatchGui();
    } else {
      return this.patchGui();
    }
  }
}
