import React from 'react'
import getPosts from '../src/getPosts'
import IndexTemplate from '../src/components/templates'
import CONTENFUL_MODEL from '../src/constants/model'

const Index = props => {
  const { items } = props

  return (
    <IndexTemplate items={items} />
  )
}

Index.getInitialProps = () => {
  const length = 3
  const res = getPosts(CONTENFUL_MODEL.POST, length)

  return res
}

export default Index