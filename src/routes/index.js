import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Albums from '../views/albums'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Albums} />
            <Route exact path="/album" component={Albums} />
        </Switch>
    )
}