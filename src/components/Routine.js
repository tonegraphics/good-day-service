import React from 'react'
import RoutineWork from './RoutineWork'

export default props => {
  const { classes } = props
  const routineContents = [
    {
      title: 'グッドデイサービス到着 〜9:30(8:30)',
      detail: (
        <div>
          <p className={classes.body}>
            ご利用日には、ご自宅までお迎えに伺います。{'\n'}
            到着後、お茶等でひと息ついていただき、バイタルチェック等を行います。
          </p>
          <p className={classes.caption}>
            1日20円でコーヒー・紅茶・ジュース等の中からお好きな物を選んでいただくこともできます。
          </p>
        </div>
      ),
    },
    {
      title: '機能訓練・お風呂・個別活動等',
      detail: (
        <p className={classes.body}>
          日常生活動作を目的とした機能訓練等をワイワイと楽しく行います。
        </p>
      ),
    },
    {
      title: 'お食事',
      detail: (
        <div>
          <p className={classes.body}>
            家庭で作るような手作りの昼食を皆さんと一緒にいただきます。{'\n'}
            ミキサー・きざみ・トロみ等もO Kです。一度、お問い合わせください。
          </p>
        </div>
      ),
    },
    {
      title: '個別活動等(行事ごとの外出)',
      detail: (
        <p className={classes.body}>
          それぞれに合わせた個別作業を行います。{'\n'}
          また、その時季に予知外出したりもします。楽しいぞー!!
        </p>
      ),
    },
    {
      title: '手作りおやつ',
      detail: (
        <p className={classes.body}>
          皆さんと一緒におやつを楽しくいただきます。子どもたちは日常生活の練習として、
          高齢者の方から駄菓子を自分で購入し、食べることもできます。
        </p>
      ),
    },
    {
      title: '体操やちょっとした遊び',
      detail: (
        <p className={classes.body}>
          皆さんとワイワイ言いながら、ちょっとしたゲームをして1日を終えます。
        </p>
      ),
    },
    {
      title: '車でのお送り 16:30〜(17:30)',
      detail: (
        <p className={classes.body}>
          また明日
          <span role="img" aria-label="heart-emoji">
            ❤️
          </span>{' '}
          お気を付けて。 {'\n'}
          <span className={classes.red}>
            ご自分で来られたり、ご家族の送迎でもOKです。{'\n'}
            {'\n'}
          </span>
          児童発達支援 〜15:30 まで{'\n'}
          放課後デイ 〜17:30 まで{'\n'}
          延長をご希望の方はご相談ください。{'\n'}
        </p>
      ),
    },
  ]
  return routineContents.map((r, i) => (
    <RoutineWork
      {...props}
      title={r.title}
      isEnd={i === routineContents.length - 1}
    >
      {r.detail}
    </RoutineWork>
  ))
}
