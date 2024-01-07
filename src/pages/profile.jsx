import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin()
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-16 bg-red-500 w-full h-96">
            <h1>hwihaefoaef</h1>
            Username : {username}
            </div>
        </div>
    )
}

export default ProfilePage;