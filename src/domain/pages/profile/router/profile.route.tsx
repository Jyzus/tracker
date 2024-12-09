import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoaderPage } from "../../../../shared/components/loader/loader-page.component";

export const ProfileRoutes = () => {
  const Profile = lazy(() => import("../profile.page"));

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};
