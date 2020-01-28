import React from 'react'
import { Grid } from '@material-ui/core'
import Card from 'components/common/Card'

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

export default ({ classes, isDesktop }) => {
  return (
    <Grid container spacing={5}>
      {subCardContents.map(content => (
        <Grid key={content.title} item xs={isDesktop ? 6 : 12} spacing={0}>
          <Card title={content.title} imageSrc={content.imageSrc} isSub>
            <p className={classes.body + ' ' + classes.subCard}>
              {content.text}
            </p>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
