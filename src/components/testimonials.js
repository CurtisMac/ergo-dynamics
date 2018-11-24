import React from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import Testimony from '../components/testimony'

let testimonies = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Person 1',
    id: 1,
  },
  {
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Person 2',
    id: 2,
  },
  {
    text:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Person 3',
    id: 3,
  },
]

const Parent = styled.div`
  margin-top: 4px;
`
const Carousel = styled.div`
  display: flex;
  flex-flow: row;
`
class Testimonials extends React.Component {
  constructor() {
    super()
    this.state = {
      show: true,
    }
    this.mixer = this.mixer.bind(this)
  }

  componentDidMount() {
    this.mixer()
  }

  mixer() {
    console.log('mixer was called')
    setTimeout(() => this.setState(state => ({ show: !state.show })), 4000)
    setTimeout(() => this.mixer(), 4000)
  }

  render() {
    let show = this.state.show
    return (
      <Parent>
        <h2>What People Say...</h2>
        <Carousel>
          <Spring to={{ opacity: show ? 1 : 0 }}>
            {props => <div style={props}>Hello</div>}
          </Spring>
        </Carousel>
      </Parent>
    )
  }
}

/* <Testimony text={testimonies[0].text} author={testimonies[0].author} /> */

export default Testimonials
