import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Background = styled.div`
  background: lightgreen;
  /* height: 65px; */
`
const TextArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 15px;
  max-width: 960px;
  padding: 0.45rem 1.0875rem;
  /* height: 65px; */
`
const H1 = styled.h1`
  margin: 0;
  display: inline;
`
const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  padding-right: 15px;
`
const Nav = styled.div`
  display: inline;
  text-align: center;
`
const DropDownMenu = styled.div`
  display: inline;
  /* right: 22px;
  top: 23px; */
`

const Header = ({ siteTitle }) => (
  <Background>
    <TextArea>
      <H1>
        <LinkText to="/">{siteTitle}</LinkText>
      </H1>
      <Nav>
        <LinkText to="/">Why Ergo Plane?</LinkText>
        <LinkText to="/">Features</LinkText>
        <LinkText to="/">Relief</LinkText>
      </Nav>
    </TextArea>
    <DropDownMenu>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 0 32 32"
        width="40"
      >
        <path
          d="M4 10h24c1.1 0 2-0.9 2-2s-0.9-2-2-2H4C2.9 6 2 6.9 2 8S2.9 10 4 10zM28 14H4c-1.1 0-2 0.9-2 2s0.9 2 2 2h24c1.1 0 2-0.9 2-2S29.1 14 28 14zM28 22H4c-1.1 0-2 0.9-2 2s0.9 2 2 2h24c1.1 0 2-0.9 2-2S29.1 22 28 22z"
          fill="white"
        />
      </svg>
    </DropDownMenu>
  </Background>
)

export default Header
