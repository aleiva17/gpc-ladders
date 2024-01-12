import {ReactElement} from "react";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {toast} from "react-toastify";

type SelectableIconProps = {
  iconUrl: string;
  onSelect: () => void;
}

export const SelectableIcon = ({ iconUrl, onSelect }: SelectableIconProps): ReactElement => {
  const { setPreferredProfilePicture } = useUserStore();

  const setProfilePicture = () => {
    setPreferredProfilePicture(iconUrl);
    toast.success("Profile icon changed successfully", { autoClose: 2000 });
    onSelect();
  }

  return (
    <button
      aria-label="Change profile picture"
      onClick={setProfilePicture}
      className="hover:cursor-pointer hover:scale-95 duration-200"
    >
      <img
        className="w-fit h-fit max-h-30 max-w-30 rounded-full border border-secondary"
        src={iconUrl}
        alt="An avatar image"
      />
    </button>
  );
};