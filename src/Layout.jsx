import { Outlet } from "react-router-dom";
import Footer from "./components/organism/Footer";
import Navbar from "./components/organism/Navbar";

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