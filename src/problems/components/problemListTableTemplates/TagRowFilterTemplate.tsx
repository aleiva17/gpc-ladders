import {ReactElement} from "react";
import {MultiSelect} from "primereact/multiselect";
import {ColumnFilterElementTemplateOptions} from "primereact/column";

export const TagRowFilterTemplate = (options: ColumnFilterElementTemplateOptions, tags: Array<string>): ReactElement => {
  return (
    <MultiSelect
      value={options.value}
      options={tags}
      itemTemplate={(tag: string) => <span>{tag}</span>}
      onChange={(e) => options.filterApplyCallback(e.value)}
      placeholder="Any"
      className="p-column-filter"
      maxSelectedLabels={1}
      style={{ minWidth: '14rem' }}
    />
  );
};