import axios from "axios";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {FilterableProblem, ProblemStatus} from "@/problems/domain/model/FilterableProblem.ts";
import {Problem} from "@/problems/domain/model/Problem.ts";

const instance = axios.create({
  baseURL: "https://codeforces.com/api/",
  timeout: 10000
});

export const getSubmissions = async (username: string): Promise<Array<Submission>> => {
  const response = await instance.get(`/user.status?handle=${username}`);
  const submissions = response.data;

  if (submissions.status !== "OK") {
    throw submissions["comment"];
  }

  return submissions.result;
}

export const getLastSubmissionInfo = async (username: string): Promise<{ time: number, state: string }> => {
  const response = await instance.get(`/user.status?handle=${username}&from=1&count=1`);
  const submissions = response.data;

  if (submissions.status !== "OK") {
    throw submissions["comment"];
  }

  return {
    time: submissions.result[0]["creationTimeSeconds"],
    state: submissions.result[0]["verdict"]
  };
};

export const getSetsOfSubmissionsFilteredByStatus = (submissions: Array<Submission>) => {
  const acceptedSubmissions: Set<string> = new Set<string>();
  const wrongSubmissions: Set<string> = new Set<string>();

  submissions.forEach(submission => {
    if (submission.verdict === "OK") {
      acceptedSubmissions.add(`${submission.contestId}${submission.problem.index}`);
    }
  });

  submissions.forEach(submission => {
    const id = `${submission.contestId}${submission.problem.index}`;
    if (submission.verdict !== "OK" && submission.verdict !== "TESTING" && !acceptedSubmissions.has(id)) {
      wrongSubmissions.add(id);
    }
  });

  return { acceptedSubmissions, wrongSubmissions };
}

export const getFilterableProblemsFromProblemSubmissions = (problems: Array<Problem>, acceptedSubmissions: Set<string>, wrongSubmissions: Set<string>): Array<FilterableProblem> => {
  const filterableProblems: Array<FilterableProblem> = [];

  const getStatus = (id: string): ProblemStatus => {
    if (acceptedSubmissions.has(id)) return "Accepted";
    if (wrongSubmissions.has(id)) return "Wrong answer";
    return "Pending";
  }

  problems.forEach(problem => {
    const id = `${problem.contestId}${problem.index}`;

    filterableProblems.push({
      ...problem,
      status: getStatus(id)
    })
  });

  return filterableProblems;
}

export const getFilterableProblemsFromSubmissions = (submissions: Array<Submission>, acceptedSubmissions: Set<string>, wrongSubmissions: Set<string>): Array<FilterableProblem> => {
  const filterableProblems: Array<FilterableProblem> = [];
  const seenProblems: Set<string> = new Set<string>();

  submissions.forEach(submission => {
    const problem = submission.problem;
    const id = `${problem.contestId}${problem.index}`;

    if (submission.verdict !== "OK" || seenProblems.has(id)) {
      return;
    }

    const status: ProblemStatus = acceptedSubmissions.has(id)
      ? "Accepted"
      : wrongSubmissions.has(id)
        ? "Wrong answer"
        : "Pending";

    seenProblems.add(id);
    filterableProblems.push({
      title: problem.name,
      tags: problem.tags,
      rating: problem.rating,
      contestId: problem.contestId.toString(),
      index: problem.index,
      status: status
    });
  });

  return filterableProblems;
}

export const getUniqueAcceptedSubmissions = (submissions: Array<Submission>): Array<Submission> => {
  const result: Array<Submission> = [];
  const problemsSeen: Set<string> = new Set();

  submissions.forEach(submission => {
    const id = `${submission.problem.contestId}${submission.problem.index}`;

    if (submission.verdict !== "OK" || problemsSeen.has(id)) {
      return;
    }

    result.push(submission);
    problemsSeen.add(id);
  });

  return result;
};

export const getUnsolvedProblems = (submissions: Array<Submission>, wrongAnswer: Set<string>): Array<Problem> => {
  const result: Array<Problem> = [];
  const problemsSeen: Set<string> = new Set();

  submissions.forEach(({problem}) => {
    const id = `${problem.contestId}${problem.index}`;

    if (!wrongAnswer.has(id) || problemsSeen.has(id)) {
      return;
    }

    result.push({
      title: problem.name,
      tags: problem.tags,
      rating: problem.rating,
      contestId: problem.contestId.toString(),
      index: problem.index,
    });

    problemsSeen.add(id);
  });

  return result;
};
