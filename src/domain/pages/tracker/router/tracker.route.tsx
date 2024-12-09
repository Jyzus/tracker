import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoaderPage } from "../../../../shared/components/loader/loader-page.component";

export const TrackerRoutes = () => {
  const Tracker = lazy(() => import("../tracker.page"));

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/" element={<Tracker />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
};
