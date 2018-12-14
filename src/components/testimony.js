import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 10px;
  margin: ${props => (props.large ? '25px 0' : '0 5px')};
  box-shadow: 3px 3px 10px #404040;
  background: white;
  width: ${props => (props.large ? '100%' : '250px')};
  min-height: ${props => (props.large ? '100%' : '350px')};
  text-align: center;
`
const Text = styled.q`
  ::before,
  ::after {
    content: '\\201C';
    color: darkslategrey;
    font-weight: bolder;
    font-size: 18px;
  }
`
const Author = styled.em`
  q::before,
  q::after {
    content: '\\201C';
    color: darkslategrey;
    font-weight: bolder;
    font-size: 18px;
  }
`

const Testimony = props => (
  <Card {...props}>
    <Text>{props.text}</Text>
    <br />
    <Author>- {props.author}</Author>
  </Card>
)

export default Testimony
