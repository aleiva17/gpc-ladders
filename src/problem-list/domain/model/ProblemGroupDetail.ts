import {ProblemList} from "@/problem-list/domain/model/ProblemList.ts";

export interface ProblemGroupDetail {
  name: string;
  problems: Array<ProblemList>
}