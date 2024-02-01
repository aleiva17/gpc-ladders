import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ProblemListTable} from "@/problems/components/ProblemListTable.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {useSubmissions} from "@/problems/hooks/useSubmissions.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {getFilterableProblemsFromProblemSubmissions} from "@/problems/services/SubmissionService.ts";
import {FilterableProblem} from "@/problems/domain/model/FilterableProblem.ts";
import {ProblemListProgressBar} from "@/problems/components/ProblemListProgressBar.tsx";
import {getProblemList} from "@/problems/services/ProblemService.ts";

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
    getProblemList(groupId!, listId!)
      .then(list => {
        setTitle(list.title);
        setProblems(getFilterableProblemsFromProblemSubmissions(list.problems, acceptedSubmissions, wrongSubmissions));
      })
      .catch(() => navigate("/error-404"));
  }, [groupId, listId, navigate, acceptedSubmissions, wrongSubmissions]);

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">{ title }</h1>
          <GoBackButton destination={`/problem-list/${groupId}`} />
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