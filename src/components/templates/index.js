import React from 'react'
import Layout from '../templates/layout'
import Head from '../Head'

import TopMainVisual from '../organisms/TopMainVisual'
import TopAbout from '../organisms/TopAbout'
import TopEvents from '../organisms/TopEvents'

const IndexTemplate = props => {
  return (
    <Layout>
      <Head />
      <TopMainVisual />
      <TopAbout />
      <TopEvents items={props.items} />
    </Layout>
  )
}

export default IndexTemplate