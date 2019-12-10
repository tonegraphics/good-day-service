import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from 'components/Card'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    margin: 0,
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

export default ({ isDesktop }) => {
  const classes = useStyles({ isDesktop })
  return cardContents.map(content => (
    <Card title={content.title} imageSrc={content.imageSrc} isWide={isDesktop}>
      <p className={classes.body}>{content.text}</p>
    </Card>
  ))
}
