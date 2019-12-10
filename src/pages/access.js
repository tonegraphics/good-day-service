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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0798133530843!2d130.71232151519862!3d33.65509378071585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543d5e2230403d3%3A0x3d2f28a71537688d!2z44CSODIwLTAwMDEg56aP5bKh55yM6aOv5aGa5biC6a-w55Sw77yW77yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1575961025310!5m2!1sja!2sjp"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe> */}
      </Container>
    </Layout>
  )
}
