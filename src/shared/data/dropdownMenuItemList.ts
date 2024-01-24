import {JSXElementConstructor} from "react";
import {MenuItemProps} from "@/shared/prefabs/navigation-menu-items/utils.ts";
import {LogoutMenuItem} from "@/shared/prefabs/navigation-menu-items/LogoutMenuItem.tsx";
import {ThemeSwitcherMenuItem} from "@/shared/prefabs/navigation-menu-items/ThemeSwitcherMenuItem.tsx";
import {SettingsMenuItem} from "@/shared/prefabs/navigation-menu-items/SettingsMenuItem.tsx";
import {ProblemListMenuItem} from "@/shared/prefabs/navigation-menu-items/ProblemListMenuItem.tsx";
import {CopyTrainingMenuItem} from "@/shared/prefabs/navigation-menu-items/CopyTrainingMenuItem.tsx";
import {AchievementsMenuItem} from "@/shared/prefabs/navigation-menu-items/AchievementsMenuItem.tsx";
import {StatisticsMenuItem} from "@/shared/prefabs/navigation-menu-items/StatisticsMenuItem.tsx";
import {SpyMenuItem} from "@/shared/prefabs/navigation-menu-items/SpyMenuItem.tsx";

export const dropdownMenuItemList: Array<Array<JSXElementConstructor<MenuItemProps>>> = [
  [ProblemListMenuItem, CopyTrainingMenuItem, SpyMenuItem, StatisticsMenuItem, AchievementsMenuItem],
  [ThemeSwitcherMenuItem, SettingsMenuItem],
  [LogoutMenuItem]
];