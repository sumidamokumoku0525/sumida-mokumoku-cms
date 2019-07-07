import React from 'react'
import Head from '../Head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import GrobalStyles from '../styles/GlobalStyles'

const Layout = props => {
  return (
    <div className="wrapper">
      <GrobalStyles />
      <Head />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
