import {ReactElement} from "react";
import {problemGroups} from "@/problems/data/problem-groups.ts";
import {ProblemGroupCard} from "@/problems/components/ProblemGroupCard.tsx";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";

export const ListOfProblemGroupsPage = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">Problem list</h1>
          <GoBackButton destination="/" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              problemGroups.map(group =>
                <ProblemGroupCard
                  key={group.id}
                  problemList={group}
                />
              )
            }
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};