import {Outlet, Navigate} from "react-router-dom";
import {ReactElement} from "react";

type PrivateRoutesProps = {
  canActivate: boolean,
  destination: string
}

export const PrivateRoutes = ({ canActivate, destination }: PrivateRoutesProps): ReactElement => {
  return canActivate ? <Outlet /> : <Navigate to={ destination } />
}