import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <div>Index</div>
      <Link href="/products"><a>Products一覧</a></Link>
    </div>
  )
}

export default Index