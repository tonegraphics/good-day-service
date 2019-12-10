import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'
import Table from 'components/Table'

const rows = [
  { title: '住所', data: '〒820 - 0001\n福岡県飯塚市鯰田64番地1' },
  { title: 'TEL', data: '0948-29-4112' },
]

export default () => {
  return (
    <Layout page="/access">
      <SEO title="Access" />
      <Container>
        <H1>アクセス</H1>
        <Table rows={rows} />
      </Container>
    </Layout>
  )
}
