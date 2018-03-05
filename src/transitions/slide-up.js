import { injectGlobal } from 'styled-components'

const transitionClassName = 'slide_up'
const duration = 600

injectGlobal`
.${transitionClassName}-enter {
  transform: translateY(100vh);
  opacity: 0;
}
.${transitionClassName}-enter.${transitionClassName}-enter-active {
  opacity: 1;
  transform: translateY(0vh);
  transition: all ${duration}ms ease-in;
}
.${transitionClassName}-exit {
  transform: translateY(0);
  opacity: 1;
}
.${transitionClassName}-exit.${transitionClassName}-exit-active {
  opacity: 0;
  transform: translateY(-100vh);
  transition: all ${duration}ms ease-in;
}
`

export default { transition: transitionClassName, duration }
