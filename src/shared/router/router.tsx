import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./private.router";
import { useAtomValue } from "jotai";
import { authState } from "../stores/auth/auth.store";
import { PublicRoutes } from "./public.router";

export const Router = () => {
  const auth = useAtomValue(authState);
  return (
    <BrowserRouter>
      <Routes>
        {auth && <Route path="/*" element={<PrivateRoutes />} />}
        {!auth && <Route path="/*" element={<PublicRoutes />} />}
      </Routes>
    </BrowserRouter>
  );
};
