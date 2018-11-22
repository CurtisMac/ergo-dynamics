import React from 'react'
import styled from 'styled-components'
import global from '../globalStyles'

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

class Testimonials extends React.Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <div>
        <h2>What People Say...</h2>
        <Testimony text={testimonies[0].text} author={testimonies[0].author} />
      </div>
    )
  }
}

export default Testimonials
