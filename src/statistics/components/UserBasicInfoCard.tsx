import {ReactElement} from "react";
import {User} from "@/security/domain/models/User.ts";
import {UserSummary} from "@/statistics/components/UserSummary.tsx";
import {CommunityStats} from "@/statistics/components/CommunityStats.tsx";
import {ProgrammingLanguagesStats} from "@/statistics/components/ProgrammingLanguagesStats.tsx";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {TopSkillsStats} from "@/statistics/components/TopSkillsStats.tsx";

type UserBasicInfoCardProps = {
  user: User;
  submissions: Array<Submission>;
}

export const UserBasicInfoCard = ({user, submissions}: UserBasicInfoCardProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full max-w-sm rounded-xl drop-shadow p-4 md:p-6">
      <UserSummary user={user}/>
      <hr className="my-4 md:my-6"/>
      <CommunityStats user={user}/>
      <hr className="my-4 md:my-6"/>
      <ProgrammingLanguagesStats submissions={submissions}/>
      <hr className="my-4 md:my-6"/>
      <TopSkillsStats submissions={submissions} count={5}/>
    </div>
  );
};