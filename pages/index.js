import React from 'react'
import getEvents from '../src/getEvents'
import IndexTemplate from '../src/components/templates'

const Index = props => {
  const { items } = props

  return (
    <IndexTemplate items={items} />
  )
}

Index.getInitialProps = () => {
  const length = 3
  const res = getEvents(length)

  return res
}

export default Index