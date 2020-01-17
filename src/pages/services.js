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
import KyouseiServiceCard from '../components/KyouseiServiceCard'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: props => (props.isDesktop ? '32px' : '24px'),
    whiteSpace: 'pre-line',
    margin: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
  highlighter: {
    fontWeight: 'bold',
    color: colors.red,
  },
  small: {
    fontSize: 16,
    lineHeight: '32px',
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
            <p className={classes.body + ' ' + classes.bold}>
              ご利用料金の詳細等については、以下の電話番号にご連絡ください！
            </p>
          ) : (
            <>
              <p className={classes.body + ' ' + classes.bold}>
                ご利用料金の詳細等については、
              </p>
              <p className={classes.body + ' ' + classes.bold}>
                以下の電話番号にご連絡ください！
              </p>
            </>
          )}
        </div>
      </Container>
      <Container>
        <H1>共生型サービスについて</H1>
        <KyouseiServiceCard {...{ classes, isDesktop }} />
        <p className={classes.small}>
          以降私たちは「
          <span className={classes.highlighter}>
            年齡・認知症や障がい等に関わらず、家族のような雰囲気
          </span>
          」の理念のもと、
          <span className={classes.bold}>令和元年11月1日</span>
          より共生型にて「
          <span className={classes.highlighter}>児童発達支援</span>
          」と「
          <span className={classes.highlighter}>放課後等デイサービス</span>
          」の指定を受け、高齢者・障がい者・障がい児、誰もが利用できるデイサービス事業所として運営しております。今後は、障がい等のない子供も利用出来る様に「
          <span className={classes.highlighter}>一時預かり保育</span>
          」の開始も検討しております。
        </p>
      </Container>
    </Layout>
  )
}
