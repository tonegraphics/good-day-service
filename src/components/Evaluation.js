import React from 'react'
import H2 from 'components/H2'
import Button from 'components/Button'

export default props => {
  const contents = [
    {
      title: '児童発達支援',
      selfEval:
        'https://drive.google.com/drive/folders/1wjxj3Pac0fLBh08G8oVpGkJ6VbT3lQSP?usp=sharing',
      parentsEval:
        'https://drive.google.com/drive/folders/1VxtKquDyIzFda0iK-IY_u7sG7j0ukURS?usp=sharing',
    },
    {
      title: '放課後等デイサービス',
      selfEval:
        'https://drive.google.com/drive/folders/1y9s4fveeDIrx0WIEYaQ7UHucgrDMJ1tg?usp=sharing',
      parentsEval:
        'https://drive.google.com/drive/folders/14PFfYiBL13rGGGzzt839vs5AhP3NmdXg?usp=sharing',
    },
  ]
  return (
    <div>
      {contents.map(c => (
        <div>
          <H2>{c.title}</H2>
          <Button href={c.selfEval}>自己評価</Button>
          <Button href={c.parentsEval}>保護者等からの評価</Button>
        </div>
      ))}
    </div>
  )
}
