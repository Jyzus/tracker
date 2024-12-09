import { Route, Routes } from "react-router-dom";
import { TrackerRoutes } from "../../domain/pages/tracker/router/tracker.route";
import { AppLayout } from "../../domain/layouts/app/app.layout";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/*" element={<TrackerRoutes />} />
      </Route>
    </Routes>
  );
};
