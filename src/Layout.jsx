import { Outlet } from "react-router-dom";
import Footer from "./components/layouts/footer";
import Navbar from "./components/layouts/navbar";

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <main className="flex-1 min-h-screen">
      {children}
      <Outlet />
    </main>
    <Footer />
    
    </>
    
  );
};

export default Layout;
