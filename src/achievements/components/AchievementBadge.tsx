import {CSSProperties, ReactElement} from "react";
import {Atropos} from "atropos/react";
import {ConditionalWrapper} from "@/shared/components/ConditionalWrapper.tsx";

type AchievementBadgeProps = {
  completed: boolean;
  imageUrl: string;
  borderStyle: CSSProperties;
}

export const AchievementBadge = ({completed, imageUrl, borderStyle}: AchievementBadgeProps): ReactElement => {
  return (
    <ConditionalWrapper
      condition={completed}
      wrapper={
        (children) =>
          <Atropos
            innerClassName="p-1"
            shadow={false}
            highlight={false}
            rotateXMax={25}
            rotateYMax={25}
            className="drop-shadow-2xl"
          >
            {children}
          </Atropos>
      }
    >
      <div className="p-3 rounded-full w-fit" style={completed ? borderStyle : {backgroundColor: "#737373"}}>
        <div
          className={`h-32 w-32 bg-center bg-cover bg-no-repeat ${!completed && "grayscale"} rounded-full`}
          data-atropos-offset="3"
          style={{backgroundImage: `url("${imageUrl}")`}}
        />
      </div>
    </ConditionalWrapper>
  );
};