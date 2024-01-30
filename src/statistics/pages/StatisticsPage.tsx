import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {toast} from "react-toastify";
import {ProgressSpinner} from "primereact/progressspinner";
import {UserStatsContainer} from "@/statistics/components/UserStatsContainer.tsx";
import {User} from "@/security/domain/models/User.ts";
import {getUserInfoByHandle} from "@/security/services/LinkCodeforcesAccountService.ts";

export const StatisticsPage = (): ReactElement => {
  const handle = useUserStore(state => state.user!.handle);
  const updateUser = useUserStore(state => state.update);

  const [user, setUser] = useState<User | undefined>(undefined);
  const [submissions, setSubmissions] = useState<Array<Submission> | undefined>(undefined);

  useEffect(() => {
    getUserInfoByHandle(handle)
      .then(res => {
        setUser(res.data.result[0]);
        updateUser(res.data.result[0]);
        getSubmissions(handle)
          .then(userSubmissions => setSubmissions(userSubmissions))
          .catch(() => toast.error(`An error occurred retrieving your submissions`));
      })
      .catch(() => toast.error(`An error occurred retrieving your data`));
  }, []);

  return (
    <BaseLayout>
      <div className="flex justify-center bg-gray-50 dark:bg-dark h-full">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">My statistics</h1>
          <GoBackButton destination="/"/>
          {
            submissions && user
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