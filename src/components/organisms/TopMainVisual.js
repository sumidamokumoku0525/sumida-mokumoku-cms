import React from 'react'
import styled from 'styled-components'
import SnsList from '../molecules/SnsList'

const Wrap = styled.div`
  height: 100vh;
  min-height: 660px;
  background: linear-gradient(to right, rgba(125, 220, 160, 0.7), rgba(60, 115, 148, 0.7)), url(/static/assets/bg_main.jpg);
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Logo = styled.h1`
  max-width: 70%;
  width: 470px;
  margin-bottom: 30px;
`
const Arrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`

const TopMainVisual = () => {
  return (
    <Wrap>
      <Logo>
        <img src="/static/assets/logo_header.svg" alt="すみだもくもく会は、墨田区で開催するもくもく会です。エンジニア・デザイナーや、転職を目指す人が集まって、もくもく勉強や作業を行います。" />
      </Logo>
      <SnsList />
      <Arrow>
        <img src="/static/assets/arrow_header.svg" alt="" />
      </Arrow>
    </Wrap>
  )
}

export default TopMainVisual
