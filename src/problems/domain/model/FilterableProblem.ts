import {Problem} from "@/problems/domain/model/Problem.ts";

export type ProblemStatus = "Accepted" | "Wrong answer" | "Pending";

export interface FilterableProblem extends Problem {
  status: ProblemStatus;
}