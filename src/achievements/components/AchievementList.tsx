import {ReactElement} from "react";
import {User} from "@/security/domain/models/User.ts";
import {AchievementCard} from "@/achievements/components/AchievementCard.tsx";
import {achievements} from "@/achievements/data/achievements.ts";
import {ValidationPayload} from "@/achievements/domain/model/ValidationPayload.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {BlogPost} from "@/achievements/domain/model/BlogPost.ts";
import {RatingChange} from "@/achievements/domain/model/RatingChange.ts";

type AchievementListProps = {
  user: User;
  submissions: Array<Submission>;
  blogPosts: Array<BlogPost>;
  contests: Array<RatingChange>;
}

export const AchievementList = ({user, submissions, blogPosts, contests}: AchievementListProps): ReactElement => {
  const payload: ValidationPayload = {
    user: user,
    submissions: submissions,
    acceptedSubmissions: submissions.filter(submission => submission.verdict === "OK"),
    blogPosts: blogPosts,
    ratingChanges: contests,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {
        achievements.map((achievement, id) => {
          const currentSteps = achievement.getCurrentSteps(payload);

          return (
            <AchievementCard
              key={id}
              title={achievement.title}
              description={achievement.description}
              imageUrl={achievement.imageUrl}
              currentSteps={currentSteps}
              totalSteps={achievement.totalSteps}
              badgeBorderStyle={achievement.badgeBorderStyle}
            />
          );
        })
      }
    </div>
  );
};