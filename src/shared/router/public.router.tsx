import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../domain/pages/auth/router/auth.route";
import { AuthLayout } from "../../domain/layouts/auth/auth.layout";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<Navigate to={"/auth"} />} />
      </Route>
    </Routes>
  );
};
