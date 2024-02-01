import {ReactElement, useEffect, useState} from "react";
import {ProblemGroupCard} from "@/problems/components/ProblemGroupCard.tsx";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {getAllProblemGroups} from "@/problems/services/ProblemService.ts";
import {ProblemGroup} from "@/problems/domain/model/ProblemGroup.ts";
import {toast} from "react-toastify";

export const ListOfProblemGroupsPage = (): ReactElement => {
  const [problemGroups, setProblemGroups] = useState<Array<ProblemGroup>>([]);

  useEffect(() => {
    getAllProblemGroups()
      .then(setProblemGroups)
      .catch(toast.error);
  }, []);

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