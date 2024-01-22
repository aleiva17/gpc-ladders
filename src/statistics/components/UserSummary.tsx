import {ReactElement} from "react";
import {User} from "@/security/domain/models/User.ts";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {getColorStyleFromRank} from "@/statistics/services/CodeforcesColorService.ts";

type UserStatisticsCardProps = {
  user: User;
}

export const UserSummary = ({ user }: UserStatisticsCardProps): ReactElement => {
  const name = user.preferredProfilePicture ?? NormalizeHandlePipe.transform(user.handle);
  const imageUrl = user.preferredProfilePicture ?? user.titlePhoto;
  const highlightColor = getColorStyleFromRank(user.rank);

  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      <img
        className="rounded-full h-28 w-28 border-2 border-complementary-light dark:border-complementary-dark"
        src={imageUrl}
        alt={`${name} profile picture.`}
      />
      <div>
        <p style={highlightColor} className="capitalize font-medium">{user.rank}</p>
        <p
          style={highlightColor}
          className={
          `text-xl md:text-2xl font-semibold 
          ${ user.rank === "legendary grandmaster" && "first-letter:text-black" }
        `}>
          {name}
        </p>
        <p>Rating: <span style={highlightColor} className="font-medium">{user.rating}</span><span className="text-xs"> (Max. <span style={highlightColor}>{user.maxRank}, {user.maxRating}</span>)</span></p>
      </div>
    </div>
  );
};