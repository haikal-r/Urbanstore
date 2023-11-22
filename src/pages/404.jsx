import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="font-bold text-3xl mb-3">Opps!</h1>
            <p className="font-medium text-lg my-2">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;