import { DataManager } from "./Data";
import { DarkBCVersion, ModName } from "./Definition";

export function onLogin() {
    LoadAndMessage();
}

function LoadAndMessage() {
    DataManager.instance.ServerTakeData();
    console.log(`${ModName} v${DarkBCVersion} ready.`);
}

// ICONS
export const ICONS = Object.freeze({
	CHAT: `M 52.5,-0.5 C 59.8333,-0.5 67.1667,-0.5 74.5,-0.5C 103.167,6.16667 120.833,23.8333 127.5,52.5C 127.5,59.8333 127.5,67.1667 127.5,74.5C 120.833,103.167 103.167,120.833 74.5,127.5C 67.1667,127.5 59.8333,127.5 52.5,127.5C 45.3142,125.655 38.3142,122.988 31.5,119.5C 23.7244,122.201 16.0578,124.868 8.5,127.5C 6.16667,127.5 3.83333,127.5 1.5,127.5C 1.16667,126.5 0.5,125.833 -0.5,125.5C -0.5,123.167 -0.5,120.833 -0.5,118.5C 2.13193,110.942 4.7986,103.276 7.5,95.5C 4.01157,88.6858 1.34491,81.6858 -0.5,74.5C -0.5,67.1667 -0.5,59.8333 -0.5,52.5C 6.16667,23.8333 23.8333,6.16667 52.5,-0.5 Z M 53.5,10.5 C 85.989,8.14433 106.822,22.4777 116,53.5C 119.05,84.087 106.217,104.587 77.5,115C 69.8984,116.523 62.2318,116.856 54.5,116C 46.7341,114.195 39.2341,111.695 32,108.5C 26.0838,109.861 20.2504,111.527 14.5,113.5C 14.1667,113.167 13.8333,112.833 13.5,112.5C 15.4726,106.75 17.1392,100.916 18.5,95C 15.3047,87.7659 12.8047,80.2659 11,72.5C 8.58688,40.2926 22.7535,19.6259 53.5,10.5 Z M 36.5,56.5 C 44.0182,56.8875 46.5182,60.5542 44,67.5C 38.0225,72.102 33.8559,70.7686 31.5,63.5C 32.0599,60.288 33.7266,57.9547 36.5,56.5 Z M 61.5,56.5 C 69.0182,56.8875 71.5182,60.5542 69,67.5C 63.0225,72.102 58.8559,70.7686 56.5,63.5C 57.0599,60.288 58.7266,57.9547 61.5,56.5 Z M 86.5,56.5 C 94.0182,56.8875 96.5182,60.5542 94,67.5C 88.0225,72.102 83.8559,70.7686 81.5,63.5C 82.0599,60.288 83.7266,57.9547 86.5,56.5 Z`,
});

export function DrawSvg(
	ctx: CanvasRenderingContext2D,
	icon: string,
	x: number, y: number,
	width: number, height: number,
	baseSize: number,
	{
	alpha = 1.0,
	lineWidth = 0,
	fillColor = "black",
	strokeColor = "black",
	invert = false,
	mirror = false,
	}
) {
	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.translate(x, y);
	ctx.scale(width / baseSize, height / baseSize);
	ctx.fillStyle = fillColor;
	if (strokeColor) {
		ctx.strokeStyle = strokeColor;
	}
	if (invert) {
		ctx.transform(1, 0, 0, -1, 0, height);
	}
	if (mirror) {
		ctx.transform(-1, 0, 0, 1, width, 0);
	}
	ctx.lineWidth = lineWidth;
	const p = new Path2D(icon);
	ctx.fill(p, "evenodd");
	if (strokeColor) {
		ctx.stroke(p);
	}
	ctx.restore();
}