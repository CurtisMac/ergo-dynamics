import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'

import Testimony from '../components/testimony'

const testimonies = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Person 1',
  },
  {
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Person 2',
  },
  {
    text:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Person 3',
  },
]

const Parent = styled.div`
  margin-top: 40px;
`
const items = [1, 2, 3, 4]
class Testimonials extends React.Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <Transition
        items={items}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}
      >
        {item => props => <div style={props}>{item}</div>}
      </Transition>
      // <Parent>
      //   <h2>What People Say...</h2>
      //   <Testimony text={testimonies[0].text} author={testimonies[0].author} />
      // </Parent>
    )
  }
}

export default Testimonials
