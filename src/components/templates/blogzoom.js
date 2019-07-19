import React from 'react'
import Layout from '../templates/layout'
import Head from '../Head'
import PostBody from '../organisms/PostBody'

const BlogZoomTemplate = props => {
  return (
    <Layout>
      <Head />
      <PostBody items={props.items} />
    </Layout>
  )
}

export default BlogZoomTemplate