
import React from 'react'
import getPosts from '../src/getPosts'
import Link from 'next/link'
import PostLink from '../src/components/PostLink'

const Posts = props => {
  const { items } = props

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.sys.id}>
            <PostLink fields={item.fields} />
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