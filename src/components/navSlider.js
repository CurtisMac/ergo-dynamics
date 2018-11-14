import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Parent = styled.nav`
  background-color: lightgrey;
  min-width: 250px;
  position: absolute;
  height: 100vh;
  z-index: 1;
  right: 0;
`

class NavSlider extends React.Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
    this.createLinks = this.createLinks.bind(this)
  }

  click() {
    this.props.close()
  }

  createLinks() {
    const links = this.props.menuLinks
    return links.map((linkObj, i) => {
      return (
        <li key={i}>
          <Link>{linkObj.name}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <Parent>
        <div>
          <em onClick={this.click}>X</em>
        </div>
        <ul>{this.createLinks()}</ul>
      </Parent>
    )
  }
}

export default NavSlider
