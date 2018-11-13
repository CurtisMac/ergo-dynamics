import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const colors = {
  accent1: '#f96854',
  accent2: '#3db39e',
}

const Background = styled.div`
  background: ${colors.accent2};
  display: flex;
  justify-content: space-between;
  min-height: 55px;
  padding: 0 10px;
  box-shadow: 1px 1px 12px grey;
`
const FlexBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: flex-start;
`
const H1 = styled.h1`
  margin: 0;
`
const Links = styled.div`
  align-self: center;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-right: 10px;
`
const DropDownIcon = styled.button`
  align-self: center;
  height: 40px;
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`
const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 15px;
`
const LinkText2 = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 15px;
  :hover {
    color: ${colors.accent1};
  }
`
const NavMenu = () => <div>HI!</div>

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayMenu: false }
  }

  handleClick = () => {
    this.setState({ displayMenu: !this.state.displayMenu })
  }
  render() {
    return (
      <Background>
        <FlexBox>
          <H1>
            <LinkText to="/">{this.props.siteTitle}</LinkText>
          </H1>
          <Links>
            <LinkText2 to="/">Why Ergo Plane?</LinkText2>
            <LinkText2 to="/">Features</LinkText2>
            <LinkText2 to="/">Relief</LinkText2>
          </Links>
        </FlexBox>
        <DropDownIcon onClick={this.handleClick}>
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
        </DropDownIcon>
        {this.state.displayMenu && <NavMenu />}
      </Background>
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <Background>
//     <FlexBox>
//       <H1>
//         <LinkText to="/">{siteTitle}</LinkText>
//       </H1>
//       <Links>
//         <LinkText to="/">Why Ergo Plane?</LinkText>
//         <LinkText to="/">Features</LinkText>
//         <LinkText to="/">Relief</LinkText>
//       </Links>
//     </FlexBox>
//     <DropDownIcon>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         height="40"
//         viewBox="0 0 32 32"
//         width="40"
//       >
//         <path
//           d="M4 10h24c1.1 0 2-0.9 2-2s-0.9-2-2-2H4C2.9 6 2 6.9 2 8S2.9 10 4 10zM28 14H4c-1.1 0-2 0.9-2 2s0.9 2 2 2h24c1.1 0 2-0.9 2-2S29.1 14 28 14zM28 22H4c-1.1 0-2 0.9-2 2s0.9 2 2 2h24c1.1 0 2-0.9 2-2S29.1 22 28 22z"
//           fill="white"
//         />
//       </svg>
//     </DropDownIcon>
//     {false && <NavMenu />}
//   </Background>
// )

export default Header
