import React from 'react'
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

export default () => {
  const classes = useStyles()

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        <H2>特徴</H2>
      </Container>
    </Layout>
  )
}
