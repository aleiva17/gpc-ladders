import {ReactElement, useEffect, useRef, useState} from "react";
import {InputSwitch, InputSwitchChangeEvent} from "primereact/inputswitch";
import {Button} from "primereact/button";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {toast} from "react-toastify";

type ChangeProfilePictureProps = {
  openDialog: () => void;
}

export const ChangeProfilePicture = ({ openDialog }: ChangeProfilePictureProps): ReactElement => {
  const { user, setPreferredProfilePicture } = useUserStore();
  const pictureRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(user!.preferredProfilePicture !== undefined);

  useEffect(() => {
    if (user?.preferredProfilePicture) {
      pictureRef.current!.value =
        user.preferredProfilePicture.startsWith("/")
          ? ""
          : user.preferredProfilePicture
    }
  }, [user?.preferredProfilePicture]);

  const toggleChecked = ({ value }: InputSwitchChangeEvent): void => {
    setChecked(value);

    if (!value) {
      setPreferredProfilePicture(undefined);
      pictureRef.current!.value = "";
    }
  }

  const onSubmit = () => {
    if (pictureRef.current!.value.length === 0) {
      toast.error("You must enter a valid url.", { autoClose: 2000 });
      return;
    }
    setPreferredProfilePicture(pictureRef.current!.value);
    toast.success("Profile picture updated successfully", { autoClose: 2000 });
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <h3>Use custom profile picture: </h3>
        <InputSwitch
          checked={checked}
          onChange={toggleChecked}
        />
      </div>

      <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-[auto_auto_1fr] items-center mt-2 mb-5">
        <button
          className="flex justify-center items-center bg-[#06b6d4] hover:bg-[#059bb4] duration-300 rounded-lg text-white font-semibold disabled:opacity-50 whitespace-nowrap gap-2 px-4 py-2"
          disabled={!checked}
          onClick={openDialog}
        >
          <span>Select an icon</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
          </svg>
        </button>
        <span className="mx-2 text-center text-complementary-light dark:text-complementary-dark">or</span>
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <input
            ref={pictureRef}
            placeholder="Profile picture url"
            autoComplete={"off"}
            type="text"
            className="
            text-lg rounded-lg
            border-2 border-gray-200 disabled:opacity-50
            dark:bg-dark dark:border-complementary-dark
            w-full px-2 py-1
          "
            name="Profile picture url"
            disabled={!checked}
          />
          <Button
            label="Submit"
            className="p-2"
            disabled={!checked}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};