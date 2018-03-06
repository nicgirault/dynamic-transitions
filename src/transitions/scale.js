import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'scale'
const duration = 600

const moveFromRight = keyframes`
from { transform: translateX(100%); }
`
const scaleDown = keyframes`
to { opacity: 0; transform: scale(.8); }
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: relative;
}
.${transitionClassName}-enter-active {
  animation: ${moveFromRight} ${duration}ms ease both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${scaleDown} ${duration}ms ease both;
  z-index: 1;
}
`

export default { transition: transitionClassName, duration }
