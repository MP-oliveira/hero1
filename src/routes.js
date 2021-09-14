import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import React from 'react'

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes

