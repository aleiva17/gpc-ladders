import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {BlogPost} from "@/achievements/domain/model/BlogPost.ts";
import {RatingChange} from "@/achievements/domain/model/RatingChange.ts";

export interface ValidationPayload {
  user: User;
  submissions: Array<Submission>;
  acceptedSubmissions: Array<Submission>;
  blogPosts: Array<BlogPost>;
  ratingChanges: Array<RatingChange>;
}