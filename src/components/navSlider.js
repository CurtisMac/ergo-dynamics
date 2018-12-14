import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import global from '../globalStyles'
import { Transition } from 'react-spring'

const Parent = styled.nav`
  background-color: ${global.colors.primary};
  min-width: 250px;
  position: absolute;
  height: 100vh;
  z-index: 1;
  right: 0;
  box-shadow: -1px 0 12px grey;
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
  background-color: ${global.colors.primary};
  margin: 0;
  padding: 5px 15px;
  border-bottom: 1px solid rgb(169, 169, 169);
  border-top: 1px solid rgb(169, 169, 169);
  :first-child {
    border-top: 1.5px solid rgb(169, 169, 169);
  }
  :last-child {
    border-bottom: 1.5px solid rgb(169, 169, 169);
  }
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    border-bottom: 1.75px solid rgb(169, 169, 169);
    border-top: 1.75px solid rgb(169, 169, 169);
    box-shadow: -1px 0 12px grey;
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
        from={{ transform: 'translateX(300px)' }}
        enter={{ transform: 'translateX(0)' }}
        leave={{ transform: 'translateX(300px)' }}
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
  }
}

export default NavSlider
