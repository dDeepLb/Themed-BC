import { HOOK_PRIORITY, mod } from "./Definition";
import { ICONS, DrawSvg, onLogin } from "./Utils";

export function LoadHooks() {
	mod.hookFunction("DrawButton", HOOK_PRIORITY.ADD_BEHAVIOR, (args, next) => {
		let Left = args[0];
		let Top = args[1];
		let Width = args[2];
		let Height = args[3];
		let Label = args[4];
		let Color = args[5];
		let Image = args[6];
		let HoveringText = args[7];
		let Disabled = args[8];
		next(args);

		ControllerAddActiveArea(Left, Top);

		// Draw the button rectangle (makes the background color Dark Grey if the mouse is over it)
		MainCanvas.beginPath();
		MainCanvas.rect(Left, Top, Width, Height);
		MainCanvas.fillStyle =
			MouseX >= Left &&
			MouseX <= Left + Width &&
			MouseY >= Top &&
			MouseY <= Top + Height &&
			!CommonIsMobile &&
			!Disabled
				? "#202020"
				: "#303030";
		MainCanvas.fillRect(Left, Top, Width, Height);
		MainCanvas.fill();
		MainCanvas.lineWidth = 2;
		MainCanvas.strokeStyle = "#440171";
		MainCanvas.stroke();
		MainCanvas.closePath();

		// Draw the hovering text
		if (
			HoveringText != null &&
			MouseX >= Left &&
			MouseX <= Left + Width &&
			MouseY >= Top &&
			MouseY <= Top + Height &&
			!CommonIsMobile
		) {
			DrawHoverElements.push(() =>
				DrawButtonHover(Left, Top, Width, Height, HoveringText)
			);
		}
		DrawTextFit(
			Label,
			Left + Width / 2,
			Top + Height / 2 + 1,
			Width - 4,
			"#eee",
            "#eee"
		);

		if (Image === "Icons/Chat.png") {
			if (Image != null && Image != "") {
				//drawSvg(MainCanvas, ICONS.STAR, Left + (Height / 4), Top + (Height / 4), Height*2, Height*2, Height, 1.0, 0, "red");
				DrawSvg(MainCanvas, ICONS.CHAT, Left + 2, Top + 2, 84, 84, 128, {
					fillColor: "red",
				});
				//DrawImageResize(ICONS.CHAT, Left + 2, Top + 2, Height - 4, Height - 4);
			}
		} else {
			if (Image != null && Image != "") DrawImage(Image, Left + 2, Top + 2);
		}
	});

    mod.hookFunction(
		"DrawText",
		HOOK_PRIORITY.ADD_BEHAVIOR,
		(args, next) => {
			if (args[4] === "Gray") args[4] = args[3];
			next(args);
		}
	);

    mod.hookFunction(
		"DrawTextFit",
		HOOK_PRIORITY.ADD_BEHAVIOR,
		(args, next) => {
			if (args[5] === "Gray") args[5] = args[4];
			next(args);
		}
	);

	mod.hookFunction(
		"DrawProcess",
		HOOK_PRIORITY.ADD_BEHAVIOR,
		(args, next) => {
			let Args = args;
			let time = Args[0];

			next(args);

			// Clear the list of characters that were drawn last frame
			DrawLastCharacters = [];

			// Gets the current screen background and draw it, it becomes darker in dialog mode or if the character is blindfolded
			let B = window[(CurrentScreen as keyof typeof window) + "Background"];

			if (B != null && B != "" && Player !== undefined && Player.GraphicsSettings !== undefined) {
				const ValidScreenForVFX =
					CurrentModule != "Character" &&
					B != "Sheet" &&
					CurrentScreen !== "Crafting";
				const blurLevel = Player.GetBlurLevel();
				if (ValidScreenForVFX && blurLevel > 0) {
					MainCanvas.filter = `blur(${blurLevel}px)`;
				}

				let DarkFactor = 1.0;
				if (ValidScreenForVFX) {
					DarkFactor = CharacterGetDarkFactor(Player) * CurrentDarkFactor;
					if (
						DarkFactor == 1 &&
						(CurrentCharacter != null || ShopStarted) &&
						!CommonPhotoMode
					)
						DarkFactor = 0.5;
				}
				let customBG = DrawGetCustomBackground();

				if (customBG != "" && ValidScreenForVFX) {
					B = customBG;
					if (DarkFactor == 0)
						DarkFactor = CharacterGetDarkFactor(Player, true);
				}

				if (DarkFactor > 0.0) {
                    if (B == "Sheet") {
						DrawRect(0, 0, 2000, 1000, "#222");
					}
				}
				if (DarkFactor < 1.0)
					DrawRect(0, 0, 2000, 1000, "rgba(0,0,0," + (1.0 - DarkFactor) + ")");

				if (ValidScreenForVFX) {
					const Tints = Player.GetTints();
					for (const { r, g, b, a } of Tints) {
						DrawRect(0, 0, 2000, 1000, `rgba(${r},${g},${b},${a})`);
					}
				}

				MainCanvas.filter = "none";
			}

			// Draws the dialog screen or current screen if there's no loaded character
			if (CurrentCharacter != null) DialogDraw();
			else CurrentScreenFunctions.Run(time);

			// Handle screen flash effects
			DrawProcessScreenFlash();

			// Draw Hovering text so they can be above everything else
			DrawProcessHoverElements();

			// Draws beep from online player sent by the server
			ServerDrawBeep();

			// Draw a marker for the controller's position
			if (ControllerIsActive()) {
				DrawRect(MouseX - 5, MouseY - 5, 10, 10, "Red");
			}

			// Checks for screen resize/position change and calls appropriate function
			const newCanvasPosition = [
				MainCanvas.canvas.offsetLeft,
				MainCanvas.canvas.offsetTop,
				MainCanvas.canvas.clientWidth,
				MainCanvas.canvas.clientHeight,
			];
			if (!CommonArraysEqual(newCanvasPosition, DrawCanvasPosition)) {
				DrawCanvasPosition = newCanvasPosition;
				if (CurrentScreenFunctions.Resize) {
					CurrentScreenFunctions.Resize(false);
				}
			}

			// Leave dialogs AFTER drawing everything
			// If needed
			// Used to support items that remove you from the dialog during the draw phase
			if (DialogLeaveDueToItem) {
				DialogLeaveDueToItem = false;
				DialogLeave();
			}
		}
	);
    mod.hookFunction('LoginResponse', HOOK_PRIORITY.ADD_BEHAVIOR, (args, next) => {
        next(args);
        onLogin();
    });
}
