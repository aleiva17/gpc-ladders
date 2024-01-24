import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {ViewCodeTemplate} from "@/spy/components/templates/ViewCodeTemplate.tsx";
import {MemoryConsumedTemplate} from "@/spy/components/templates/MemoryConsumedTemplate.tsx";
import {TimeConsumedTemplate} from "@/spy/components/templates/TimeConsumedTemplate.tsx";
import {ProgrammingLanguageTemplate} from "@/spy/components/templates/ProgrammingLanguageTemplate.tsx";
import {VerdictTemplate} from "@/spy/components/templates/VerdictTemplate.tsx";

type SubmissionsTableProps = {
  submissions: Array<Submission>;
}

export const SubmissionsTable = ({submissions}: SubmissionsTableProps): ReactElement => {
  return (
    <div className="grid">
      <h2 className="font-bold mb-4">Most recent submissions:</h2>
      <div className="overflow-x-auto">
        <DataTable
          value={submissions}
          stripedRows
          size="small"
          paginator
          rows={50}
          rowsPerPageOptions={[10, 25, 50, 100]}
          emptyMessage="The user has no submissions."
        >
          <Column
            field="problem.name"
            header="Problem name"
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
            field="verdict"
            header="Verdict"
            alignHeader="center"
            align="center"
            body={VerdictTemplate}
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
            header="View code"
            alignHeader="center"
            align="center"
            body={ViewCodeTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};