import {ReactElement, useState} from "react";
import {Column} from "primereact/column";
import {DataTable, DataTableFilterMeta} from "primereact/datatable";
import {Problem} from "@/problems/domain/model/Problem.ts";
import {ActionTemplate} from "@/problems/components/problemListTableTemplates/ActionTemplate.tsx";
import {TagsTemplate} from "@/problems/components/problemListTableTemplates/TagsTemplate.tsx";
import {TagRowFilterTemplate} from "@/problems/components/problemListTableTemplates/TagRowFilterTemplate.tsx";
import {FilterMatchMode} from "primereact/api";
import {getAllUniqueTagsFromProblems} from "@/problems/services/TagService.ts";
import {StatusTemplate} from "@/problems/components/problemListTableTemplates/StatusTemplate.tsx";
import {StatusRowFilterTemplate} from "@/problems/components/problemListTableTemplates/StatusRowFilterTemplate.tsx";
import {FilterableProblem} from "@/problems/domain/model/FilterableProblem.ts";

type ProblemListTableProps = {
  problems: Array<FilterableProblem>;
}

// TODO: Fix multiple filtering on tags
// TODO: Fix multiple filtering on status
export const ProblemListTable = ({ problems }: ProblemListTableProps): ReactElement => {
  const allTags = getAllUniqueTagsFromProblems(problems).sort();
  const [filters] = useState<DataTableFilterMeta>({
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    tags: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.IN }
  });

  return (
    <div className="grid">
      <div className="overflow-x-auto">
        <DataTable
          value={problems}
          stripedRows
          tableStyle={{minWidth: "50rem"}}
          removableSort
          paginator
          filters={filters}
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          filterDisplay="row"
          emptyMessage="No problems found."
        >
          <Column
            sortable
            field="title"
            header="Name"
            filterHeaderClassName="min-w-[280px]"
            filter
            filterPlaceholder="Search by name"
          />
          <Column
            sortable
            field="rating"
            header="Rating"
          />
          <Column
            field="tags"
            style={{ width: '20%' }}
            header="Tags"
            filter
            showFilterOperator={true}
            filterElement={(options) => TagRowFilterTemplate(options, allTags)}
            filterField="tags"
            showFilterMenu={false}
            body={(problem: Problem) => TagsTemplate(problem.tags)}
          />
          <Column
            field="status"
            style={{ width: '20%' }}
            header="Status"
            filterMenuStyle={{ width: '4rem' }}
            filter
            showFilterOperator={true}
            filterElement={StatusRowFilterTemplate}
            filterField="status"
            showFilterMenu={false}
            body={StatusTemplate}
          />
          <Column
            align="center"
            className="w-1/12"
            header="Actions"
            body={ActionTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};