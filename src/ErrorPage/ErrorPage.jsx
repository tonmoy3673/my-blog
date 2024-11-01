import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center mt-5 lg:mt-12">
            <h2 className="py-2 mb-2 text-base md:text-2xl text-red-500 font-semibold">Oops! An Error Occurred! </h2>
            {
                error && (
                    <>
                    <h3 className="text-xl font-semibold">{error.status}</h3>
                    <h2 className="text-lg py-2">{error.statusText || error.message}</h2>
                
                    </>
                )
            }
            <Link to='/home'>
                <h2 className="underline text-xl py-2 ">Back to Homepage</h2>
            </Link>
            
        </div>
    );
};

export default ErrorPage;