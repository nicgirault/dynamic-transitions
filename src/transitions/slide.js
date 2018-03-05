import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slide'
const duration = 1000

const slideOut = keyframes`
0% { }
25% { opacity: .5; transform: translateZ(-500px); }
75% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
100% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
`
const slideIn = keyframes`
0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(200%); }
75% { opacity: .5; transform: translateZ(-500px); }
100% { opacity: 1; transform: translateZ(0) translateX(0); }
`
injectGlobal`
.${transitionClassName}-exit-active {
  animation: ${slideOut} ${duration}ms both ease;
}
.${transitionClassName}-enter-active {
  animation: ${slideIn} ${duration}ms both ease;
}
`

export default { transition: transitionClassName, duration }
