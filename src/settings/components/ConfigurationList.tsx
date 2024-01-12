import {ReactElement, useState} from "react";
import {ChangeHandleForm} from "@/settings/components/ChangeHandleForm.tsx";
import {ChangeProfilePicture} from "@/settings/components/ChangeProfilePicture.tsx";
import {ProfileIconsDialog} from "@/settings/components/ProfileIconsDialog.tsx";
import {ChangeTheme} from "@/settings/components/ChangeTheme.tsx";

export const ConfigurationList = (): ReactElement => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <section>
      <ProfileIconsDialog visible={showDialog} close={() => setShowDialog(false)} />
      <ChangeHandleForm />
      <ChangeProfilePicture openDialog={() => setShowDialog(true)} />
      <ChangeTheme />
    </section>
  );
};