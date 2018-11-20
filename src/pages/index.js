import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// import Card1 from '../components/cards/card1'
import Card2 from '../components/cards/card2'

const IndexPage = ({ data }) => (
  <Layout>
    {/* Carousel goes here*/}
    {/* <Card1
      image={data.postureBad.childImageSharp.fluid}
      bg={data.dotsSplat.childImageSharp.fluid}
    /> */}
    <Card2
      image={data.postureGood.childImageSharp.fluid}
      bg={data.dotsSplat.childImageSharp.fluid}
    />
  </Layout>
)
export const query = graphql`
  query {
    postureBad: file(relativePath: { eq: "posture_bad.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dotsSplat: file(relativePath: { eq: "circles.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    postureGood: file(relativePath: { eq: "posture_good2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dotsCircle: file(relativePath: { eq: "halftone-dots.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
