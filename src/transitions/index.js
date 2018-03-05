import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = (props) => child => React.cloneElement(child, props)

export default ({ transition, duration, pageKey, children }) => (
  <TransitionGroup
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition
      key={pageKey}
      classNames={transition}
      timeout={duration}
    >
      { children }
    </CSSTransition>
  </TransitionGroup>
)

export { default as fade } from './fade'
export { default as slideUp } from './slide-up'
export { default as slideLeft } from './slide-left'
