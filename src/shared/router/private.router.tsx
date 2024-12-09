import { Route, Routes } from "react-router-dom";
import { TrackerRoutes } from "../../domain/pages/tracker/router/tracker.route";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<TrackerRoutes />} />
    </Routes>
  );
};
