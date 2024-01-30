import {ReactElement, useEffect, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {AchievementList} from "@/achievements/components/AchievementList.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {getAllBlogPosts} from "@/achievements/services/BlogEntriesService.ts";
import {BlogPost} from "@/achievements/domain/model/BlogPost.ts";
import {getAllContestByHandle} from "@/achievements/services/ContestService.ts";
import {RatingChange} from "@/achievements/domain/model/RatingChange.ts";
import {User} from "@/security/domain/models/User.ts";
import {getUserInfoByHandle} from "@/security/services/LinkCodeforcesAccountService.ts";
import {ProgressSpinner} from "primereact/progressspinner";

export const AchievementsPage = (): ReactElement => {
  const handle = useUserStore(state => state.user!.handle);
  const updateUser = useUserStore(state => state.update);

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [submissions, setSubmissions] = useState<Array<Submission>>([]);
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);
  const [contests, setContests] = useState<Array<RatingChange>>([]);

  useEffect(() => {
    const getData = async () => {
      const updatedUser: User = (await getUserInfoByHandle(handle)).data.result[0] as User;
      updateUser(updatedUser);
      setUser(updatedUser);

      setSubmissions(await getSubmissions(updatedUser.handle));
      setBlogPosts(await getAllBlogPosts(updatedUser.handle));
      setContests(await getAllContestByHandle(updatedUser.handle));

      setLoading(false);
    }

    getData();
  }, []);

  return (
    <BaseLayout>
      <div className="flex justify-center bg-gray-50 dark:bg-dark h-full">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">Achievements</h1>
          <GoBackButton destination="/" />
          {
            loading || user === undefined
            ?
              <div className="flex flex-col items-center">
                <ProgressSpinner
                  style={{width: '50px', height: '50px'}}
                  strokeWidth="8"
                  className="mt-6"
                  animationDuration=".5s"
                />
                <p className="mt-2 text-complementary-light dark:text-complementary-dark">Retrieving and analyzing your data...</p>
              </div>
              :
              <AchievementList
                user={user}
                submissions={submissions}
                blogPosts={blogPosts}
                contests={contests}
              />
          }
        </div>
      </div>
    </BaseLayout>
  );
};