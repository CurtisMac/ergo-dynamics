import React from 'react'
import styled from 'styled-components'

import Testimony from './testimony'
import testimonies from '../data/testimonies'

const Parent = styled.div`
  margin: 20px auto;
  overflow: hidden;
  max-width: 785px;
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
  flex: 1;
  ${props =>
    props.shifting
      ? 'transform: translate(-260px)'
      : 'transform: translate(0px)'};
  ${props =>
    props.shifting ? 'transition: transform 1s ease' : 'transition: none'};
`
const CardWrapperLeft = styled(CardWrapper)`
  opacity: 0.5;
`
const CardWrapperCenter = styled.div`
  display: flex;
  flex: 1;
  ${props =>
    props.shifting ? 'transition: transform 1s ease' : 'transition: none'};
  ${props => (props.shifting ? 'opacity: 0.5' : 'opacity: 1')};
  ${props =>
    props.shifting
      ? 'transform: translate(-260px) scale(1)'
      : `transform: translate(0px) scale(1.1)`};
`
const CardWrapperRight = styled(CardWrapper)`
  opacity: 0.5;
  z-index: -1;
`
const CardWrapperHidden = styled(CardWrapper)`
  ${props => (props.shifting ? 'opacity: 0.5' : 'opacity: 0')};
`

class Testimonials extends React.Component {
  constructor() {
    super()
    this.state = {
      shifting: false,
      testimonies: testimonies.slice(0, 4),
    }
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
    setTimeout(() => this.shift(), 9000)
    setTimeout(() => this.timer(), 9000)
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
        <h2>What People Say...</h2>
        <Carousel>
          <CardWrapperLeft shifting={this.state.shifting}>
            <Testimony
              text={testimony[0].excerpt}
              author={testimony[0].author}
            />
          </CardWrapperLeft>
          <CardWrapperCenter
            shifting={this.state.shifting}
            onTransitionEnd={() => (this.shift(), this.mixer())}
          >
            <Testimony
              text={testimony[1].excerpt}
              author={testimony[1].author}
            />
          </CardWrapperCenter>
          <CardWrapperRight shifting={this.state.shifting}>
            <Testimony
              text={testimony[2].excerpt}
              author={testimony[2].author}
            />
          </CardWrapperRight>
          <CardWrapperHidden shifting={this.state.shifting}>
            <Testimony
              text={testimony[3].excerpt}
              author={testimony[3].author}
            />
          </CardWrapperHidden>
        </Carousel>
      </Parent>
    )
  }
}

export default Testimonials
