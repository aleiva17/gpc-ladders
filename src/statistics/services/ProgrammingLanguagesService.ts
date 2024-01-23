import {Submission} from "@/problems/domain/model/Submission.ts";
import {NormalizeProgrammingLanguagePipe} from "@/statistics/pipes/NormalizeProgrammingLanguagePipe.ts";

type ProgrammingLanguageStat = {
  name: string;
  frequency: number;
};


export const getProgrammingLanguagesSortedByFrequency = (submissions: Array<Submission>): Array<ProgrammingLanguageStat> => {
  const result: Array<ProgrammingLanguageStat> = [];
  const languageFrequency: Map<string, number> = new Map();

  submissions.forEach(({programmingLanguage, verdict}) => {
    if (verdict !== "OK") {
      return;
    }

    programmingLanguage = NormalizeProgrammingLanguagePipe.transform(programmingLanguage);

    if (!languageFrequency.has(programmingLanguage)) {
      languageFrequency.set(programmingLanguage, 1);
      return;
    }

    languageFrequency.set(programmingLanguage, 1 + languageFrequency.get(programmingLanguage)!);
  });

  languageFrequency.forEach(
    (frequency, language) => result.push({ name: language, frequency: frequency})
  );

  return result.sort((a, b) => b.frequency - a.frequency);
}