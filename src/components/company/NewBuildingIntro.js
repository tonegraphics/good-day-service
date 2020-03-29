import React from 'react'
import PicturesGrid from 'components/common/PicturesGrid'

const filenames = ['41plus1.jpg', '41plus2.jpeg', '41plus3.jpg', '41plus4.jpg']

export default props => {
  const { isDesktop } = props
  return (
    <div>
      <p>
        日当たり・風通りもよく設計し、車いすの子たち等も通えるようにバリアフリーでつくりました♡
      </p>
      <PicturesGrid {...{ isDesktop, filenames }} />
    </div>
  )
}
