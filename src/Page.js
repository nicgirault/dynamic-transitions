import React from 'react'
import styled from 'styled-components'
import { slide, scale } from './transitions'

const Wrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: ${props => props.color};
`

const Button = styled.button`
background: white;
border: 1px #333;
height: 60px;
font-size: 30px;
border-radius: 5px;
cursor: pointer;
padding: 0 30px;
margin: 10px 30px;
&:focus {
  outline: none;
}
`

const Footer = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
padding: 20px;
`

const Page = ({ history, to, ...props }) => (
  <Wrapper {...props}>
    <h1>Dynamic transitions</h1>
    <div>
      <Button onClick={() => history.push({ pathname: to, state: slide })}>Slide</Button>
      <Button onClick={() => history.push({ pathname: to, state: scale })}>Scale</Button>
    </div>
    <Footer>
      <a href='https://github.com/nicgirault/dynamic-transitions'>Source code</a>
      <a href='todo'>Related article</a>
    </Footer>
  </Wrapper>
)

export const Green = (props) => <Page color='#60d7a9' to='/yellow' {...props} />
export const Yellow = (props) => <Page color='#fdc162' to='/green' {...props} />

