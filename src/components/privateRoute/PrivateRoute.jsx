import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;