import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import global from '../../globalStyles'

import LinkButton from '../linkButton'

const Parent = styled.div`
  position: relative;
  height: 100%;
  margin-top: calc(20px + 8vw);
`
const ColorBox = styled.div`
  width: 60%;
  height: inherit;
  background-color: ${global.colors.primary};
  position: absolute;
  z-index: -1;
  @media (max-width: 960px) {
    width: 100%;
  }
`
const FlexContainer = styled.div`
  min-height: inherit;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`
const Container1 = styled.div`
  color: white;
  position: relative;
  margin: 0;
  padding: 20px 15px 0 40px;
  max-width: 400px;
  @media (max-width: 865px) {
    padding: 20px 15px 0;
  }
`
const Container2 = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 330px;
  width: 400px;
  @media (max-width: 865px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 280px;
  }
`
const Image = styled.div`
  position: absolute;
  min-width: 300px;
  padding: 4px;
  margin-top: 40px;
  background-color: ${global.colors.arsenic};
  box-shadow: 3px 3px 10px #404040;
  @media (max-width: 865px) {
    margin-top: 0;
  }
  @media (max-width: 318px) {
    min-width: 200px;
  }
`
const Accent = styled.div`
  position: absolute;
  top: 170px;
  right: 40px;
  width: 200px;
  padding: 3px;
  transform: rotate(20deg);
  z-index: -1;
  @media (max-width: 865px) {
    display: none;
  }
`
const Buttons = styled.div`
  margin-left: 60px;
  margin-bottom: 20px;
  @media (max-width: 865px) {
    margin-left: 0;
    text-align: center;
  }
`

const Card2 = props => {
  return (
    <Parent>
      <ColorBox />
      <FlexContainer>
        <Container1>
          <h2>An Age Old Preventative Principle</h2>
          <p>
            Research and clinical experience has demonstrated that sitting
            upright at an inclined work surface helps to reduce biomechanical
            stress and discomfort throughout the vertebral column and its
            supporting structures. This preventative health principle has been
            known for over two hundred years!
          </p>
        </Container1>
        <Container2>
          <Image>
            <Img fluid={props.image} />
          </Image>
          <Accent>
            <Img fluid={props.bg} />
          </Accent>
        </Container2>
      </FlexContainer>
      <Buttons>
        <LinkButton linkTo={'/page-2'}>Why Ergo Plane?</LinkButton>
        <LinkButton linkTo={'/features'}>See All Features</LinkButton>
      </Buttons>
    </Parent>
  )
}

export default Card2
