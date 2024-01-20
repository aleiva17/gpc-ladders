import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {problemGroupList} from "@/problems/data/problem-group-list.ts";
import {problemLists} from "@/problems/data/problem-lists.ts";
import {ProblemListTable} from "@/problems/components/ProblemListTable.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {useSubmissions} from "@/problems/hooks/useSubmissions.tsx";
import {ProgressBar} from "primereact/progressbar";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {getFilterableProblemsFromProblemSubmissions} from "@/problems/services/SubmissionService.ts";
import {FilterableProblem} from "@/problems/domain/model/FilterableProblem.ts";

export const ProblemListPage = (): ReactElement => {
  const user = useUserStore(state => state.user);
  const { groupId, listId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [problems, setProblems] = useState<Array<FilterableProblem>>([]);
  const {
    acceptedSubmissions,
    wrongSubmissions,
  } = useSubmissions({
    username: user!.handle,
    onError: console.log
  });

  const countOfSolvedProblems = problems.filter(
    problem => acceptedSubmissions?.has(`${problem.contestId}${problem.index}`)
  ).length || 0;

  useEffect(() => {
    const key = `${groupId}-${listId}`;

    if (!Object.keys(problemGroupList).includes(groupId!) || !Object.keys(problemLists).includes(key)) {
      navigate("/error-404");
      return;
    }

    setTitle(problemLists[key].title);
    setProblems(getFilterableProblemsFromProblemSubmissions(problemLists[key].problems, acceptedSubmissions, wrongSubmissions));
  }, [groupId, listId, navigate, acceptedSubmissions, wrongSubmissions]);

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">{ title.length > 0 && title }</h1>
          <GoBackButton destination={`/problem-list/${groupId}`} />
          <ProgressBar
            value={ 100.0 * countOfSolvedProblems / problems.length }
            className="mb-4"
            displayValueTemplate={
              () => <span>{countOfSolvedProblems}/{problems.length}</span>
            }
          />
          <ProblemListTable problems={problems} />
        </div>
      </div>
    </BaseLayout>
  );
};