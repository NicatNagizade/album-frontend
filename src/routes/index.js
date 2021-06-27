import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Albums from '../views/albums'
import Photos from '../views/photos'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Albums} />
            <Route exact path="/album" component={Albums} />
            <Route exact path="/album/:id/photo" component={Photos} />
        </Switch>
    )
}