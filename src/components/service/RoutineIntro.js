import React from 'react'
import Image from 'components/Image'
import Routine from 'components/service/Routine'

export default props => {
  const { classes } = props

  return (
    <div>
      <p className={classes.body}>
        ※対象の方によって時間が異なります。{'\n'}
        ※基本の流れですが、変更になる場合があります。{'\n'}
        {'\n'}
      </p>
      <Routine {...props} />
      <Image filename="goodchan5.png" />
    </div>
  )
}
