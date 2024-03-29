import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({Component, isPrivate, ...rest}){

    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <div></div>
        )
    }

    //tentou acessar página privada e não tem login, continua no login
    if(!signed && isPrivate){
        return (
        <Redirect to="/" />
        )
    }

    //teve login e não é uma rota privada vai para o dashboard
    if(signed && !isPrivate){
        return (
        <Redirect to="/dashboard" />
        )
    }

    return(
        <Route 
            {...rest}
            render={ props => {
                <Component {...props} />
            }}
        />
    )
}