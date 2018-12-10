import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import global from '../../globalStyles'

const Parent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: calc(30px + 10vw);
  align-items: center;
`
const Container1 = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 255px;
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
  margin: 0 auto;
  background-color: ${global.colors.primary};
  box-shadow: 3px 3px 10px #404040;
  @media (max-width: 400px) {
    margin-right: 10px;
    right: 0;
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
  margin: 0;
  padding: 0;
  border-radius: 50%;
  opacity: 0.4;
  z-index: -1;
`
const ColoredCircle1 = styled(ColoredCircle)`
  background-color: ${global.colors.accent1};
  top: 0;
  left: 60px;
  width: 90px;
  height: 90px;
`
const ColoredCircle2 = styled(ColoredCircle)`
  background-color: ${global.colors.primary};
  bottom: 15px;
  right: 0;
  width: 130px;
  height: 130px;
`

const Card1 = props => (
  <>
    <Parent>
      <Container2>
        <ColoredCircle1 />
        <h2>Say Hello to comfort, activity and rest...</h2>
        <p>
          The more time that your head is hanging over a work area, the more
          fatigue, strain and eventually pain you are likely to feel. By
          bringing your head into a more upright position, the overworked
          muscles at the back of your neck get a rest. If you’ve sustained a
          whiplash type injury,your muscles need to be trained to relax. Joints
          need to be decompressed. Muscles need to regain their ability to
          contract and relax. The ERGO-PLANE helps in this process and provides
          a bridge between activity and rest. The upright posture encouraged by
          the ERGO-Plane also decreases strain on spinal ligaments and
          encourages activation of deep core muscles.
        </p>
        <ColoredCircle2 />
      </Container2>
      <Container1>
        <Image>
          <Img fluid={props.image} />
        </Image>
      </Container1>
    </Parent>
    <div />
  </>
)

export default Card1
