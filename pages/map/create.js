import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import * as contentful from 'contentful'
import { config } from '../../src/config'
import getPosts from '../../src/getPosts'
import CONTENFUL_MODEL from '../../src/constants/model'

// contentful のクライアント
const client = contentful.createClient(config)

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