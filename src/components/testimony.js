import React from 'react'
import styled from 'styled-components'
// import global from '../globalStyles'

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 10px;
  margin: 0 5px;
  box-shadow: 3px 3px 10px #404040;
  background: white;
  width: 250px;
  min-height: 350px;
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
  <Card>
    <Text>{props.text}</Text>

    <br />
    <Author>- {props.author}</Author>
  </Card>
)

export default Testimony
