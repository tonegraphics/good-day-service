import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { fonts } from 'libs/fonts'
import { colors } from 'libs/colors'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'
import H2 from 'components/H2'
import KyouseiIntro from 'components/KyouseiIntro'
import KyouseiTopics from 'components/KyouseiTopics'
import ServiceIntro from 'components/ServiceIntro'
import RoutineIntro from '../components/RoutineIntro'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: props => (props.isDesktop ? '32px' : '24px'),
    whiteSpace: 'pre-line',
    margin: 0,
  },
  routine: {
    fontSize: props => (props.isDesktop ? 32 : 24),
    lineHeight: props => (props.isDesktop ? '40px' : '32px'),
    fontWeight: 'bold',
    color: colors.brown,
    whiteSpace: 'pre-line',
    marginBottom: 4,
  },
  caption: {
    fontSize: props => (props.isDesktop ? 16 : 10),
    lineHeight: props => (props.isDesktop ? '24px' : '14px'),
    color: colors.red,
    whiteSpace: 'pre-line',
    margin: 0,
  },
  end: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  target: {
    whiteSpace: 'pre-line',
    fontSize: props => fonts(props.isDesktop).table,
    margin: 0,
  },
  goodchanWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '24px 40px 0 0',
  },
  highlighter: {
    fontWeight: 'bold',
    color: colors.red,
  },
  bold: { fontWeight: 'bold' },
  brown: { color: colors.brown },
  red: { color: colors.red },
  top: { marginBottom: 40 },
  topic: { marginBottom: props => (props.isDesktop ? 40 : 24) },
}))

export default function() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/services">
      <SEO title="Services" />
      <Container>
        <H1>サービス</H1>
        <ServiceIntro {...{ classes, isDesktop }} />
      </Container>
      <Container>
        <H1>共生型サービスについて</H1>
        <KyouseiIntro {...{ classes, isDesktop }} />
        <H2>特徴</H2>
        <KyouseiTopics {...{ classes }} />
      </Container>
      <Container>
        <H1>1日の流れ</H1>
        <RoutineIntro {...{ classes, isDesktop }} />
      </Container>
    </Layout>
  )
}
