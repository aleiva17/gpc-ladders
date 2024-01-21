import {ReactElement, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {SearchHandleForm} from "@/shared/components/SearchHandleForm.tsx";
import {ProblemListTable} from "@/problems/components/ProblemListTable.tsx";
import {FilterableProblem} from "@/problems/domain/model/FilterableProblem.ts";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {useSubmissions} from "@/problems/hooks/useSubmissions.tsx";
import {ProblemListProgressBar} from "@/problems/components/ProblemListProgressBar.tsx";
import {
  getFilterableProblemsFromSubmissions,
  getSubmissions
} from "@/problems/services/SubmissionService.ts";
import {toast} from "react-toastify";

export const CopyTrainingPage = (): ReactElement => {
  const user = useUserStore(state => state.user)!;
  const [handle, setHandle] = useState<string>("");
  const {
    acceptedSubmissions,
    wrongSubmissions
  } = useSubmissions({
    username: user.handle,
    onError: console.log
  });

  const [problems, setProblems] = useState<Array<FilterableProblem>>([]);
  const countOfSolvedProblems = problems.filter(
    problem => acceptedSubmissions.has(`${problem.contestId}${problem.index}`)
  ).length || 0;


  const onSearch = (handle: string) => {
    const toastId = toast.loading(`Retrieving data from ${handle}`);

    getSubmissions(handle)
      .then(submissions => {
        setHandle(handle);
        toast.update(toastId, {
          render: "Data retrieved successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        setProblems(getFilterableProblemsFromSubmissions(submissions, acceptedSubmissions, wrongSubmissions));
      })
      .catch((error) => {
        toast.update(toastId, {
          render: `Error: ${error}`,
          type: "error",
          isLoading: false,
          autoClose: 3000
        });
      });
  }

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-xl w-full p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">Copy training</h1>
          <GoBackButton destination="/" />
          <SearchHandleForm onSearch={onSearch} clearAfterSearch={true} />
          {
            handle.length > 0 && <h2 className="text-xl font-bold mt-2 mb-3">{handle}'s solved problems:</h2>
          }
          <ProblemListProgressBar
            numberOfSolvedProblems={countOfSolvedProblems}
            totalNumberOfProblems={problems.length}
          />
          <ProblemListTable problems={problems} />
        </div>
      </div>
    </BaseLayout>
  );
};