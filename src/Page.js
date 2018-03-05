import React from 'react'
import styled from 'styled-components'
import { fade, slideUp, slideLeft } from './transitions'

const Wrapper = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
`

const Button = styled.button`
background: white;
border: 2px solid;
height: 60px;
font-size: 30px;
border-radius: 30px;
cursor: pointer;
-webkit-tap-highlight-color: rgba(0,0,0,0);
padding: 0 30px;
&:focus {
  outline: none;
}
`

const GreenWrapper = Wrapper.extend`background-color: #8BC34A;`
export const Green = ({ history }) => (
  <GreenWrapper>
    <Button onClick={() => history.push({ pathname: '/yellow', state: fade })}>Go to yellow</Button>
    <Button onClick={() => history.push({ pathname: '/red', state: slideUp })}>Go to red</Button>
  </GreenWrapper>
)

const YellowWrapper = Wrapper.extend`background-color: #ffeb3b;`
export const Yellow = ({ history }) => (
  <YellowWrapper>
    <Button onClick={() => history.push({ pathname: '/green', state: slideLeft })}>Back</Button>
  </YellowWrapper>
)

const RedWrapper = Wrapper.extend`background-color: #f44336;`
export const Red = ({ history }) => (
  <RedWrapper>
    <Button onClick={() => history.push({ pathname: '/green', state: slideLeft })}>Back</Button>
  </RedWrapper>
)
