import React from 'react'
import Layout from '../templates/layout'
import Head from '../Head'
import CornerVisual from '../organisms/CornerVisual'
import PostList from '../organisms/PostList'

const BlogTemplate = props => {
  return (
    <Layout>
      <Head />
      <CornerVisual />
      <PostList items={props.items} />
    </Layout>
  )
}

export default BlogTemplate
