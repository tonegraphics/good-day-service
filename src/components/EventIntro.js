import React from 'react'
import PicturesGrid from 'components/PicturesGrid'

export default props => {
  const { classes, isDesktop } = props
  const eventfiles = [
    'event1.jpeg',
    'event2.jpeg',
    'event3.jpeg',
    'event4.jpg',
    'event5.jpeg',
    'event6.jpeg',
  ]

  return (
    <div>
      <p className={classes.body}>
        グッドデイサービスでは、年２回近所の人達を巻き込んで {'\n'}
        夏は「そうめん流し」冬は「餅つき」を行っております。これが大好評！！
        {'\n'}
        今後も色々なイベント等行っていきたいと思いまーす。{'\n'}
        これぞ、THE 地域密着！！
      </p>
      <PicturesGrid {...{ isDesktop }} filenames={eventfiles} />
    </div>
  )
}
