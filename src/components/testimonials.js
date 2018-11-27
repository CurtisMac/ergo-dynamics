import React from 'react'
import styled from 'styled-components'

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
  {
    text:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Person 4',
    id: 4,
  },
  {
    text:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Person 5',
    id: 5,
  },
]

const Parent = styled.div`
  margin-top: 4px;
  overflow: hidden;
`
const Carousel = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  padding: 30px;
  width: 100%;
  transform: translate(125px);
`
const CardWrapper = styled.div`
  display: flex;
  ${props =>
    props.shifting
      ? 'transform: translate(-250px)'
      : 'transform: translate(0px)'};
  ${props => (props.shifting ? 'opacity: 0.5' : 'opacity: 1')};
  ${props =>
    props.shifting ? 'transition: transform 1s ease' : 'transition: none'};
`

const CardWrapperLeft = styled(CardWrapper)`
  flex: 1;
  opacity: 0.5;
`
const CardWrapperCenter = styled(CardWrapper)`
  flex: 1;
  ${props =>
    props.shifting
      ? 'transform: translate(-250px) scale(1)'
      : 'transform: translate(0px) scale(1.1)'};
`
const CardWrapperRight = styled(CardWrapper)`
  flex: 1;
  opacity: 0.5;
  z-index: -1;
`
const CardWrapperHidden = styled(CardWrapper)`
  flex: 1;
`

class Testimonials extends React.Component {
  constructor() {
    super()
    this.state = { shifting: false, testimonies: testimonies.slice(0, 4) }
    this.mixer = this.mixer.bind(this)
    this.shift = this.shift.bind(this)
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    this.timer()
  }

  shift() {
    this.setState(state => ({ shifting: !state.shifting }))
  }

  timer() {
    setTimeout(() => this.shift(), 3000)
    setTimeout(() => this.timer(), 3000)
  }

  mixer() {
    testimonies.push(testimonies.shift())
    let array = testimonies.slice(0, 4)
    this.setState(() => ({
      testimonies: array,
    }))
  }

  render() {
    let testimony = this.state.testimonies
    return (
      <Parent>
        <button onClick={this.shift}>Shift</button>
        <h2>What People Say...</h2>
        <Carousel>
          <CardWrapperLeft shifting={this.state.shifting}>
            <Testimony text={testimony[0].text} author={testimony[0].author} />
          </CardWrapperLeft>
          <CardWrapperCenter
            shifting={this.state.shifting}
            onTransitionEnd={() => (this.shift(), this.mixer())}
          >
            <Testimony text={testimony[1].text} author={testimony[1].author} />
          </CardWrapperCenter>
          <CardWrapperRight shifting={this.state.shifting}>
            <Testimony text={testimony[2].text} author={testimony[2].author} />
          </CardWrapperRight>
          <CardWrapperHidden shifting={this.state.shifting}>
            <Testimony text={testimony[3].text} author={testimony[3].author} />
          </CardWrapperHidden>
        </Carousel>
      </Parent>
    )
  }
}

export default Testimonials
