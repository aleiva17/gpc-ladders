import {ColumnFilterElementTemplateOptions} from "primereact/column";
import {Tag, TagProps} from "primereact/tag";
import {MultiSelect} from "primereact/multiselect";
import {ProblemStatus} from "@/problems/domain/model/FilterableProblem.ts";

export const StatusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
  const statuses: Array<string> = ["Accepted", "Wrong answer", "Pending"];

  const getSeverity = (status: ProblemStatus): TagProps["severity"]  => {
    return status === "Accepted"
        ? "success"
        : status === "Wrong answer"
          ? "danger"
          : "info";
  }

  return (
    <MultiSelect
      value={options.value}
      options={statuses}
      itemTemplate={(status) => <Tag value={status} severity={getSeverity(status)}/>}
      onChange={(e) => options.filterApplyCallback(e.value)}
      placeholder="Any"
      className="p-column-filter"
      maxSelectedLabels={1}
      style={{ minWidth: '14rem' }}
    />
  );
}