import React from 'react'
import styled from 'styled-components'
import global from '../globalStyles'

const Parent = styled.footer`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: ${global.colors.primary};
  color: white;
  min-height: 40px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 1px 1px 12px grey;
  z-index: 3;
`
const First = styled.div`
  margin-right: 20px;
`
const Last = styled.div``

const Footer = () => (
  <Parent>
    <First>&copy;Ergodynamics.ca </First>
    <Last>Site by WebBuilderz</Last>
  </Parent>
)

export default Footer
