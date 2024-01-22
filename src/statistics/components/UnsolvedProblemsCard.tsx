import {ReactElement} from "react";
import {Problem} from "@/problems/domain/model/Problem.ts";
import {DataTable, DataTableRowClickEvent} from "primereact/datatable";
import {Column} from "primereact/column";

type UnsolvedProblemsCardProps = {
  unsolvedProblems: Array<Problem>;
}

export const UnsolvedProblemsCard = ({unsolvedProblems}: UnsolvedProblemsCardProps): ReactElement => {

  const openLinkFromRow = (e: DataTableRowClickEvent) => {
    const {contestId, index} = e.data as Problem;
    window.open(`https://codeforces.com/problemset/problem/${contestId}/${index}`, "_blank");
  }

  return (
    <div className="bg-white dark:bg-darkest w-full h-fit rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Attempted unsolved problems</h2>
      <DataTable
        value={unsolvedProblems}
        size="small"
        className="max-h-36"
        scrollHeight="144px"
        onRowClick={openLinkFromRow}
        selectionMode="single"
      >
        <Column field="title" header="Title" className="text-xs" headerClassName="text-base" />
        <Column field="rating" header="Rating" className="text-xs" headerClassName="text-base" />
      </DataTable>
    </div>
  );
};