import {ForwardedRef, forwardRef, ReactElement} from "react";
import {getMenuItemClassName, MenuItemProps} from "@/shared/prefabs/navigation-menu-items/utils.ts";
import {Link} from "react-router-dom";

export const StatisticsMenuItem = forwardRef(
  ({ active }: MenuItemProps, ref: ForwardedRef<HTMLAnchorElement>): ReactElement => {
    return (
      <Link
        ref={ref}
        to="/statistics"
        className={getMenuItemClassName(active)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"/>
        </svg>
        <span>Statistics</span>
      </Link>
    )
  }
);