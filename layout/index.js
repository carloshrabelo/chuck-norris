import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import GlobalStyle from 'layout/GlobalStyle'

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <header>
      <h1 className='title'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
    </header>
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
