import {Submission} from "@/problems/domain/model/Submission.ts";

type ProgrammingLanguageStat = {
  name: string;
  frequency: number;
};


const getNormalizedProgrammingLanguage = (language: string): string => {
  if (language.startsWith("GNU G++") || language.startsWith("Clang") || language.includes("C++")) return "C++";
  if (language.startsWith("Python 3") || language.startsWith("PyPy 3")) return "Python 3";
  if (language.startsWith("GNU GCC")) return "C";
  if (language.startsWith("Python 2") || language.startsWith("PyPy 2")) return "Python 2";
  if (language.startsWith("JavaScript") || language.startsWith("Node.js")) return "JavaScript";
  if (language.startsWith("Microsoft Q#")) return "Q#";
  if (language.startsWith("Free P") || language.startsWith("Pascal")) return "Pascal";
  if (language.startsWith("OpenCobol")) return "Cobol";
  if (language.startsWith("Ada GNAT 4")) return "GNAT 4";
  if (language === "Mysterious Language" || language === "Secret 2021") return language;
  return language.split(" ").at(0) ?? "undefined";
}

export const getProgrammingLanguagesSortedByFrequency = (submissions: Array<Submission>): Array<ProgrammingLanguageStat> => {
  const result: Array<ProgrammingLanguageStat> = [];
  const languageFrequency: Map<string, number> = new Map();

  submissions.forEach(({programmingLanguage, verdict}) => {
    if (verdict !== "OK") {
      return;
    }

    programmingLanguage = getNormalizedProgrammingLanguage(programmingLanguage);

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