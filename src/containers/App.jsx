import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";

import Articles from './articles/index'
import View from './articles/view'

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Articles} />
                        <Route exact path="/view" component={View} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App