import {Submission} from "@/problems/domain/model/Submission.ts";
import {NormalizeVerdictPipe} from "@/statistics/pipes/NormalizeVerdictPipe.ts";
import {getSkillsSortedByFrequency} from "@/statistics/services/SkillService.ts";


export const getRatingDataForProblemRatingsChart = (submissions: Array<Submission>): object => {
  const maxRating = submissions.reduce(
    (acc, {problem}) =>
      problem.rating === undefined
        ? acc
        : Math.max(acc, problem.rating)
    , 800
  );

  const labels = Array.from({ length: (maxRating - 800) / 100 + 1 }, (_, index) => 800 + index * 100);
  const data: Array<number> = Array(labels.length).fill(0);

  submissions.forEach(submissions => {
    const index = (submissions.problem.rating - 800) / 100;
    ++data[index];
  });

  return {
    labels: labels,
    datasets: [
      {
        label: "Problems solved",
        backgroundColor: "#3b82f6",
        data: data
      }
    ]
  };
}

export const getVerdictDataForVerdictRatioChart = (submissions: Array<Submission>): object => {
  const verdictsFrequency: Map<string, number> = new Map();
  const verdicts: Array<string> = [];

  submissions.forEach(submission => {
    if (!verdictsFrequency.has(submission.verdict)) {
      verdictsFrequency.set(submission.verdict, 1);
      return;
    }
    verdictsFrequency.set(submission.verdict, 1 + verdictsFrequency.get(submission.verdict)!);
  });

  for (const key of verdictsFrequency.keys()) {
    verdicts.push(key);
  }

  return {
    labels: verdicts.map(NormalizeVerdictPipe.transform),
    datasets: [
      {
        label: "Submissions",
        data: verdicts.map(verdict => verdictsFrequency.get(verdict))
      }
    ],
  };
};

export const getTagsDataForTagDoughnutChart = (submissions: Array<Submission>): object => {
  const skillStats = getSkillsSortedByFrequency(submissions);
  const tags = skillStats.map(skill => skill.name);
  const data = skillStats.map(skill => skill.frequency);

  return {
    labels: tags,
    datasets: [
      {
        label: "Solved problems",
        backgroundColor: "#ec4899",
        data: data
      }
    ],
  };
};