import {ReactElement} from "react";
import {Dialog} from 'primereact/dialog';
import {appIconGroups} from "@/settings/data/appIcons.ts";
import {IconGroup} from "@/settings/components/IconGroup.tsx";


type ProfileIconsDialog = {
  visible: boolean;
  close: () => void;
}

export const ProfileIconsDialog = ({ visible, close }: ProfileIconsDialog): ReactElement => {
  return (
    <Dialog
      visible={visible}
      onHide={close}
      resizable={false}
      draggable={false}
      className="w-5/6 md:w-1/2"
      header="Select an icon"
    >
      <div className="flex flex-col gap-6">
        {
          appIconGroups.map((group, id) =>
            <IconGroup
              key={id}
              group={group}
              onIconSelect={close}
            />
          )
        }
      </div>
    </Dialog>
  );
};