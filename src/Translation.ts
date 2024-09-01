export class Localization {
  private static Translation = new Object();
  private static FallbackTranslation = new Object();

  static async load() {
    const lang = TranslationLanguage.toLowerCase();
    this.Translation = await Localization.fetchLanguageFile(lang);
    if (lang == 'en') {
      return;
    }
    this.FallbackTranslation = await Localization.fetchLanguageFile('en');
  }

  static getText(srcTag: string) {
    return this.Translation[srcTag] || this.FallbackTranslation?.[srcTag] || srcTag || '';
  }

  private static async fetchLanguageFile(lang: string) {
    const response = await fetch(`${PUBLIC_URL}/i18n/${lang}.lang`);

    if (lang != 'en' && !response.ok) {
      return Localization.fetchLanguageFile('en');
    }
    const langFileContent = await response.text();

    return this.parseLanguageFile(langFileContent);
  }

  private static parseLanguageFile(content) {
    const translations = {};
    const lines = content.split('\n');

    for (const line of lines) {
      // Ignore empty lines and comments
      if (line.trim() === '' || line.trim().startsWith('#')) {
        continue;
      }

      const [key, value] = line.split('=');
      translations[key.trim()] = value.trim();
    }

    return translations;
  }
}

export const getText = (string: string): string => Localization.getText(string);
