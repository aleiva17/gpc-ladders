import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {useParams} from "react-router-dom";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {getUserInfoByHandle} from "@/security/services/LinkCodeforcesAccountService.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {toast} from "react-toastify";
import {UserStatsContainer} from "@/statistics/components/UserStatsContainer.tsx";
import {ProgressSpinner} from "primereact/progressspinner";

export const ShareProfilePage = (): ReactElement => {
  const handle = (useParams().handle!);

  const [user, setUser] = useState<User | undefined>(undefined);
  const [submissions, setSubmissions] = useState<Array<Submission> | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getUserInfoByHandle(handle)
      .then(res => {
        setUser(res.data.result[0]);
        getSubmissions(handle)
          .then(userSubmissions => setSubmissions(userSubmissions))
          .catch(() => {
            setError(true);
            toast.error(`An error occurred retrieving your submissions`)
          });
      })
      .catch(() => {
        setError(true);
        toast.error(`An error occurred retrieving your data`)
      });
  }, []);

  return (
    <BaseLayout>
      <div className="flex justify-center bg-gray-50 dark:bg-dark h-full">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center mb-8">{NormalizeHandlePipe.transform(handle)}'s statistics</h1>
          {
            error
              ?
              <div className="text-lg text-center font-medium text-complementary-light dark:text-complementary-dark">
                <p>Looks like the handle no longer exists or there's a problem connecting to Codeforces.</p>
                <p>Please, try again later.</p>
              </div>
              :
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