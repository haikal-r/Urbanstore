import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const user = useLogin();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-16  w-full h-96">
        <p>Username : {user.username}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
