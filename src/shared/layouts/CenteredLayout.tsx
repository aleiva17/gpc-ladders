import {ReactElement} from "react";
import {AppToolbar} from "@/shared/components/AppToolbar.tsx";

type CenteredLayoutProps = {
  children? : ReactElement | Array<ReactElement>
}

export const CenteredLayout = ({ children }: CenteredLayoutProps): ReactElement => {
  return (
    <div
      className="grid grid-rows-[auto_1fr] bg-gray-50 dark:bg-dark dark:text-white min-h-screen"
    >
      <AppToolbar />
      <div className="flex justify-center items-center">
        <main className="max-w-screen-2xl w-full p-4">{children}</main>
      </div>
    </div>
  );
};