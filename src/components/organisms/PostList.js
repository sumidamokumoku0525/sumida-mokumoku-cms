import React from 'react'
import Link from 'next/link'
import PostItem from './PostItem'

const PostList = props => {
  const { items } = props

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.sys.id}>
            <PostItem item={item} />
          </li>
        ))}
      </ul>
      <Link prefetch href="/"><a>TOP</a></Link>
    </div>
  )
}

Posts.getInitialProps = () => {
  const res = getPosts('post')

  return res
}

export default Posts
