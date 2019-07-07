import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { mixins } from '../styles'

const SnsList = props => {
  return (
    <List {...props}>
      {snsItems.map(item => (
        <Item key={item.href}>
          <Link href={item.href} passHref>
            <ItemLink target="_blank" rel="noopener"><img src={item.imgsrc} alt={item.alt} /></ItemLink>
          </Link>
        </Item>
      ))}
    </List>
  )
}
export default SnsList

const List = styled.ul`
  display: flex;
  justify-content: center;
`
const Item = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`
const ItemLink = styled.a`
  ${mixins.transition({ prop: 'opacity' })}
  display: block;
  &:hover {
    opacity: 0.7;
  }
`

const snsItems = [
  {
    href: 'https://github.com/sumidamokumoku0525',
    imgsrc: '/static/assets/icon_gh.svg',
    alt: 'githubページへ'
  },
  {
    href: 'https://twitter.com/SumidaMokumoku',
    imgsrc: '/static/assets/icon_tw.svg',
    alt: 'Twitterアカウント'
  },
  {
    href: 'https://sumida-mokumoku.connpass.com/',
    imgsrc: '/static/assets/icon_cp.svg',
    alt: 'commpassページへ'
  },
]