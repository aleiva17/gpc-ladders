import {ReactElement} from "react";
import {useTheme} from "@/shared/hooks/useTheme.tsx";

export const ChangeTheme = (): ReactElement => {
  const [, setTheme] = useTheme();

  return (
    <div className="flex items-center gap-4">
      <h3>Change app theme:</h3>
      <div className="flex font-medium text-complementary-light dark:text-complementary-dark gap-2">
        <button
          onClick={() => setTheme("light")}
          className="hover:text-[#059bb4] hover:bg-gray-200 dark:hover:bg-gray-300 rounded-full px-4 py-1"
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="hover:text-[#059bb4] hover:bg-gray-200 dark:hover:bg-gray-300 rounded-full px-4 py-1"
        >
          Dark
        </button>
      </div>
    </div>
  );
};