import {ReactElement} from "react";
import {CenteredLayout} from "@/shared/layouts/CenteredLayout.tsx";
import {ProfileCard} from "@/shared/components/ProfileCard.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {ConfigurationList} from "@/settings/components/ConfigurationList.tsx";

export const SettingsPage = (): ReactElement => {
  const { handle, preferredHandle, titlePhoto, preferredProfilePicture } = useUserStore(state => state.user!);

  return (
    <CenteredLayout>
      <div className="flex justify-center">
        <div className="bg-light dark:bg-darkest rounded-2xl drop-shadow-md max-w-screen-lg w-full p-6">
          <h2 className="text-2xl md:text-3xl font-bold border-gray-100 dark:border-complementary-dark border-b-2 pb-2 mb-6">Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
            <ProfileCard
              imageUrl={ preferredProfilePicture ?? titlePhoto }
              name={ preferredHandle ?? NormalizeHandlePipe.transform(handle) }
            />
            <ConfigurationList />
          </div>
        </div>
      </div>
    </CenteredLayout>
  );
};