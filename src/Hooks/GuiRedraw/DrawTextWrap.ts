import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, colors, isBlack } from '../../Utilities/Color';
import { drawRect } from '../../Utilities/Drawing';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawTextWrap() {
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
}
