import {ReactElement} from "react";
import {User} from "@/security/domain/models/User.ts";
import {UserSummary} from "@/statistics/components/UserSummary.tsx";
import {CommunityStats} from "@/statistics/components/CommunityStats.tsx";
import {ProgrammingLanguagesStats} from "@/statistics/components/ProgrammingLanguagesStats.tsx";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {TopSkillsStats} from "@/statistics/components/TopSkillsStats.tsx";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";

type UserBasicInfoCardProps = {
  user: User;
  submissions: Array<Submission>;
}

export const UserBasicInfoCard = ({user, submissions}: UserBasicInfoCardProps): ReactElement => {
  const uniqueAcceptedSubmissions = getUniqueAcceptedSubmissions(submissions);

  return (
    <div className="bg-white dark:bg-darkest w-full h-fit rounded-xl drop-shadow p-4 md:p-6">
      <UserSummary user={user}/>
      <hr className="my-4 md:my-6"/>
      <CommunityStats user={user}/>
      <hr className="my-4 md:my-6"/>
      <ProgrammingLanguagesStats submissions={uniqueAcceptedSubmissions}/>
      <hr className="my-4 md:my-6"/>
      <TopSkillsStats submissions={uniqueAcceptedSubmissions} count={5}/>
    </div>
  );
};