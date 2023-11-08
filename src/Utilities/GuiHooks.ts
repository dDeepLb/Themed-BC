import { GlobalModule } from "../Modules/Global";
import { _Color } from "./Color";
import { HookPriority, ModuleCategory, hookFunction } from "./SDK";

export function loadGuiHooks() {
  hookFunction(
    "DrawProcess",
    HookPriority.AddBehavior,
    (args, next) => {
      if (!Player.Themed.GlobalModule.doVanillaGuiOverhaul) return next(args);

      let time = args[0];
      const data = Player.Themed.ColorsModule;

      next(args);

      // Gets the current screen background and draw it, it becomes darker in dialog mode or if the character is blindfolded
      let B = window[CurrentScreen + "Background"];

      if (B != "Sheet") return next(args);

      DrawRect(0, 0, 2000, 1000, data.primaryColor);

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
    ModuleCategory.Global
  );

  hookFunction("DrawButton", HookPriority.Observe, (args, next) => {
    if (!Player.Themed.GlobalModule.doVanillaGuiOverhaul) return next(args);

    const [Left, Top, Width, Height, Label, Color, Image, HoveringText, Disabled] = args;
    const data = Player.Themed.ColorsModule;
    const isHovering = !!(MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !CommonIsMobile)


    next(args);

    ControllerAddActiveArea(Left, Top);

    // Draw the button rectangle (makes the background color Dark Grey if the mouse is over it)
    if (Color === "White") {
      MainCanvas.beginPath();
      MainCanvas.rect(Left, Top, Width, Height);
      MainCanvas.fillStyle = isHovering && !Disabled ? _Color.darken(data.secondaryColor, 20) : data.secondaryColor;
      MainCanvas.fillRect(Left, Top, Width, Height);
      MainCanvas.fill();
      MainCanvas.lineWidth = 2;
      MainCanvas.strokeStyle = isHovering ? data.accentColor2 : data.accentColor1;
      MainCanvas.stroke();
      MainCanvas.closePath();
    }
    if (Color !== "White") {
      MainCanvas.beginPath();
      MainCanvas.rect(Left, Top, Width, Height);
      MainCanvas.fillStyle = isHovering && !Disabled ? _Color.darken(Color, 70) : _Color.darken(Color, 50);
      MainCanvas.fillRect(Left, Top, Width, Height);
      MainCanvas.fill();
      MainCanvas.lineWidth = 2;
      MainCanvas.strokeStyle = isHovering ? data.accentColor2 : data.accentColor1;
      MainCanvas.stroke();
      MainCanvas.closePath();
    }

    // Draw the hovering text
    if (HoveringText != null && isHovering) {
      DrawHoverElements.push(() => DrawButtonHover(Left, Top, Width, Height, HoveringText));
    }
    DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, Width - 4, "White");

    if (Image != null && Image != "") DrawImage(Image, Left + 2, Top + 2);
  });
}
