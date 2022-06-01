import { ILanaguage } from '../interfaces/language/language.interface';
import { ITest } from '../interfaces/test/test.interface';
import Languages from '../static/language.json';

const filterLanguageId = (test: ITest): number[] => {
    const languagesId: number[] = test.snippets.map((snippet: any) => {
        return +snippet.language;
    });
    return languagesId;
}

const getLanguages = (test: ITest): ILanaguage[] => {
    const languageIds: number[] = filterLanguageId(test);
    const languages: ILanaguage[]  = Languages.filter((language: ILanaguage) => {
        return languageIds.includes(language.id);
    });
    return languages;
}





export { filterLanguageId, getLanguages };