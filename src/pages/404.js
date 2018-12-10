import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Parent = styled.div`
  min-height: 80vh;
  margin: 0 10px;
`

const NotFoundPage = () => (
  <Layout>
    <Parent>
      <h1>Oops!</h1>
      <p>
        We seem to have encountered a problem. This page doesn&#39;t exist...
      </p>
      <p>
        Perhaps you would like to return to the <Link to={'/'}>home page</Link>?
      </p>
    </Parent>
  </Layout>
)

export default NotFoundPage
