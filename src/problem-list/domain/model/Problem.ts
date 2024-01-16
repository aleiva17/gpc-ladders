
export interface Problem {
  title: string;
  contestId: string;
  index: string;
  rating: number;
  tags: Array<string>;
  preferredOpenProblemLink?: string;
  solutionLink?: string | undefined;
}