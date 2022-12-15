import React from "react";
import { Switch, Route } from 'react-router-dom'

export default () => {
     
    return(
        <Switch>
            <Route exact path="/">
               pagina Home
            </Route>

            <Route exact path="/login">
               pagina Login
            </Route>
        </Switch>
    );
}