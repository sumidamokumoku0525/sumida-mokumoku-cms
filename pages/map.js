import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import * as contentful from 'contentful'
import config from '../src/ctfConfig'
import getPosts from '../src/getPosts'
import CONTENFUL_MODEL from '../src/constants/model'

// contentful のクライアント
const client = contentful.createClient(config.deliver)

const DynamicMap = dynamic(() => import('./../src/components/pointMap'), {
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
      <br />
      <Link href="/map/create"><a>Create へ</a></Link>
      <DynamicMap data={data} />
    </div>
  )
}

SampleMap.getInitialProps = () => {
  const res = getPosts(CONTENFUL_MODEL.MAP);
  return res;
}

export default SampleMap