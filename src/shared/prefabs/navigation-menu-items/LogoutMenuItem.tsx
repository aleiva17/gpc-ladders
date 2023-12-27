import {ForwardedRef, forwardRef, ReactElement} from "react";
import {getMenuItemClassName, MenuItemProps} from "@/shared/prefabs/navigation-menu-items/utils.ts";
import {useUserStore} from "@/security/stores/useUserStore.ts";

export const LogoutMenuItem = forwardRef(
  ({ active }: MenuItemProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
    const logout = useUserStore(state => state.removeUser);

    return (
      <button
        ref={ref}
        onClick={logout}
        className={getMenuItemClassName(active)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
        </svg>
        <span>Logout</span>
      </button>
    );
  }
);