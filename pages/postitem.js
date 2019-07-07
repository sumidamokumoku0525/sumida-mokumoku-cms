import React from 'react'
import Link from 'next/link'
import * as contentful from 'contentful'
import config from './ctfConfig'

const PostItem = props => {
  const post = props.item.fields

  return (
    <div>
      <h1>Post detail</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <Link prefetch href="/posts"><a>Post一覧へ</a></Link>
    </div>
  )
}

const client = contentful.createClient(config.deliver)

PostItem.getInitialProps = async (context) => {
  const { url_slug } = context.query

  const entries = await client.getEntries({
    content_type: 'post',
    'fields.url_slug': url_slug,
    select: 'sys.id,fields'
  })

  return {
    item: entries.items[0]
  }
}

export default PostItem