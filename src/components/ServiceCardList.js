import React from 'react'
import Card from 'components/Card'

const cardContents = [
  {
    title: '地域密着型通所介護・生活介護',
    offerTime: '9:30 ~ 16:30',
    target: [
      {
        type: '地域密着型通所介護',
        detail: '介護認定で要介護1~5の認定を受けた方',
      },
      {
        type: '生活介護',
        detail: '18歳以上で障がい支援区分1~6の認定を受けた方',
      },
    ],
    imageSrc: 'mainroom.JPG',
  },
  {
    title: '放課後等デイサービス',
    offerTime: '平日(月~金)：15:30 ~ 17:30\n学休日(土・祝日)：9:30 ~ 16:30',
    target:
      '障がい等お持ちの主に6歳から18歳までの\n学校に通っている子で、通所給付受給者証をお持ちの方',
    imageSrc: 'mainroom.JPG',
  },
  {
    title: '児童発達支援',
    offerTime: '9:30 ~ 15:30',
    target: '障がい等お持ちの未就学の子で、\n通所給付受給者証をお持ちの方',
    imageSrc: 'mainroom.JPG',
  },
]

export default ({ classes, isDesktop }) => {
  return cardContents.map(content => (
    <Card title={content.title} imageSrc={content.imageSrc} isWide={isDesktop}>
      <p className={classes.body}>提供時間{`\n${content.offerTime}\n\n`}</p>
      <p className={classes.body}>対象者{'\n'}</p>
      {typeof content.target === 'string' ? (
        <p className={classes.target + ' ' + classes.highlighter}>
          {content.target}
        </p>
      ) : (
        content.target.map(t => (
          <p className={classes.target}>
            {`${t.type}:\n`}
            <span className={classes.highlighter}>{t.detail}</span>
          </p>
        ))
      )}
    </Card>
  ))
}
