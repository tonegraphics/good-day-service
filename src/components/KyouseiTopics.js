import React from 'react'
import Topic from 'components/Topic'

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

export default props => {
  const { classes } = props
  return (
    <div>
      <p className={classes.small + ' ' + classes.topic}>
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
        <Topic key={t.title} classes={classes} title={t.title} text={t.text} />
      ))}
      <p className={classes.small}>
        全体としては、
        <span className={classes.bold}>
          利用者を限定しないため一緒に過ごすことによる生活上の相乗効果があること
        </span>
        など様々な利点があります。
      </p>
    </div>
  )
}
