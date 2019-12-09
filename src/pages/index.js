import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { colors } from 'libs/colors'

import H1 from 'components/H1'
import H2 from 'components/H2'
import Container from 'components/Container'

const useStyles = makeStyles(theme => ({
  title: {
    color: colors.black,
  },
}))

export default function() {
  const classes = useStyles()

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービス</H1>
        <H2>特徴</H2>
        <Link to="/services">サービスについてはこちら</Link>
      </Container>
    </Layout>
  )
}
