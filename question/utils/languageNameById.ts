import { languages } from '../data/languages'

export const LanguageNameById = (id: string): string => {
    let languageName = 'Unknown';
  const language = languages.find(language => {

      if (language.key == id) {
        languageName = language.value;
        return true;
      }
  });
    return languageName;
}