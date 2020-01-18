import React from 'react'
import Image from 'components/Image'
import Routine from 'components/Routine'

export default props => {
  const { classes, isDesktop } = props

  const goodchanstyle = isDesktop
    ? {
        width: 346,
        height: 358,
      }
    : {
        width: 230,
        height: 240,
      }

  return (
    <div>
      <p className={classes.body}>
        ※対象の方によって時間が異なります。{'\n'}
        ※基本の流れですが、変更になる場合があります。{'\n'}
        {'\n'}
      </p>
      <Routine {...props} />
      <div className={classes.goodchanWrapper}>
        <Image filename="goodchan5.png" style={goodchanstyle} />
      </div>
    </div>
  )
}
