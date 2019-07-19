import React from 'react'
import { getPosts } from '../src/getItems'
import BlogTemplate from '../src/components/templates/blog'

const Posts = props => {
  const { items } = props

  return (
    <BlogTemplate items={items} />
  )
}

Posts.getInitialProps = () => {
  const res = getPosts()

  return res
}

export default Posts