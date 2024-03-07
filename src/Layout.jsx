import { Outlet } from "react-router-dom";
import Footer from "./components/organism/Footer";
import Navbar from "./components/organism/Navbar";


import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Toaster />
      <main className="flex-1">
        <section className="grid items-center gap-8 pb-8 pt-6 md:py-8 container max-w-6xl">
          {children}
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
