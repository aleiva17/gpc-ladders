import {Problem} from "@/problem-list/domain/model/Problem.ts";

export const getAllUniqueTagsFromProblems = (problems: Array<Problem>) => {
  const existingTags = new Set<string>();
  const allTags: Array<string> = [];

  problems.forEach(problem => {
    problem.tags.forEach(tag => {
      if (existingTags.has(tag)) return;
      allTags.push(tag);
      existingTags.add(tag);
    });
  });

  return allTags;
}