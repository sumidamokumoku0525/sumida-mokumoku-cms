import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import * as contentful from 'contentful'
import { config } from '../src/config'
import getPosts from '../src/getPosts'

// contentful のクライアント
const client = contentful.createClient(config)

const DynamicMap = dynamic(() => import('./../src/components/Map'), {
  loading: () => {
    return (<p>Loading...</p>)
  },
  ssr: false
});

const SampleMap = props => {
  const { data } = props.items[0].fields;
  return (
    <div>
      <Link href="/"><a>Index へ</a></Link>
      <DynamicMap data={data} />
    </div>
  )
}

SampleMap.getInitialProps = () => {
  const res = getPosts('map');
  return res;
}

export default SampleMap