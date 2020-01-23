import React from 'react'
import PicturesGrid from 'components/PicturesGrid'

const filenames = ['41plus1.jpg', '41plus2.jpg', '41plus3.jpg', '41plus4.jpeg']

export default props => {
  const { isDesktop } = props
  return (
    <div>
      <strong>5/1 オープン予定!</strong>
      <PicturesGrid {...{ isDesktop, filenames }} />
    </div>
  )
}
