import React from 'react'
import styled from 'styled-components'
import global from '../globalStyles'
import { Link } from 'gatsby'

const Btn1 = styled.button`
  background-color: ${global.colors.accent1};
  border: none;
  border-radius: 5px;
  box-shadow: ${props => (props.isPushed ? 'none' : '3px 3px 10px #404040')};
  margin: 10px;
  :hover {
    transform: scale(1.075, 1.075);
  }
`

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`

class LinkButton extends React.Component {
  constructor(props) {
    super(props)
    this.push = this.push.bind(this)
    this.state = {
      isPushed: false,
    }
  }

  push() {
    this.setState({ isPushed: !this.state.isPushed })
  }

  render() {
    return (
      <Btn1
        isPushed={this.state.isPushed}
        onMouseDown={this.push}
        onMouseUp={this.push}
        onMouseLeave={() => {
          this.setState({ isPushed: false })
        }}
      >
        <LinkText to={this.props.linkTo}>{this.props.children}</LinkText>
      </Btn1>
    )
  }
}

export default LinkButton
