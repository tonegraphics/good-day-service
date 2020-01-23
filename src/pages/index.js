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
import PicturesGrid from 'components/PicturesGrid'
import Evaluation from 'components/Evaluation'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    margin: '0 0 16px',
  },
  subCard: {
    height: props => (props.isDesktop ? 64 : 'auto'),
  },
}))

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })
  const goodChanfiles = [
    'goodchan2.png',
    'goodchan1.jpg',
    'goodchan3.jpg',
    'goodchan4.jpg',
  ]
  const eventfiles = [
    'event1.jpeg',
    'event2.jpeg',
    'event3.jpeg',
    'event4.jpg',
    'event5.jpeg',
    'event6.jpeg',
  ]

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        <Introduction {...{ isDesktop }} />
        <TopCardList {...{ classes, isDesktop }} />
        <TopSubCardList {...{ classes, isDesktop }} />
      </Container>
      <Container>
        <H1>グッドちゃん</H1>
        <p className={classes.body}>
          アイドル犬グッドちゃんです。みんなと仲良く暮らしています。
        </p>
        <PicturesGrid {...{ isDesktop }} filenames={goodChanfiles} />
      </Container>
      <Container>
        <H1>グッドデイ2大イベント!!</H1>
        <p className={classes.body}>
          グッドデイサービスでは、年２回近所の人達を巻き込んで {'\n'}
          夏は「そうめん流し」冬は「餅つき」を行っております。これが大好評！！
          {'\n'}
          今後も色々なイベント等行っていきたいと思いまーす。{'\n'}
          これぞ、THE 地域密着！！
        </p>
        <PicturesGrid {...{ isDesktop }} filenames={eventfiles} />
      </Container>

      <Container>
        <H1>ガイドラインに基づく評価</H1>
        <Evaluation {...{ classes }} />
      </Container>
    </Layout>
  )
}
