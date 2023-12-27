
export type MenuItemProps = {
  active: boolean;
}

export const getMenuItemClassName = (active: boolean): string => {
  return `
    flex items-center gap-3 w-full 
    ${ active ? "text-gpc-purple dark:text-gpc-aqua" : "text-complementary-light dark:text-complementary-dark" }
    hover:text-gpc-purple dark:hover:text-gpc-aqua
    px-4 py-2 
  `;
}