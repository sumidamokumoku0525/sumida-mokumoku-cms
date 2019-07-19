import React from 'react'
import getEvents from '../src/getEvents'
import IndexTemplate from '../src/components/templates'

const Index = props => {
  const { items } = props

  return (
    <IndexTemplate items={items} />
  )
}

Index.getInitialProps = () => {
  const length = 3
<<<<<<< HEAD
  const res = getEvents(length)
=======
  const res = getPosts('post', length)
>>>>>>> bcdbab00540ea4ed94b796fee14598e91dc345e6

  return res
}

export default Index