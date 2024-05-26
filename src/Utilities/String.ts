export class _String {
  static encode(string: string | object) {
    return LZString.compressToBase64(JSON.stringify(string));
  }

  static decode(string: string | undefined) {
    const d = LZString.decompressFromBase64(string as string);
    let data = {};

    try {
      const decoded = JSON.parse(d as string);
      data = decoded;
    } catch {}
    if (data) return data;
  }
}
