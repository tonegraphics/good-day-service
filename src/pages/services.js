import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'
import H2 from 'components/H2'
import { fonts } from 'libs/fonts'
import { colors } from 'libs/colors'
import ServiceCardList from 'components/ServiceCardList'
import KyouseiServiceCard from '../components/KyouseiServiceCard'
import Topic from '../components/Topic'
import Routine from '../components/Routine'

const firstTopics = [
  {
    title: '1. 小規模',
    text: '利用定員は18人程度として、家庭的な雰囲気を重視しています。',
  },
  {
    title: '2. 多機能',
    text: '高齢者・障がい者・障がい児を含め、誰でも受け入れ対応いたします。',
  },
  {
    title: '3. 地域密着',
    text: '自然豊かな場所に立地し、地域との交流もさかんです。',
  },
]

const secondTopics = [
  {
    title: '高齢者にとって',
    text:
      '子どもなど多世代と触れ合うことで、日常生活の改善や会話が促進する等々',
  },
  {
    title: '障がい者にとって',
    text:
      '居場所ができ、多世代と関わる事で自分の役割を見出し、自立・社会生活向上へとつながる等々',
  },
  {
    title: '子どもにとって',
    text:
      '多世代で過ごす事により他人への思いやりや優しさが身につき、社会生活向上へとつながる等々',
  },
]

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
  brown: {
    color: colors.brown,
  },
  red: {
    color: colors.red,
  },
  highlighter: {
    fontWeight: 'bold',
    color: colors.red,
  },
  small: {
    fontSize: 16,
    lineHeight: '32px',
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
        <H2>特徴</H2>
        <p className={classes.small}>
          対象者ごとに施設を限定し、住宅地から離れた場所で提供されるような従来のデイサービスに対し、共生型(富山型)デイサービスは以下の3つをコンセプトに運営しております。
        </p>
        {firstTopics.map(t => (
          <Topic
            key={t.title}
            classes={classes}
            title={t.title}
            text={t.text}
            isHighlighted
          />
        ))}
        {secondTopics.map(t => (
          <Topic
            key={t.title}
            classes={classes}
            title={t.title}
            text={t.text}
          />
        ))}
        <p className={classes.small}>
          全体としては、
          <span className={classes.bold}>
            利用者を限定しないため一緒に過ごすことによる生活上の相乗効果があること
          </span>
          など様々な利点があります。
        </p>
      </Container>
      <Container>
        <H1>1日の流れ</H1>
        <p className={classes.body}>
          ※対象の方によって時間が異なります。{'\n'}
          ※基本の流れですが、変更になる場合があります。{'\n'}
          {'\n'}
        </p>
        <Routine {...{ classes, isDesktop }} />
      </Container>
    </Layout>
  )
}
