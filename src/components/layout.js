import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './layout.css'
import ScrollTop from 'components/ScrollTop'

const pageLinks = [
  { to: '/', title: 'トップ' },
  { to: '/services', title: 'サービス' },
  { to: '/access', title: 'アクセス' },
  { to: '/company', title: '会社概要' },
]

export default ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header pageLinks={pageLinks} currentPage={page} />
      <div
        style={{
          margin: `0 auto 40px`,
          maxWidth: 1024,
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <ScrollTop />
      <Footer />
    </>
  )
}
