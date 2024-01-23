import {ComplementaryUserStats} from "@/statistics/components/ComplementaryUserStats.tsx";
import {DetailedUserStats} from "@/statistics/components/DetailedUserStats.tsx";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";


type UserStatsContainerProps = {
  user: User;
  submissions: Array<Submission>;
}

export const UserStatsContainer = ({user, submissions}: UserStatsContainerProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr] gap-4 lg:gap-6">
      <ComplementaryUserStats user={user} submissions={submissions}/>
      <DetailedUserStats submissions={submissions}/>
    </div>
  );
};