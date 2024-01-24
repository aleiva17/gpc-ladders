import {Submission} from "@/problems/domain/model/Submission.ts";
import {User} from "@/security/domain/models/User.ts";

export interface UserStatsData {
  submissions: Array<Submission>;
  user: User;
}