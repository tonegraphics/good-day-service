import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { fonts } from 'libs/fonts'
import { colors } from 'libs/colors'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/layouts/Container'
import H1 from 'components/common/H1'
import H2 from 'components/common/H2'
import KyouseiIntro from 'components/service/KyouseiIntro'
import KyouseiTopics from 'components/service/KyouseiTopics'
import ServiceIntro from 'components/service/ServiceIntro'
import RoutineIntro from '../components/service/RoutineIntro'

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
  end: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 16,
  },
  target: {
    whiteSpace: 'pre-line',
    fontSize: props => fonts(props.isDesktop).table,
    margin: 0,
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
  const isDesktop = useMediaQuery('(min-width: 1080px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/services">
      <SEO title="Services" />
      <Container
        body={
          <div>
            <H1 title="サービス" />
            <ServiceIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="共生型サービスについて" />
            <KyouseiIntro {...{ classes, isDesktop }} />
            <H2 title="特徴" />
            <KyouseiTopics {...{ classes }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="1日の流れ" />
            <RoutineIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
    </Layout>
  )
}
