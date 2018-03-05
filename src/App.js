import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

import Transitions from './transitions'
import { Green, Yellow, Red } from './Page'

const history = createHistory()
export default () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <Transitions transition='' duration={0} pageKey={location.pathname} {...location.state}>
          <Switch location={location}>
            <Route path='/green' component={Green} />
            <Route path='/yellow' component={Yellow} />
            <Route path='/red' component={Red} />
            <Redirect from='/' to='/green' />
          </Switch>
        </Transitions>
      )}
     />
  </Router>
)
