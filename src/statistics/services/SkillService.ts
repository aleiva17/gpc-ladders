import {Submission} from "@/problems/domain/model/Submission.ts";

type SkillStat = {
  name: string;
  frequency: number;
};

export const getSkillsSortedByFrequency = (submissions: Array<Submission>): Array<SkillStat> => {
  const result: Array<SkillStat> = [];
  const skillFrequency: Map<string, number> = new Map();

  submissions.forEach(({problem}) => {
    const { tags } = problem;

    tags.forEach(tag => {
      if (!skillFrequency.has(tag)) {
        skillFrequency.set(tag, 1);
        return;
      }
      skillFrequency.set(tag, 1 + skillFrequency.get(tag)!);
    });
  });

  skillFrequency.forEach(
    (frequency, skill) => result.push({ name: skill, frequency: frequency})
  );

  return result.sort((a, b) => b.frequency - a.frequency);
}