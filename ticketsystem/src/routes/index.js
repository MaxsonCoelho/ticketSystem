import { Switch } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import Route from './Route';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
        </Switch>
    )
}