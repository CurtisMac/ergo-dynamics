import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Testimony from '../components/testimony'
import testimonies from '../data/testimonies'

const Parent = styled.div`
  margin: 10px;
`

const Testimonies = () => {
  const cards = testimonies.map(testimony => (
    <Testimony
      large
      text={testimony.text}
      author={testimony.author}
      key={testimony.id}
    />
  ))
  return (
    <Layout>
      <Parent>
        <h1>Testimonies</h1>
        {cards}
      </Parent>
    </Layout>
  )
}

export default Testimonies
