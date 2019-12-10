import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import H1 from 'components/H1'
import Container from 'components/Container'
import Card from 'components/Card'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.matches).body,
    whiteSpace: 'pre-line',
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

export default () => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        {cardContents.map(content => (
          <Card title={content.title} imageSrc={content.imageSrc}>
            <p className={classes.body}>{content.text}</p>
          </Card>
        ))}
      </Container>
    </Layout>
  )
}
