import { Fragment } from "react";
import { useLogin } from "../hooks/useLogin";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";

const ProfilePage = () => {
  const user = useLogin();
  console.log(user)
  return (
    <Fragment>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-16  w-full h-96">
        <p>Username : {user.username}</p>
      </div>
    </div>
    <Footer />
    </Fragment>
  );
};

export default ProfilePage;
