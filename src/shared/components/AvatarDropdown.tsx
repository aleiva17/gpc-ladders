import {ReactElement} from "react";
import { Menu } from '@headlessui/react';
import {Link} from "react-router-dom";
import {User} from "@/security/domain/models/User.ts";

type AvatarDropdownProps = {
  user: User
}

export const AvatarDropdown = ({ user }: AvatarDropdownProps): ReactElement => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex justify-center items-center group gap-2">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-900 dark:border-light group-hover:border-gpc-purple dark:group-hover:border-gpc-aqua duration-300">
          <div
            style={{ backgroundImage: `url(${ user.preferredProfilePicture ?? user.avatar })`}}
            className="h-full w-auto bg-center bg-contain bg-no-repeat">
          </div>
        </div>
        <span className="hidden md:flex font-semibold text-slate-900 dark:text-light group-hover:text-gpc-purple dark:group-hover:text-gpc-aqua duration-300">
          { user.handle }
        </span>
      </Menu.Button>
      <Menu.Items className="origin-top-right absolute right-0 top-12 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-darkest ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            <Link
              to="/"
              className="flex items-center w-full px-4 py-2 text-complementary-light dark:text-complementary-dark hover:text-gpc-purple dark:hover:text-gpc-aqua gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
              Example
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};