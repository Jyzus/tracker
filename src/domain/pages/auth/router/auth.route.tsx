import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoaderPage } from "../../../../shared/components/loader/loader-page.component";

export const AuthRoutes = () => {
  const Login = lazy(() => import("../login.page"));

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
