import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoaderPage } from "../../../../shared/components/loader/loader-page.component";

export const CalendarRoutes = () => {
  const Calendar = lazy(() => import("../calendar.page"));

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </Suspense>
  );
};
