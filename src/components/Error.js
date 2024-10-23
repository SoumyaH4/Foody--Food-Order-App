import { useRouteError } from "react-router-dom";
const Error = () => {
    const err= useRouteError();
    console.log(err);
    return(
    <div className="error m-4 p-4">
        <h2 className="text-center font-bold text-xl">Oops! Something went wrong..</h2> 
    <h3>{err.status}: {err.statusText}</h3>
    </div>
    )
}

export default Error;