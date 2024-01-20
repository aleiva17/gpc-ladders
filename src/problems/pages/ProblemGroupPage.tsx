import {ReactElement, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {problemGroupList, ProblemGroupListContent} from "@/problems/data/problem-group-list.ts";
import {ProblemGroupDetail} from "@/problems/domain/model/ProblemGroupDetail.ts";
import {ProblemListCard} from "@/problems/components/ProblemListCard.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";

export const ProblemGroupPage = (): ReactElement => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [problemGroup, setProblemGroup] = useState<ProblemGroupDetail | undefined>();

  useEffect(() => {
    if (!Object.keys(problemGroupList).includes(groupId!)) {
      navigate("/error-404");
      return;
    }
    setProblemGroup(problemGroupList[groupId as keyof ProblemGroupListContent]);
  }, [groupId, navigate]);

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">{ problemGroup?.name }</h1>
          <GoBackButton destination="/problem-list" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              problemGroup?.problems.map(list =>
                <ProblemListCard
                  key={list.id}
                  id={list.id}
                  name={list.name}
                />
              )
            }
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};