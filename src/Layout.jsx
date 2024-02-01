import { Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";

const Layout = ({ children }) => {
  return(
    <div>
    <Navbar />
    <main>
      {children}
      <Outlet />
    </main>
    <Footer />
    </div>
    

  )
}

export default Layout;