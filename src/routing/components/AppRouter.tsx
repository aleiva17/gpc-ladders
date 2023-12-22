import {ReactElement} from "react";
import {PageNotFound} from "@/public/pages/PageNotFound.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes} from "@/routing/components/PrivateRoutes.tsx";
import {HomePage} from "@/public/pages/HomePage.tsx";
import {LoginPage} from "@/security/pages/LoginPage.tsx";

export const AppRouter = (): ReactElement => {
  const userIsLogged = true;

  return (
    <Routes>
      <Route element={ <PrivateRoutes canActivate={ userIsLogged } defaultDestination={"/login"} /> }>
        <Route path="/" element={ <HomePage /> } />
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
