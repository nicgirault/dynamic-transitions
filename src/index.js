import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'

injectGlobal`
body {
  padding: 0;
  margin: 0;
  background: #333;
  font-family: Roboto;
}
`

ReactDOM.render(<App />, document.getElementById('root'))
