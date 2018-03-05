import { injectGlobal } from 'styled-components'

const transitionClassName = 'fade'
const duration = 1000

injectGlobal`
.${transitionClassName}-enter {
  opacity: 1;
}
.${transitionClassName}-exit.${transitionClassName}-exit-active {
  opacity: 1;
  transition: all ${duration}ms ease-in;
}
.${transitionClassName}-exit {
  opacity: 1;
}
.${transitionClassName}-exit.${transitionClassName}-exit-active {
  opacity: 0;
  transition: all ${duration}ms ease-in;
}
`

export default { transition: transitionClassName, duration }
