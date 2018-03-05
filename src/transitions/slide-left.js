import { injectGlobal } from 'styled-components'

const transitionClassName = 'slide_left'
const duration = 600

injectGlobal`
.${transitionClassName}-enter {
  transform: translateX(-100vh);
  opacity: 0;
}
.${transitionClassName}-enter.${transitionClassName}-enter-active {
  opacity: 1;
  transform: translateX(0vh);
  transition: all ${duration}ms ease-in;
}
.${transitionClassName}-exit {
  transform: translateX(0);
  opacity: 1;
}
.${transitionClassName}-exit.${transitionClassName}-exit-active {
  opacity: 0;
  transform: translateX(100vh);
  transition: all ${duration}ms ease-in;
}
`

export default { transition: transitionClassName, duration }
