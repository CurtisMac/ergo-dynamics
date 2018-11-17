import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import global from '../../globalStyles'

const Parent = styled.div`
  position: relative;
  height: 400px;
`
const ColorBox = styled.div`
  width: 60%;
  height: 400px;
  background-color: ${global.colors.primary};
  position: absolute;
  z-index: -1;
`
const FlexContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`
const Container1 = styled.div`
  background-color: ${global.colors.primary};
  color: white;
  position: relative;
  margin: 0;
  padding: 0 15px 0 40px;
  max-width: 500px;
`
const Container2 = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 360px;
  width: 400px;
`
const Image = styled.div`
  position: absolute;
  min-width: 300px;
  padding: 4px;
  background-color: ${global.colors.arsenic};
`
const Accent = styled.div`
  position: absolute;
  top: 160px;
  right: 22px;
  width: 200px;
  padding: 3px;
  z-index: -1;
`

const Card2 = props => (
  <Parent>
    <ColorBox />
    <FlexContainer>
      <Container1>
        <h2>An Age Old Preventative Principle</h2>
        <p>
          Research and clinical experience has demonstrated that sitting upright
          at an inclined work surface helps to reduce biomechanical stress and
          discomfort throughout the vertebral column and its supporting
          structures. This preventative health principle has been known for over
          two hundred years!
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
  </Parent>
)

export default Card2
