import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from '../components/Container'
import H1 from '../components/H1'

export default function() {
  return (
    <Layout page="/services">
      <SEO title="Services" />
      <Container>
        <H1>サービス</H1>
      </Container>
      <Container>
        <H1>共生型サービスについて</H1>
      </Container>
    </Layout>
  )
}
