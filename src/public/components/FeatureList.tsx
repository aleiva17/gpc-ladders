import {ReactElement} from "react";
import {FeatureLinkCard} from "@/public/components/FeatureLinkCard.tsx";

export const FeatureList = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <FeatureLinkCard
        destination="/problem-list"
        logoUrl="/training.png" logoAlt="Training logo"
        title="Problem list"
        description="Access a bunch of problems grouped by topics and rating level from different experts."
      />
      <FeatureLinkCard
        destination="/copy-training"
        logoUrl="/copy-training.png" logoAlt="Copy training logo"
        title="Copy training"
        description="Search and view in chronological order what problems other codeforces users have solved."
      />
      <FeatureLinkCard
        destination="/spy"
        logoUrl="/spy.png" logoAlt="Spy logo"
        title="Spy"
        description="Spies information on how other users are doing."
      />
      <FeatureLinkCard
        destination="/achievements"
        logoUrl="/achievements.png" logoAlt="Achievements logo"
        title="Achievements"
        description="Explore and share various challenges or achievements to boost your knowledge."
        isSmall={true}
      />
      <FeatureLinkCard
        destination="/statistics"
        logoUrl="/statistics.png" logoAlt="Statistics logo"
        title="Statistics"
        description="View relevant statistics to understand your overall performance."
        isSmall={true}
      />
      <FeatureLinkCard
        destination="/settings"
        logoUrl="/settings.png" logoAlt="Settings logo"
        title="Settings"
        description="Edit your profile configuration."
        isSmall={true}
      />
    </section>
  );
};