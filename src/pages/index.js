import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import H1 from 'components/H1'
import Container from 'components/Container'
import TopCardList from 'components/TopCardList'
import TopSubCardList from 'components/TopSubCardList'
import { fonts } from 'libs/fonts'
import Introduction from 'components/Introduction'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    margin: 0,
  },
  subCard: {
    height: props => (props.isDesktop ? 64 : 'auto'),
  },
}))

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        <Introduction {...{ isDesktop }} />
        <TopCardList {...{ classes, isDesktop }} />
        <TopSubCardList {...{ classes, isDesktop }} />
      </Container>
    </Layout>
  )
}
