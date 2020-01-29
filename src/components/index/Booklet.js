import React from 'react'
import Button from 'components/common/Button'

export default props => {
  const { classes } = props
  return (
    <div>
      <p className={classes.body}>
        パンフレットダウンロードはこちら。印刷してお使いください。
      </p>
      <Button title="パンフレットダウンロード" />
    </div>
  )
}
