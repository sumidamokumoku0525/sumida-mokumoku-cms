import React from 'react'
import Link from 'next/link'

const Products = () => {
  return (
    <div>
      <div>Products</div>
      <ul>
        <li>Product01</li>
        <li>Product02</li>
        <li>Product03</li>
      </ul>
      <Link href="/"><a>Index</a></Link>
    </div>
  )
}

export default Products