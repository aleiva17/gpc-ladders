import {Submission} from "@/problems/domain/model/Submission.ts";
import {NormalizeVerdictPipe} from "@/statistics/pipes/NormalizeVerdictPipe.ts";
import {getSkillsSortedByFrequency} from "@/statistics/services/SkillService.ts";

const getRatingLabels = (maxRating: number) => {
  return Array.from({ length: (maxRating - 800) / 100 + 1 }, (_, index) => 800 + index * 100);
}

const getRatingDataFromSubmissions = (dataLength: number, submissions: Array<Submission>) => {
  const data: Array<number> = Array(dataLength).fill(0);

  submissions.forEach(submissions => {
    const index = (submissions.problem.rating - 800) / 100;
    ++data[index];
  });

  return data;
}

const getMaxRatingFromSubmissions = (submissions: Array<Submission>): number => {
  return submissions.reduce(
    (acc, {problem}) =>
      problem.rating === undefined
        ? acc
        : Math.max(acc, problem.rating)
    , 800
  );
}

export const getRatingDataForProblemRatingsChart = (submissions: Array<Submission>): object => {
  const maxRating = getMaxRatingFromSubmissions(submissions);
  const labels = getRatingLabels(maxRating);
  const data = getRatingDataFromSubmissions(labels.length, submissions);

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

export const getComparedRatingsDataForProblemRatingsChart = (firstSubmissions: Array<Submission>, secondSubmissions: Array<Submission>, firstLabel: string, secondLabel: string): object => {
  const maxRating = Math.max(
    getMaxRatingFromSubmissions(firstSubmissions),
    getMaxRatingFromSubmissions(secondSubmissions)
  );

  const labels = getRatingLabels(maxRating);
  const firstData = getRatingDataFromSubmissions(labels.length, firstSubmissions);
  const secondData = getRatingDataFromSubmissions(labels.length, secondSubmissions);

  return {
    labels: labels,
    datasets: [
      {
        label: firstLabel,
        backgroundColor: "#3b82f6",
        data: firstData
      },
      {
        label: secondLabel,
        backgroundColor: "#ec4899",
        data: secondData
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