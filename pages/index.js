import React from 'react'
import getPosts from '../src/getPosts'
import Link from 'next/link'
import PostLink from '../src/components/PostLink'

const Index = props => {
  const { items } = props
  console.log(items)

  return (
    <div>
      <div>Index</div>
      <p>新着記事(最大3件)</p>
      <ul>
        {items.map(item => (
          <li key={item.sys.id}>
            <PostLink fields={item.fields} />
          </li>
        ))}
      </ul>
      <Link prefetch href="/posts"><a>Post一覧</a></Link>
      <br />
      <Link href="/map"><a>map サンプル</a></Link>
    </div>
  )
}

Index.getInitialProps = () => {
  const length = 3
  const res = getPosts(length)

  return res
}

export default Index