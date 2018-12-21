import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import global from '../../globalStyles'

const Parent = styled.div``
const Container1 = styled.div``
const Container2 = styled.div``
const Leader = () => (
  <StaticQuery
    query={graphql`
      query {
        deskWedge: file(relativePath: { eq: "desk_wedge.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Parent bgImage={data.deskWedge.childImageSharp.fluid}>
        <Img fluid={data.deskWedge.childImageSharp.fluid} />
        <Container1 />
        <Container2>
          <h2>Heading</h2>
          <p>Some text</p>
        </Container2>
      </Parent>
    )}
  />
)

export default Leader
