import {ReactElement} from "react";
import {PageNotFound} from "@/public/pages/PageNotFound.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes} from "@/routing/components/PrivateRoutes.tsx";
import {HomePage} from "@/public/pages/HomePage.tsx";
import {LoginPage} from "@/security/pages/LoginPage.tsx";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {useTheme} from "@/shared/hooks/useTheme.tsx";
import {SettingsPage} from "@/settings/pages/SettingsPage.tsx";
import {ListOfProblemGroupsPage} from "@/problems/pages/ListOfProblemGroupsPage.tsx";
import {ProblemGroupPage} from "@/problems/pages/ProblemGroupPage.tsx";
import {ProblemListPage} from "@/problems/pages/ProblemListPage.tsx";
import {CopyTrainingPage} from "@/copy-training/pages/CopyTrainingPage.tsx";
import {StatisticsPage} from "@/statistics/pages/StatisticsPage.tsx";
import {SpyPage} from "@/spy/pages/SpyPage.tsx";
import {AchievementsPage} from "@/achievements/pages/AchievementsPage.tsx";

export const AppRouter = (): ReactElement => {
  const userIsLogged = useUserStore(state => state.user !== null);
  const [,] = useTheme();

  return (
    <Routes>
      <Route element={ <PrivateRoutes canActivate={ userIsLogged } defaultDestination={"/login"} /> }>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/settings" element={ <SettingsPage /> } />
        <Route path="/problem-list">
          <Route path="" element={ <ListOfProblemGroupsPage /> } />
          <Route path=":groupId" element={ <ProblemGroupPage /> } />
          <Route path=":groupId/:listId" element={ <ProblemListPage /> } />
        </Route>
        <Route path="/copy-training" element={ <CopyTrainingPage /> } />
        <Route path="/statistics" element={ <StatisticsPage /> } />
        <Route path="/spy" element={ <SpyPage /> } />
        <Route path="/achievements" element={ <AchievementsPage /> } />
      </Route>
      <Route
        path="login"
        element={ userIsLogged ? <Navigate to="/" /> : <LoginPage /> }
      />
      <Route
        path="*"
        element={ <PageNotFound /> }
      />
    </Routes>
  );
};
