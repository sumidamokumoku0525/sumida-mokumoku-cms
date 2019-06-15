import React from 'react'
import Link from 'next/link'

const PostLink = props => {
  const {url_slug, title} = props.fields
  return (
    <Link prefetch as={`/post/${url_slug}`} href={`/postitem?url_slug=${url_slug}`}>
      <a>{title}</a>
    </Link>
  )
}

export default PostLink