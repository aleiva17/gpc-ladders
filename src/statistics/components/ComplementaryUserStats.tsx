import {ReactElement} from "react";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {UserBasicInfoCard} from "@/statistics/components/UserBasicInfoCard.tsx";
import {UnsolvedProblemsCard} from "@/statistics/components/UnsolvedProblemsCard.tsx";
import {getSetsOfSubmissionsFilteredByStatus, getUnsolvedProblems} from "@/problems/services/SubmissionService.ts";

type ComplementaryUserStatsProps = {
  user: User;
  submissions: Array<Submission>;
}

export const ComplementaryUserStats = ({user, submissions}: ComplementaryUserStatsProps): ReactElement => {
  const {wrongSubmissions} = getSetsOfSubmissionsFilteredByStatus(submissions);
  const unsolvedProblems = getUnsolvedProblems(submissions, wrongSubmissions);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <UserBasicInfoCard user={user} submissions={submissions} />
      <UnsolvedProblemsCard unsolvedProblems={unsolvedProblems} />
    </div>
  );
};