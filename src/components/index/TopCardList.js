import React from 'react'
import Card from 'components/common/Card'

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
      'ご近所の方もご利用いただける畑です。\nヤギさんもお迎えする予定です。\nみんなで美味しい野菜を作るぞー!!',
    imageSrc: 'farm.jpg',
  },
]

export default ({ classes, isDesktop }) => {
  return cardContents.map(content => (
    <Card
      key={content.title}
      title={content.title}
      imageSrc={content.imageSrc}
      isWide={isDesktop}
      body={<p className={classes.body}>{content.text}</p>}
    />
  ))
}
