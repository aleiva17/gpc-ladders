import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {toast} from "react-toastify";
import {ProgressSpinner} from "primereact/progressspinner";
import {UserStatsContainer} from "@/statistics/components/UserStatsContainer.tsx";

export const StatisticsPage = (): ReactElement => {
  const user = useUserStore(state => state.user)!;
  const [submissions, setSubmissions] = useState<Array<Submission> | undefined>(undefined);

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
          {
            submissions
              ?
              <UserStatsContainer user={user} submissions={submissions} />
              :
              <ProgressSpinner
                style={{width: '50px', height: '50px'}}
                strokeWidth="8"
                animationDuration=".5s"
              />
          }
        </div>
      </div>
    </BaseLayout>
  );
};