import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'

export default () => {
  return (
    <Layout page="/company">
      <SEO title="Company" />
      <Container>
        <H1>会社概要</H1>
      </Container>
      <Container>
        <H1>事業所概要</H1>
      </Container>
    </Layout>
  )
}
