import React from 'react'
import Map from '../src/components/Map'
import Link from 'next/link'

const SampleMap = props => {

  return (
    <div>
      <Link href="/"><a>Index へ</a></Link>
      <Map />
    </div>
  )
}

export default SampleMap