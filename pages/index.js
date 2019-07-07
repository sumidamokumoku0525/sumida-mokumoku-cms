import React from 'react'
import getPosts from '../src/getPosts'
import IndexTemplate from '../src/components/templates/Index'

const Index = props => {
  const { items } = props

  return (
    <IndexTemplate items={items} />
  )
}

Index.getInitialProps = () => {
  const length = 3
  const res = getPosts(length)

  return res
}

export default Index