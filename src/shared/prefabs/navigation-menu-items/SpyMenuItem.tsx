import {ForwardedRef, forwardRef, ReactElement} from "react";
import {getMenuItemClassName, MenuItemProps} from "@/shared/prefabs/navigation-menu-items/utils.ts";
import {Link} from "react-router-dom";

export const SpyMenuItem = forwardRef(
  ({ active }: MenuItemProps, ref: ForwardedRef<HTMLAnchorElement>): ReactElement => {
    return (
      <Link
        ref={ref}
        to="/spy"
        className={getMenuItemClassName(active)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"/>
          <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"/>
          <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"/>
        </svg>
        <span>Spy</span>
      </Link>
    );
  }
)