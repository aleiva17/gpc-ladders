import {ReactElement} from "react";
import {Tag} from "primereact/tag";
import {FilterableProblem} from "@/problems/domain/model/FilterableProblem.ts";

export const StatusTemplate = (problem: FilterableProblem): ReactElement => {
  return (
    <Tag
      value={problem.status}
      severity={problem.status === "Accepted"
        ? "success"
        : problem.status === "Wrong answer"
          ? "danger"
          : "info"
      }
    />
  );
};