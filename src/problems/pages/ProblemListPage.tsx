import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {problemGroupList} from "@/problems/data/problem-group-list.ts";
import {problemLists} from "@/problems/data/problem-lists.ts";
import {ProblemListDetail} from "@/problems/domain/model/ProblemListDetail.ts";
import {ProblemListTable} from "@/problems/components/ProblemListTable.tsx";

export const ProblemListPage = (): ReactElement => {
  const { groupId, listId } = useParams();
  const navigate = useNavigate();
  const [problemList, setProblemList] = useState<ProblemListDetail | undefined>(undefined);

  useEffect(() => {
    const key = `${groupId}-${listId}`;

    if (!Object.keys(problemGroupList).includes(groupId!) || !Object.keys(problemLists).includes(key)) {
      navigate("/error-404");
      return;
    }
    setProblemList(problemLists[key]);
  }, [groupId, listId, navigate]);

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1
            className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">{problemList?.title}</h1>
          <Link
            to={`/problem-list/${groupId}`}
            className="group flex items-center hover:text-gpc-purple dark:hover:text-gpc-aqua font-semibold gap-1 text-lg w-fit mt-12 mb-8"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Go back</span>
          </Link>
          <ProblemListTable problems={problemList?.problems ?? []} />
        </div>
      </div>
    </BaseLayout>
  );
};