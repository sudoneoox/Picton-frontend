import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import AdminDashboard from "@/Pages/dashboard/Dashboard";

const Layout = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  console.log("DEBUG: current pathname -> ", pathname);

  return (
    <div className="app-container">
      {/* DONT SHOW NAVBAR ON DASHBOARDS */}
      {pathname === "/admin/dashboard" || pathname === "/dashboard" ? (
        <>
          <AdminDashboard />
        </>
      ) : (
        <>
          <Navbar />
          <main className={`main-content-container`}>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
