import React from 'react'
import styled from 'styled-components'
import { mixins } from '../styles'
import Title from '../atoms/Title'
import Btn from '../atoms/Btn'
import EventItem from '../organisms/EventItem'

const TopEvents = props => {
  return (
    <Wrapper>
      <Ttl>Events</Ttl>
      <Inner>
        {props.items.map(item => (
          <Item key={item.sys.id} fields={item.fields} />
        ))}
      </Inner>
      <BtnWrap>
        <Btn href="https://sumida-mokumoku.connpass.com/">その他のイベントはこちら</Btn>
      </BtnWrap>
    </Wrapper>
  )
}

export default TopEvents

const Wrapper = styled.div`
  background: #F5F8F8;
  padding: 80px 0;
`
const Inner = styled.ul`
  ${mixins.inner}
  display: flex;
  justify-content: center;
`
const Ttl = styled(Title)`
  margin-bottom: 50px;
`
const Item = styled(EventItem)`
  width: calc(94% / 3);
  margin-right: 3%;
  &:last-child {
    margin-right: 0;
  }
`
const BtnWrap = styled.div`
  text-align: center;
  margin-top: 50px;
`