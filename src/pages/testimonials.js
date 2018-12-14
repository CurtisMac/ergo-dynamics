import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Testimony from '../components/testimony'
import testimony from '../data/testimonies'

const Testimonies = () => (
  <Layout>
    <h1>Testimonies</h1>
    <Testimony large text={testimony[2].text} author={testimony[2].author} />
  </Layout>
)
export default Testimonies
