import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar";

export const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="flex bg-gray-950 h-screen text-white">
      <Sidebar />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="py-4 pr-4 overflow-auto w-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
