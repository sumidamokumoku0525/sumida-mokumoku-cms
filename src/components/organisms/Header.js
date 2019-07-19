import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { mixins, colors } from '../styles'
import Menu from '../organisms/Menu'

const Header = () => {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY == 0) {
        setFixed(false)
      } else {
        setFixed(true)
      }
    }, true)
  })

  return (
    <Wrapper fixed={fixed}>
      <Inner>
        <Logo><img src="/img/logo.svg" alt="" /></Logo>
        <Menu />
      </Inner>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  ${mixins.transition({prop: 'background-color'})}
  background-color: ${props => props.fixed ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
`
const Inner = styled.div`
  ${mixins.inner}
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  background: #000;
`
