import { Route, Routes } from "react-router-dom";
import { TrackerRoutes } from "../../domain/pages/tracker/router/tracker.route";
import { AppLayout } from "../../domain/layouts/app/app.layout";
import { CalendarRoutes } from "../../domain/pages/calendar/router/calendar.route";
import { ProfileRoutes } from "../../domain/pages/profile/router/profile.route";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/*" element={<TrackerRoutes />} />
        <Route path="/calendar/*" element={<CalendarRoutes />} />
        <Route path="/profile/*" element={<ProfileRoutes />} />
      </Route>
    </Routes>
  );
};
