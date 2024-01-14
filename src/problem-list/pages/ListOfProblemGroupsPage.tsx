import {ReactElement} from "react";
import {Link} from "react-router-dom";
import {problemList} from "@/problem-list/data/problem-list.ts";
import {ProblemListCard} from "@/problem-list/components/ProblemListCard.tsx";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";

export const ListOfProblemGroupsPage = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">Problem list</h1>
          <Link
            to="/"
            className="group flex items-center hover:text-gpc-purple dark:hover:text-gpc-aqua font-semibold gap-1 text-lg w-fit mt-12 mb-8"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Go back</span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              problemList.map(list =>
                <ProblemListCard
                  key={list.id}
                  problemList={list}
                />
              )
            }
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};