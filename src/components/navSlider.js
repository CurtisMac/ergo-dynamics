import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Transition } from 'react-spring'

const Parent = styled.nav`
  background-color: lightgrey;
  min-width: 250px;
  position: absolute;
  height: 100vh;
  z-index: 1;
  right: 0;
`
const CloseButton = styled.button`
  height: 18px;
  line-height: 18px;
  background: none;
  margin: 5px 15px;
  padding: 0;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    color: rgba(0, 0, 0, 1);
  }
`

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
`
const ListItem = styled.li`
  background-color: rgba(169, 169, 169, 0.5);
  margin: 0;
  padding: 5px 15px;
  border-bottom: 1px solid rgb(169, 169, 169);
  :first-child {
    border-top: 1px solid rgb(169, 169, 169);
  }
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: rgba(169, 169, 169, 1);
    transform: scale(1.1);
  }
`
const LinkText = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`

class NavSlider extends React.Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
    this.createLinks = this.createLinks.bind(this)
  }

  close() {
    this.props.close()
  }

  createLinks() {
    const links = this.props.menuLinks
    return links.map((linkObj, i) => {
      return (
        <ListItem key={i}>
          <LinkText to={linkObj.link} onClick={this.close}>
            {linkObj.name}
          </LinkText>
        </ListItem>
      )
    })
  }

  render() {
    const show = this.props.show
    return (
      <Transition
        items={show}
        from={
          { opacity: 0 } // keys={item => item.key}
        }
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <Parent style={props}>
              <CloseButton onClick={this.close}>&#10006;</CloseButton>
              <UnorderedList>{this.createLinks()}</UnorderedList>
            </Parent>
          ))
        }
      </Transition>
    )

    // <Parent>
    //   <CloseButton onClick={this.close}>&#10006;</CloseButton>
    //   <UnorderedList>{this.createLinks()}</UnorderedList>
    // </Parent>
  }
}

export default NavSlider
