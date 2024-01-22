import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {toast} from "react-toastify";
import {DetailedUserStats} from "@/statistics/components/DetailedUserStats.tsx";
import {ComplementaryUserStats} from "@/statistics/components/ComplementaryUserStats.tsx";

export const StatisticsPage = (): ReactElement => {
  const user = useUserStore(state => state.user)!;
  const [submissions, setSubmissions] = useState<Array<Submission>>([]);

  useEffect(() => {
    getSubmissions(user.handle)
      .then(userSubmissions => setSubmissions(userSubmissions))
      .catch(error => toast.error(`Error: ${error}`));
  }, []);

  return (
    <BaseLayout>
      <div className="flex justify-center bg-gray-50 dark:bg-dark h-full">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">My statistics</h1>
          <GoBackButton destination="/"/>
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr] gap-4 lg:gap-6">
            <ComplementaryUserStats user={user} submissions={submissions} />
            <DetailedUserStats submissions={submissions} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};