import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../src/components/CreateGeojsonMap'), {
  loading: () => {
    return (<p>Loading...</p>)
  },
  ssr: false
});

const create = props => {
  return (
    <div>
      <Link href="/"><a>Index へ</a></Link>
      <DynamicMap />
    </div>
  )
}

export default create