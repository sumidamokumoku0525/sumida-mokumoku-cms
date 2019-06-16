import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./../src/components/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const SampleMap = props => {

  return (
    <div>
      <Link href="/"><a>Index へ</a></Link>
      <DynamicMap />
    </div>
  )
}

export default SampleMap