import { DataManager } from "../Data";
import { DarkBCVersion } from "../Definition";
import { Localization } from "../Lang";
import { BExit, getYPos, Title } from "./GUIMisc/GUIDefinition";
import { setSubscreen } from "./GUIMisc/GUIHelper";
import { GUISubscreen } from "./GUIMisc/GUISubscreen";


export class GUIMainMenu extends GUISubscreen {
    public static keys: (keyof ResponsiveSetting)[] = ['background', 'buttonBorderColor', 'buttonColor', 'buttonHoverColor', 'imageColor', 'textColor', 'textShadowColor'];

    public static ElementID = (k: keyof ResponsiveSolidSetting) => `DarkBC_Input_${k}`;
    private static StringListShow = (p: string) => {
        if (p.length === 0) return "";
        let result = JSON.stringify(p);
        return result.substring(1, result.length - 1);
    }

    private static ValidateInput = (input: string) => {
        let raw = input;

        const ValidateString = (input: string) => {
            if (typeof input !== 'string') return undefined;
            return input as string;
        }

        try {
            let d = JSON.parse(raw);
            return ValidateString(d);
        } catch {
            return console.error();
            ;
        }

    }
    Run(): void {
        const data = DataManager.instance.data;
        DrawButton(BExit.Left, BExit.Top, BExit.Width, BExit.Height, "", "White", "Icons/Exit.png");
        
        DrawText(Localization.GetText("mainmenu_title") + ` v${DarkBCVersion}`, Title.X, Title.Y, "Black", "Gray");
    
        const inputBaseX = Title.X + 700;
        const buttonBaseX = 1350;

        for (let i = 0; i < GUIMainMenu.keys.length; i++) {
            const k = GUIMainMenu.keys[i];
            const tY = getYPos(i);
            DrawText(Localization.GetText(`input_title_${k}`), Title.X, tY, "Black", "Gray");
            let input = document.getElementById(GUIMainMenu.ElementID(k)) as HTMLInputElement | undefined;
            if (!input) {
                input = ElementCreateInput(GUIMainMenu.ElementID(k), "text", GUIMainMenu.StringListShow(data[k]), "256");
            }
            if (input) {
                ElementPosition(GUIMainMenu.ElementID(k), inputBaseX, tY, 1000, 64);
                DrawButton(buttonBaseX, tY - 27, 64, 64, "", "IndianRed");
                DrawImageResize("Icons/Reset.png", buttonBaseX, tY - 27, 64, 64);
                if (!GUIMainMenu.ValidateInput(input.value)) {
                    DrawText(Localization.GetText(`invalid_input`), inputBaseX + 600, tY, "Red", "Gray");
                }
            }
        }
    }

    //Clicks
    Click(): void {
        const buttonBaseX = 1350;
        if (MouseIn(BExit.Left, BExit.Top, BExit.Width, BExit.Height)) {
            for (let i = 0; i < GUIMainMenu.keys.length; i++) {
                const k = GUIMainMenu.keys[i];
                let input = document.getElementById(GUIMainMenu.ElementID(k)) as HTMLInputElement | undefined;
                if (input) {
                    let newL = GUIMainMenu.ValidateInput(input.value);
                    if (newL)
                        DataManager.instance.data[k] = newL;
                }
            }
            DataManager.instance.ServerStoreData();
            setSubscreen(null);
        }
    }

    Unload(): void {
        GUIMainMenu.keys.forEach(_ => ElementRemove(GUIMainMenu.ElementID(_)));
    }
}