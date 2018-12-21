import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Leader from '../components/cards/leader'
import Card1 from '../components/cards/card1'
import Card2 from '../components/cards/card2'
import Card3 from '../components/cards/card3'
import Card4 from '../components/cards/card4'
import Card5 from '../components/cards/card5'
import TestimonyCarousel from '../components/testimonyCarousel'

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Leader />
      <Card1
        image={data.postureBad.childImageSharp.fluid}
        bg={data.dotsSplat.childImageSharp.fluid}
      />
      <Card2
        image={data.postureGood.childImageSharp.fluid}
        bg={data.dotsSplat.childImageSharp.fluid}
      />
      <Card3 image={data.neckPain.childImageSharp.fluid} />
      <Card4 image={data.postureGood.childImageSharp.fluid} />
      <Card5
        image={data.postureGood.childImageSharp.fluid}
        bg={data.dotsSplatGreen.childImageSharp.fluid}
      />
      <TestimonyCarousel />
    </Layout>
  </>
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
    dotsSplatGreen: file(relativePath: { eq: "halftone-dots_green.png" }) {
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
    neckPain: file(relativePath: { eq: "Head.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
