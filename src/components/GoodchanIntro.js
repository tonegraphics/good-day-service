import React from 'react'
import PicturesGrid from 'components/PicturesGrid'

export default props => {
  const { classes, isDesktop } = props
  const goodChanfiles = [
    'goodchan2.png',
    'goodchan1.jpg',
    'goodchan3.jpg',
    'goodchan4.jpg',
  ]

  return (
    <div>
      <p className={classes.body}>
        アイドル犬グッドちゃんです。みんなと仲良く暮らしています。
      </p>
      <PicturesGrid {...{ isDesktop }} filenames={goodChanfiles} />
    </div>
  )
}
