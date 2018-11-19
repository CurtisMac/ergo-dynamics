import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import global from '../../globalStyles'

const Parent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`
const Container1 = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 320px;
  width: 400px;
  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Image = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  min-width: 300px;
  padding: 3px;
  background-color: ${global.colors.primary};
  box-shadow: 3px 3px 10px #404040;
  @media (max-width: 400px) {
    margin-right: 10px;
  }
`
const Accent = styled.div`
  position: absolute;
  top: 85px;
  right: 100px;
  min-width: 300px;
  padding: 3px;
  z-index: -1;
`
const Container2 = styled.div`
  position: relative;
  margin: 0;
  padding: 0 15px;
  max-width: 400px;
`

const ColoredCircle = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  margin: 0;
  padding: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  opacity: 0.4;
  background-color: ${global.colors.primary};
  z-index: -1;
`

const Card1 = props => (
  <>
    <Parent>
      <Container1>
        <Image>
          <Img fluid={props.image} />
        </Image>
        <Accent>
          <Img fluid={props.bg} />
        </Accent>
      </Container1>

      <Container2>
        <h2>The Common Problem</h2>
        <p>
          Research and clinical experience has demonstrated that sitting upright
          at an inclined work surface helps to reduce biomechanical stress and
          discomfort throughout the vertebral column and its supporting
          structures.
        </p>
        <ColoredCircle />
      </Container2>
    </Parent>
    <div />
  </>
)

export default Card1
