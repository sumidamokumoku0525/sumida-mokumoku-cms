import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

const Footer = () => {
  return (
    <Wrapper>
      <Copy>&copy; Sumida Mokumoku All Rights Reserved.</Copy>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.footer`
  background: ${colors.black};
  text-align: center;
  padding: 20px 0;
`
const Copy = styled.small`
  color: ${colors.white};
  font-size: 10px;
`
