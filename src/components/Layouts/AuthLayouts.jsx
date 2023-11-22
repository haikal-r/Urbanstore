import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return(
        <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
            <p className="font-medium text-slate-500 mb-4">
                Welcome, Please enter your detail
            </p>
           {children}
           { type === 'login' ? "Dont have account?" : "Allready have account?"}
           { type === 'login' && <Link to="/register" className="font-bold text-blue-500 hover:underline">Register</Link>}
           { type === 'register' && <Link to="/login" className="font-bold text-blue-500 hover:underline">Login</Link>}

        </div>
        </div>
    )
}

export default AuthLayouts;