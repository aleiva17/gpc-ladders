import {ReactElement, useEffect, useRef, useState} from "react";
import {InputSwitch, InputSwitchChangeEvent} from 'primereact/inputswitch';
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {Button} from "primereact/button";
import {toast} from "react-toastify";

export const ChangeHandleForm = (): ReactElement => {
  const { user, setPreferredHandle } = useUserStore();
  const handleRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(user!.preferredHandle !== undefined);

  useEffect(() => {
    if (user?.preferredHandle) handleRef.current!.value = user?.preferredHandle;
  }, [user?.preferredHandle]);

  const toggleChecked = ({ value }: InputSwitchChangeEvent): void => {
    setChecked(value);

    if (!value) {
      setPreferredHandle(undefined);
      handleRef.current!.value = "";
    }
  }

  const onSubmit = (): void => {
    if (handleRef.current!.value.length === 0) {
      toast.error("You must enter a valid handle.", { autoClose: 2000 });
      return;
    }
    setPreferredHandle(handleRef.current!.value);
    toast.success("Handle changed successfully", { autoClose: 2000 });
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <h3>Use custom handle: </h3>
        <InputSwitch
          checked={checked}
          onChange={toggleChecked}
        />
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 mt-2 mb-5">
        <input
          ref={handleRef}
          placeholder="Handle name"
          autoComplete={"off"}
          type="text"
          className="
            text-lg rounded-lg
            border-2 border-gray-200 disabled:opacity-50
            dark:bg-dark dark:border-complementary-dark
            w-full px-2 py-1
          "
          name="Handle name"
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
  );
};