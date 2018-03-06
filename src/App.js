import React from 'react'
import styled from 'styled-components'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

import Transitions from './transitions'
import { Green, Yellow } from './Page'

const Perspective = styled.div`
position: relative;
width: 100vw;
height: 100vh;
perspective: 1200px;
transform-style: preserve-3d;
`

const history = createHistory()
export default () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <Perspective>
          <Transitions pageKey={location.pathname} {...location.state}>
            <Switch location={location}>
              <Route path='/green' component={Green} />
              <Route path='/yellow' component={Yellow} />
              <Redirect from='/' to='/green' />
            </Switch>
          </Transitions>
        </Perspective>
      )}
     />
  </Router>
)
