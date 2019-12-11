import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'
import { fonts } from 'libs/fonts'
import { colors } from 'libs/colors'
import ServiceCardList from 'components/ServiceCardList'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: props => (props.isDesktop ? '32px' : '24px'),
    whiteSpace: 'pre-line',
    margin: 0,
  },
  highlighter: {
    fontWeight: 'bold',
    color: colors.red,
  },
  top: {
    marginBottom: 40,
  },
  end: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  target: {
    whiteSpace: 'pre-line',
    fontSize: 16,
    margin: 0,
  },
}))

export default function() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/services">
      <SEO title="Services" />
      <Container>
        <H1>サービス</H1>
        <div className={classes.top}>
          <p className={classes.body}>
            グッドデイサービスでは以下の3つのサービスを提供しています。{'\n'}
            平日はもちろん、土曜・祝日もご利用いただけます！{'\n'}
            (日曜・年末年始(12/30 ~ 1/3) はお休みです。)
          </p>
        </div>
        <ServiceCardList {...{ classes, isDesktop }} />
        <div className={classes.end}>
          {isDesktop ? (
            <p className={classes.body}>
              ご利用料金の詳細等については、以下の電話番号にご連絡ください！
            </p>
          ) : (
            <>
              <p className={classes.body}>ご利用料金の詳細等については、</p>
              <p className={classes.body}>以下の電話番号にご連絡ください！</p>
            </>
          )}
        </div>
      </Container>
      <Container>
        <H1>共生型サービスについて</H1>
      </Container>
    </Layout>
  )
}
