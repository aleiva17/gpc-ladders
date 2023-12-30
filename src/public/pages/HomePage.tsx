import {ReactElement} from "react";
import {CenteredLayout} from "@/shared/layouts/CenteredLayout.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {FeatureList} from "@/public/components/FeatureList.tsx";

export const HomePage = (): ReactElement => {
  const user = useUserStore(state => state.user!);
  const displayableName = user.preferredHandle ?? NormalizeHandlePipe.transform(user.handle);

  return (
    <CenteredLayout>
      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">Welcome back, {displayableName}!</p>
      <p className="mt-1 mb-4">Select one of the following options:</p>
      <FeatureList />
    </CenteredLayout>
  );
};