import {ReactElement} from "react";
import {AppToolbar} from "@/shared/components/AppToolbar.tsx";

type BaseLayoutProps = {
  children? : ReactElement | Array<ReactElement>
}

export const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  return (
    <div
      className="grid grid-rows-[auto_1fr] bg-gray-50 dark:bg-dark dark:text-white min-h-screen"
    >
      <AppToolbar />
      <main>{ children }</main>
    </div>
  );
};