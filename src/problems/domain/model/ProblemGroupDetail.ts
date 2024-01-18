import {ProblemList} from "@/problems/domain/model/ProblemList.ts";

export interface ProblemGroupDetail {
  name: string;
  problems: Array<ProblemList>
}