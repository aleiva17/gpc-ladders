import {ReactElement, Fragment, JSXElementConstructor} from "react";
import {Menu, Transition} from '@headlessui/react';
import {User} from "@/security/domain/models/User.ts";
import {dropdownMenuItemList} from "@/shared/data/dropdownMenuItemList.ts";
import {MenuItemProps} from "@/shared/prefabs/navigation-menu-items/utils.ts";

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
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="origin-top-right absolute right-0 top-12 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-darkest ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 dark:divide-gray-700 focus:outline-none">
          {
            dropdownMenuItemList.map((group: Array<JSXElementConstructor<MenuItemProps>>, index) =>
              <div className="py-1" key={index}>
                {
                  group.map((ElementStrategy, index) =>
                    <Menu.Item key={index}>
                      {({ active }) => <ElementStrategy active={active} />}
                    </Menu.Item>
                  )
                }
              </div>
            )
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
};