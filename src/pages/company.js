import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'

export default () => {
  return (
    <Layout page="/company">
      <SEO title="Company" />
      <Container>
        <h1>会社概要です。</h1>
        <Link to="/">トップへ</Link>
      </Container>
    </Layout>
  )
}
