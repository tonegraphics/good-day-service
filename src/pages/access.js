import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'

export default () => {
  return (
    <Layout page="/access">
      <SEO title="Access" />
      <Container>
        <H1>アクセス</H1>
      </Container>
    </Layout>
  )
}
