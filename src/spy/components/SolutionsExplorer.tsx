import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {Column} from "primereact/column";
import {ProgrammingLanguageTemplate} from "@/spy/components/templates/ProgrammingLanguageTemplate.tsx";
import {TimeConsumedTemplate} from "@/spy/components/templates/TimeConsumedTemplate.tsx";
import {MemoryConsumedTemplate} from "@/spy/components/templates/MemoryConsumedTemplate.tsx";
import {ViewCodeTemplate} from "@/spy/components/templates/ViewCodeTemplate.tsx";
import {DataTable} from "primereact/datatable";
import {FilterableSolution} from "@/spy/domain/model/FilterableSolution.ts";

type SolutionsExplorerProps = {
  submissions: Array<Submission>;
}

export const SolutionsExplorer = ({submissions}: SolutionsExplorerProps): ReactElement => {
  const acceptedSubmissions = submissions.filter(submission => submission.verdict === "OK");
  const filterableSolutions: Array<FilterableSolution> = acceptedSubmissions.map(
    submissions => ({ ...submissions, problemId: `${submissions.problem.contestId}${submissions.problem.index}` })
  );

  return (
    <div className="grid">
      <h2 className="font-bold mb-1">Search on {acceptedSubmissions.length} solutions using</h2>
      <ul className="list-disc list-inside mb-3">
        <li className="ml-2">The name of the problem (Ex. Watermelon).</li>
        <li className="ml-2">The problem id. If the link is <span className="italic">codeforces.com/contest/4/problem/A</span>, then the id is 4A.</li>
      </ul>
      <DataTable
        value={filterableSolutions}
        stripedRows
        paginator
        rows={50}
        rowsPerPageOptions={[10, 25, 50, 100]}
        filterDisplay="row"
        emptyMessage="The user has no submissions."
      >
        <Column
          field="problemId"
          header="Id"
          filter
          filterPlaceholder="Ex. 1930A"
          filterHeaderClassName="max-w-[210px]"
        />
        <Column
          field="problem.name"
          header="Problem name"
          filter
          filterPlaceholder="Search by name"
          filterHeaderClassName="min-w-[280px]"
        />
        <Column
          field="problem.rating"
          header="Rating"
          alignHeader="center"
          align="center"
        />
        <Column
          field="programmingLanguage"
          header="Language"
          alignHeader="center"
          align="center"
          body={ProgrammingLanguageTemplate}
        />
        <Column
          field="timeConsumedMillis"
          header="Time"
          alignHeader="center"
          align="center"
          body={TimeConsumedTemplate}
        />
        <Column
          field="memoryConsumedBytes"
          header="Memory"
          alignHeader="center"
          align="center"
          body={MemoryConsumedTemplate}
        />
        <Column
          header="View solution"
          alignHeader="center"
          align="center"
          body={ViewCodeTemplate}
        />
      </DataTable>
    </div>
  );
};