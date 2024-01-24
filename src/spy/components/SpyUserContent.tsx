import {ReactElement} from "react";
import {ProgressSpinner} from "primereact/progressspinner";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {TabPanel, TabView} from "primereact/tabview";
import {UserStatsContainer} from "@/statistics/components/UserStatsContainer.tsx";
import {SubmissionsTable} from "@/spy/components/SubmissionsTable.tsx";
import {SolutionsExplorer} from "@/spy/components/SolutionsExplorer.tsx";
import {CompareWithMe} from "@/spy/components/CompareWithMe.tsx";


type SpyUserContentProps = {
  user: User | undefined;
  submissions: Array<Submission> | undefined;
  loading: boolean;
}

export const SpyUserContent = ({user, submissions, loading}: SpyUserContentProps): ReactElement => {

  if (loading) {
    return (
      <ProgressSpinner
        style={{width: '50px', height: '50px'}}
        strokeWidth="8"
        className="mt-6"
        animationDuration=".5s"
      />
    );
  }

  if (user === undefined || submissions === undefined) {
    return (
      <p className="font-medium text-complementary-light dark:text-complementary-dark text-xl text-center mt-6">
        Please, enter a Codeforces handle to start spying.
      </p>
    );
  }

  return (
    <section className="mt-6">
      <h2 className="font-bold text-3xl mb-6">You are spying <span className="text-gpc-purple dark:text-gpc-aqua">{NormalizeHandlePipe.transform(user.handle)}</span>:</h2>
      <div className="grid">
        <div className="overflow-x-auto">
          <TabView scrollable>
            <TabPanel header="Statistics" className="dark:text-white">
              <UserStatsContainer
                user={user}
                submissions={submissions}
              />
            </TabPanel>
            <TabPanel header="Compare with me">
              <CompareWithMe
                spiedUser={user}
                spiedSubmissions={submissions}
              />
            </TabPanel>
            <TabPanel header="All submissions">
              <SubmissionsTable submissions={submissions} />
            </TabPanel>
            <TabPanel header="Solutions explorer">
              <SolutionsExplorer submissions={submissions} />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </section>
);
};