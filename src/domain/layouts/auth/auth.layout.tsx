import { Outlet } from "react-router-dom";
import { config } from "../../../core/config/config";

export const AuthLayout = () => {
  const urlImage =
    "https://static.vecteezy.com/system/resources/previews/017/586/731/non_2x/natural-landscape-of-mountains-and-big-river-vector.jpg";
  return (
    <div
      className={`h-screen flex items-center justify-center`}
      style={{
        background: `url(${urlImage})`,
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md min-w-96">
        <h1 className="text-center font-bold text-2xl font-parkinsans">
          {config.NAME}
        </h1>
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
