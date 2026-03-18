const MONO_UPPER_START = 0x1d670; // 𝙰
const MONO_LOWER_START = 0x1d68a; // 𝚊
const MONO_DIGIT_START = 0x1d7f6; // 𝟶

export function toMonospace(text: string): string {
  let result = "";
  for (const char of text) {
    const code = char.codePointAt(0)!;
    if (code >= 0x41 && code <= 0x5a) {
      result += String.fromCodePoint(MONO_UPPER_START + (code - 0x41));
    } else if (code >= 0x61 && code <= 0x7a) {
      result += String.fromCodePoint(MONO_LOWER_START + (code - 0x61));
    } else if (code >= 0x30 && code <= 0x39) {
      result += String.fromCodePoint(MONO_DIGIT_START + (code - 0x30));
    } else {
      result += char;
    }
  }
  return result;
}
