import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery, Grid } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import H1 from 'components/H1'
import Container from 'components/Container'
import Card from 'components/Card'
import { fonts } from 'libs/fonts'
import TopCardList from 'components/TopCardList'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    margin: 0,
  },
  subCard: {
    padding: 0,
  },
  subCardBody: {
    height: props => (props.isDesktop ? 64 : 'auto'),
  },
}))

const cardContents = [
  {
    title: 'メインルーム',
    text:
      '日当たりもよく、広々としてながめも良い!!\nリビングでゆっくりとした時間を楽しく過ごしていただけます。\nLivinGood!!!!',
    imageSrc: 'mainroom.JPG',
  },
  {
    title: 'キッチン',
    text:
      'オープンキッチンで、料理のお好きな方もスタッフと一緒にご利用いただけます。',
    imageSrc: 'kitchen.JPG',
  },
  {
    title: 'ともいきファーム',
    text:
      'ご近所の方もご利用いただける畑です。\nヤギさんもお迎えする予定です。\n美味しい野菜を作るぞー!!',
    imageSrc: 'farm.jpg',
  },
]

const subCardContents = [
  {
    title: '静養室',
    text: '風通しもよく、居心地の良い空間となっております。',
    imageSrc: 'seiyou.JPG',
  },
  {
    title: 'お風呂',
    text: '家庭用の浴槽が2つあります。',
    imageSrc: 'bath.JPG',
  },
  {
    title: '相談室',
    text: 'プライバシーに配慮しています。',
    imageSrc: 'soudan.JPG',
  },
  {
    title: 'トイレ',
    text:
      '広々としたトイレが2カ所あり、車椅子の方でも安心してご利用いただけます。',
    imageSrc: 'toilet.png',
  },
]

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        <TopCardList isDesktop={isDesktop} />
        <Grid container spacing={5}>
          {subCardContents.map(content => (
            <Grid
              item
              xs={isDesktop ? 6 : 12}
              spacing={0}
              className={classes.subCard}
            >
              <Card title={content.title} imageSrc={content.imageSrc} isSub>
                <p className={classes.body + ' ' + classes.subCardBody}>
                  {content.text}
                </p>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}
