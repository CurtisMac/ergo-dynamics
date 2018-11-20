import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import global from '../../globalStyles'

const Parent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: calc(30px + 10vw);
`
const Container1 = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 200px;
  width: 320px;
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
  @media (max-width: 310px) {
    min-width: 200px;
  }
`
const Container2 = styled.div`
  position: relative;
  margin: 0;
  padding: 0 15px;
  max-width: 400px;
`

const ColoredCircle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  margin: 0;
  padding: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.4;
  background-color: ${global.colors.accent1};
  z-index: -1;
`

const Card1 = props => (
  <>
    <Parent>
      <Container1>
        <Image>
          <Img fluid={props.image} />
        </Image>
      </Container1>

      <Container2>
        <h2>Say Goodby to neck pain, fatigue and muscle tension</h2>
        <p>
          In addition to being a valuable asset to patients experiencing neck
          pain, ‘whiplash’, and upper and lower back pain, the ERGO-PLANE is
          also beneficial, in a preventative capacity, to anyone spending long
          hours hunched over a desk. Students, teachers, accountants and
          bookkeepers can all obtain significant relief from postural muscle
          tension pain and achieve a more efficient pattern of breathing.
        </p>
        <ColoredCircle />
      </Container2>
    </Parent>
    <div />
  </>
)

export default Card1
