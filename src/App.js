import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import React, { Fragment } from "react";
import './App.css';
import ScoreComponent from './components/ScoreComponent.tsx';
import PlayComponent from './components/PlayComponent.tsx';

function App() {
 
  return (
    <Fragment>
                <Switch>
                    <Route exact path="/welcome" component={PlayComponent} />
                    <Route exact path="/score" component={ScoreComponent} />
                    <Redirect from="/" to="/welcome" />
                </Switch>
            </Fragment> 
  );
}

export default withRouter(App);
