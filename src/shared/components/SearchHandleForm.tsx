import {FormEvent, ReactElement, useRef} from "react";
import {Button} from "primereact/button";
import {toast} from "react-toastify";

type SearchHandleSubmissionsFormProps = {
  onSearch: (handle: string) => void;
  clearAfterSearch?: boolean
}

export const SearchHandleForm = ({onSearch, clearAfterSearch}: SearchHandleSubmissionsFormProps): ReactElement => {
  const handleRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleRef.current === null) {
      return;
    }

    if (handleRef.current.value.length === 0) {
      toast.error("You must enter a valid handle.", { autoClose: 2000 });
      return;
    }

    onSearch(handleRef.current.value);
    clearAfterSearch && (handleRef.current.value = "");
  }

  return (
    <form
      className="grid grid-cols-[1fr_auto] items-center gap-4 mb-4"
      onSubmit={onSubmit}
    >
      <input
        ref={handleRef}
        placeholder="Codeforces handle"
        autoComplete="off"
        type="text"
        className="
          text-lg rounded-lg
          border-2 border-gray-200 disabled:opacity-50
          dark:bg-dark dark:border-complementary-dark
          w-full px-2 py-1
        "
        name="Handle name"
      />
      <Button
        label="Submit"
        className="p-2"
      />
    </form>
  );
};