import React from 'react'
import styled from 'styled-components'
import global from '../globalStyles'

const Btn1 = styled.button`
  background-color: ${global.colors.accent1};
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #404040;
  margin: 10px;
`

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPushed: false,
    }
  }
  render() {
    return <Btn1>{this.props.children}</Btn1>
  }
}

export default Button
