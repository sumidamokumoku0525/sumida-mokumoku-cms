import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { mixins, colors } from '../styles'

const Menu = () => {
  return (
    <nav>
      <MenuList>
        {menuItems.map(item => (
          <MenuItem key={item.name}>
            <Link prefetch href={item.path} passHref><MenuLink>{item.name}</MenuLink></Link>
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  )
}
export default Menu

const MenuList = styled.ul`
  display: flex;
`
const MenuItem = styled.li`
  margin-left: 40px;
`
const MenuLink = styled.a`
  color: ${colors.white};
  ${mixins.font_noto}
  ${mixins.transition({ prop: 'color' })}
  &:hover {
    color: ${colors.main_light};
  }
`

const menuItems = [
  {
    name: 'Top',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/posts'
  },
  {
    name: 'Maps',
    path: '/map'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]


