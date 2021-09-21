import React from 'react';
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/content/Home'
import AddNew from './components/content/AddNew'
import Table from './components/content/Table'

function Routes(props) {
    return ( 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/addNew' component={AddNew}/>
        <Route path='/table' component={Table}/>
        <Redirect from='*' to='/' />
    </Switch> );
}

export default Routes;